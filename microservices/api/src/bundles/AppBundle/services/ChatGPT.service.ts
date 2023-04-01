import {
  Service,
  Inject,
  EventManager,
  ContainerInstance,
} from "@bluelibs/core";
import env from "@root/startup/env";

import { Configuration, OpenAIApi } from "openai";

export type IHistory = [string, string][];

export type KnowledgeAboutBook = {
  exists: boolean;
  title?: string;
  author?: string;
};

export type QuestionAboutBookChapter = {
  text: string;
  type: "MULTIPLE_CHOICE" | "BOOLEAN" | "TEXT";
  choices?: string[];
};

@Service()
export class ChatGPTService {
  private api: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: env.OPENAI_SECRET_KEY,
    });

    this.api = new OpenAIApi(configuration);
  }

  async ask(question: string, history: IHistory = []) {
    const messages = [];

    for (const [input_text, completion_text] of history) {
      messages.push({ role: "user", content: input_text });
      messages.push({ role: "assistant", content: completion_text });
    }

    messages.push({ role: "user", content: question });

    const completion = await this.api.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    const completion_text = completion.data.choices[0].message.content;

    history.push([question, completion_text]);

    return completion_text;
  }

  async getKnowledgeAboutBook(bookName: string) {
    const answer = await this.ask(
      `Do you have knowledge about the book "${bookName}"? Please answer exactly in this format:

      {
        "exists": true or false,
        "title": "The full name of the book",
        "author": "The namr of the author"
      }
      `
    );

    return JSON.parse(answer) as KnowledgeAboutBook;
  }

  async getBookChapters(bookName: string): Promise<string[]> {
    const chapters = await this.ask(
      `What are the chapters of the book "${bookName}"? Please answer with a list of chapters in this exact format as an array in JavaScript, using double quotes. If you don't have knowledge about the book, return an empty array.`
    );

    return JSON.parse(chapters) as string[];
  }

  async generateQuestionsAboutBookChapter(
    bookName: string,
    chapterName: string
  ) {
    const questions = await this.ask(
      `Please generate 6 questions about the book "${bookName}" - chapter "${chapterName}".
      There are three types of questions: with multiple answers, with true or false or with text.
      Generate 2 questions of each kind.

      Please answer with a list of questions in this exact format:
      [
        {
          "text": string, // the question
          "type": "MULTIPLE_CHOICE" | "BOOLEAN" | "TEXT",
          "choices": string[] // if type === "multiple"
        }
      ]
      `
    );

    return JSON.parse(questions) as QuestionAboutBookChapter[];
  }

  public async checkAnswers(
    bookName: string,
    chapterName: string,
    questions: string[],
    answers: string[]
  ) {
    const response = await this.ask(
      `
      Please check the answers for the questions about the book "${bookName}" - chapter "${chapterName}".

      Please answer, for each question and answer, in this format:

      [
        {
          "question": string,
          "answer": string,
          "correct": boolean,
          "explanation": string, // if correct == false
        }
      ]

      These are the questions and the answers:

      ${new Array(questions.length)
        .fill(null)
        .map(
          (_, index) =>
            `Question ${index + 1}: ${questions[index]} | Answer: ${
              answers[index]
            }`
        )}
      `
    );

    console.log(response);

    return response;
  }
}
