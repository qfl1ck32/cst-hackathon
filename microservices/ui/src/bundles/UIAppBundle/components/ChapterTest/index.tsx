import { EndUserBookTestQuestion, EndUserBookTestQuestionType } from "@app/graphql/generated/graphql";
import { useState } from "react";
import Button from "@app/components/Button";

export interface Props {
  questions: EndUserBookTestQuestion[];
  onSubmit: (answers: string[]) => Promise<void>;
}

const ChapterTest: React.FC<Props> = (props) => {
  const [answers, setAnswers] = useState<string[]>(new Array(props.questions.length).fill(""));

  const [questionIndex, setQuestionIndex] = useState(0);

  const [isPreview, setIsPreview] = useState(false);

  const updateAnswer = (answer: string, goToNext?: boolean) => {
    const newAnswers = [...answers];

    newAnswers[questionIndex] = answer;

    setAnswers(newAnswers);

    if (goToNext) {
      goToNextQuestion();
    }
  };

  const isFirstQuestion = questionIndex === 0;
  const isLastQuestion = questionIndex === props.questions.length - 1;

  const goToNextQuestion = () => {
    if (questionIndex === props.questions.length - 1) {
      return;
    }

    setQuestionIndex((prev) => prev + 1);
  };

  const goToPreviousQuestion = () => {
    if (questionIndex === 0) {
      return;
    }

    setQuestionIndex((prev) => prev - 1);
  };

  const question = props.questions[questionIndex];

  return (
    <div>
      <h1>Chapter Test</h1>

      {isPreview ? (
        <div>
          {props.questions.map((question, index) => (
            <div key={index}>
              <p>Question: {question.text}</p>
              <p>Answer: {answers[index]}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Index: {questionIndex + 1}</p>
          <p>Question: {question.text}</p>

          {question.type === EndUserBookTestQuestionType.MultipleChoice && (
            <div>
              <p>Choices:</p>
              {question.choices!.map((choice, index) => (
                <div onClick={() => updateAnswer(choice as string, true)} key={index}>
                  {index + 1}: {choice}
                </div>
              ))}
            </div>
          )}

          {question.type === EndUserBookTestQuestionType.Boolean && (
            <div>
              <div onClick={() => updateAnswer("true", true)}>True</div>
              <div onClick={() => updateAnswer("false", true)}>False</div>
            </div>
          )}

          {question.type === EndUserBookTestQuestionType.Text && (
            <div>
              <input value={answers[questionIndex]} onChange={(e) => updateAnswer(e.target.value, false)} type="text" />
            </div>
          )}
        </div>
      )}

      {!isFirstQuestion && !isPreview && <Button onClick={goToPreviousQuestion}>Previous</Button>}
      {!isLastQuestion && !isPreview && <Button onClick={goToNextQuestion}>Next</Button>}

      {isLastQuestion && !isPreview && answers[questionIndex] && <Button onClick={() => setIsPreview(true)}>Preview answers</Button>}

      {isLastQuestion && isPreview && <Button onClick={() => setIsPreview(false)}>Go back</Button>}
      {isLastQuestion && isPreview && <Button onClick={() => props.onSubmit(answers)}>Submit</Button>}
    </div>
  );
};

export default ChapterTest;
