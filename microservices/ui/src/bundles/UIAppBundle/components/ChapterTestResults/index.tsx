import { EndUsersSubmitTestResponse, EndUsersSubmitTestResponseAnswer } from "@app/graphql/generated/graphql";
import Button from "@app/components/Button";

import styles from "./styles.module.scss";
import { MAX_SCORE } from "@app/constants";
import { useState } from "react";
import Popup from "../Popup";

export interface Props {
  results: EndUsersSubmitTestResponse;

  goBack: () => void;
}

const ChapterTestResults: React.FC<Props> = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<EndUsersSubmitTestResponseAnswer>();

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div>Attempt #{props.results.attempts}</div>

        <div>
          Your score is: {props.results.score} / {MAX_SCORE}
        </div>

        <div>{props.results.hasPassed ? "You passed!" : "You failed!"}</div>
      </div>

      <div className={styles.answers}>
        {props.results!.answers!.map((answer, index) => (
          <div onClick={() => setSelectedAnswer(answer)} className={styles["answer-details"]} key={index}>
            <div className={styles.question}>{answer.question}</div>

            <div className={styles.correct}>{answer.correct ? "✅" : "❌"}</div>
          </div>
        ))}
      </div>

      <div className={styles.button}>
        <Button style={{ color: "#313131" }} onClick={props.goBack}>
          Return to the book
        </Button>
      </div>

      <Popup isOpen={!!selectedAnswer} onClose={() => setSelectedAnswer(undefined)} backgroundColor="#D9CAB3">
        {selectedAnswer && (
          <div className={styles["popup-answer"]}>
            <div className={styles["popup-answer-question"]}>{selectedAnswer!.question}</div>

            <div className={styles.hr} />

            <div className={styles["popup-answer-your"]}>Your answer: {selectedAnswer.answer}</div>

            {selectedAnswer.explanation && <div className={styles["popup-answer-explanations"]}>Explanation: {selectedAnswer!.explanation}</div>}
          </div>
        )}
      </Popup>
    </div>
  );
};

export default ChapterTestResults;
