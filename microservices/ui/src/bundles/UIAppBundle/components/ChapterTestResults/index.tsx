import { EndUsersSubmitTestResponse } from "@app/graphql/generated/graphql";
import Button from "@app/components/Button";

export interface Props {
  results: EndUsersSubmitTestResponse;

  goBack: () => void;
}

const ChapterTestResults: React.FC<Props> = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Results</h1>

      <p>Passed: {props.results.hasPassed ? "Yes" : "No"}</p>
      <p>Score: {props.results.score}</p>

      {props.results!.answers!.map((answer, index) => (
        <div key={index}>
          <p>Question: {answer.question}</p>
          <p>Correct: {answer.correct ? "Yes" : "No"}</p>
          <p>Answer: {answer.answer}</p>
          {answer.explanation && <p>Explanations: {answer.explanation}</p>}
          <hr />
        </div>
      ))}

      <Button onClick={props.goBack}>Go back to main screen</Button>
    </div>
  );
};

export default ChapterTestResults;
