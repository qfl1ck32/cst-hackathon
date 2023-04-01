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
  fullName: string;
  authorName: string;
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
        "fullName": "The full name of the book",
        "authorName": "The namr of the author"
      }
      `
    );

    return JSON.parse(answer) as KnowledgeAboutBook;
  }

  async getBookChapters(bookName: string): Promise<string[]> {
    const chapters = await this.ask(
      `What are the chapters of the book "${bookName}"? Please answer with a list of chapters in this exact format as an array in JavaScript, using double quotes. If you don't have knowledge about the book, return an empty array.`
    );

    console.log(chapters);

    return JSON.parse(chapters) as string[];
  }
}
