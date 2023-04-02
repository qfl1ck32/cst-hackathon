import { EndUserBookTestQuestion, EndUserBookTestQuestionType } from "@app/graphql/generated/graphql";
import { Fragment, useState } from "react";
import Button from "@app/components/Button";

import styles from "./styles.module.scss";
import ProgressBar from "../ProgressBar";
import Input from "../Input";
import classNames from "classnames";

export interface Props {
  questions: EndUserBookTestQuestion[];
  onSubmit: (answers: string[]) => Promise<void>;
}

const ChapterTest: React.FC<Props> = (props) => {
  const [answers, setAnswers] = useState<string[]>(new Array(props.questions.length).fill(""));

  const [questionIndex, setQuestionIndex] = useState(0);

  const updateAnswer = (answer: string, goToNext?: boolean) => {
    const newAnswers = [...answers];

    newAnswers[questionIndex] = answer;

    setAnswers(newAnswers);

    if (goToNext) {
      // goToNextQuestion();
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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.progress}>
          <ProgressBar progressColor="#F2D388" width="80%" height={40} progress={(100 * questionIndex) / (props.questions.length - 1)} />
          <div className={styles.index}>
            {questionIndex + 1} / {props.questions.length}
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>{<h1>{question.text}</h1>}</div>

      <div className={classNames(styles.wrapper)}>
        {question.type === EndUserBookTestQuestionType.MultipleChoice && (
          <div className={styles.choices}>
            {question.choices!.map((choice, index) => (
              <div
                className={classNames(styles["choices-box"], {
                  [styles["choices-box--selected"]]: answers[questionIndex] === choice,
                })}
                onClick={() => updateAnswer(choice as string, true)}
                key={index}
              >
                {choice}
              </div>
            ))}
          </div>
        )}

        {question.type === EndUserBookTestQuestionType.Boolean && (
          <div className={styles.choices}>
            <div
              className={classNames(styles["choices-box"], {
                [styles["choices-box--selected"]]: answers[questionIndex] === "true",
              })}
              onClick={() => updateAnswer("true", true)}
            >
              True
            </div>
            <div
              className={classNames(styles["choices-box"], {
                [styles["choices-box--selected"]]: answers[questionIndex] === "false",
              })}
              onClick={() => updateAnswer("false", true)}
            >
              False
            </div>
          </div>
        )}

        {question.type === EndUserBookTestQuestionType.Text && (
          <Input width="80%" value={answers[questionIndex]} onChange={(e) => updateAnswer(e.target.value, false)} type="text" />
        )}
      </div>

      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          {
            <Button disabled={isFirstQuestion} onClick={goToPreviousQuestion}>
              Previous
            </Button>
          }

          {(!isLastQuestion || !answers[questionIndex]) && (
            <Button disabled={isLastQuestion || !answers[questionIndex]} onClick={goToNextQuestion}>
              Next
            </Button>
          )}

          {isLastQuestion && answers[questionIndex] && <Button onClick={() => props.onSubmit(answers)}>Submit</Button>}
        </div>
      </div>
    </div>
  );
};

export default ChapterTest;
