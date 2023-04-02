import { EndUserBookChapterDetails, EndUserBookDetails } from "@app/graphql/generated/graphql";
import Button from "@app/components/Button";
import PageLoader from "@app/components/PageLoader";
import { MAX_SCORE } from "@app/constants";

import styles from "./styles.module.scss";
import ProgressBar from "../ProgressBar";
import classNames from "classnames";

import TickSvg from "@public/svg/tick.svg";
import { useState } from "react";
import Popup from "../Popup";
export interface Props {
  bookDetails: EndUserBookDetails;
  startTest: (chapterId: string) => Promise<void>;
}

const LibraryBook: React.FC<Props> = (props) => {
  const [selectedChapter, setSelectedChapter] = useState<EndUserBookChapterDetails>();

  const { bookDetails } = props;

  return (
    <div className={styles.container}>
      <div className={styles["container-left"]}>
        <div className={styles.title}>
          <h1>{bookDetails.title}</h1>
        </div>

        <hr />

        <div className={styles.authors}>
          <h3>{bookDetails.author}</h3>
        </div>

        <div className={styles.progress}>
          <ProgressBar height={20} progress={bookDetails.progress} />

          <div className={styles["progress-text"]}>{bookDetails.progress.toFixed(2)}%</div>
        </div>
      </div>

      <div className={styles["container-right"]}>
        {bookDetails.chapters.map((chapter, index) => (
          <div
            onClick={() => setSelectedChapter(chapter)}
            className={classNames(styles.chapter, {
              [styles["chapter-completed"]]: chapter.isPassed,
            })}
            key={index}
          >
            <div className={styles["chapter-title"]}>
              <h4>{chapter.title}</h4>
              {chapter.isPassed && <div className={styles.tick}>✅</div>}
            </div>
          </div>
        ))}

        <Popup backgroundColor="#FFFBBB" isOpen={Boolean(selectedChapter)} onClose={() => setSelectedChapter(undefined)}>
          {selectedChapter && (
            <div className={styles["chapter-popup"]}>
              <h2>{selectedChapter.title}</h2>

              <p>Test attempts: {selectedChapter!.numberOfTries}</p>

              {selectedChapter!.isPassed && (
                <p>
                  Score: {selectedChapter!.score} / {MAX_SCORE}
                </p>
              )}

              {!selectedChapter!.isPassed && (
                <div>
                  <br />
                  <Button onClick={() => props.startTest(selectedChapter!._id)}>Start test</Button>
                </div>
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default LibraryBook;
