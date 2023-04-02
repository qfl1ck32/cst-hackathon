import { EndUserBook } from "@app/graphql/generated/graphql";

import styles from "./styles.module.scss";

export interface Props {
  endUserBooks: EndUserBook[];
  onGoToEndUserBook: (endUserBookId: string) => void;
}

const Library: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {!props.endUserBooks.length && (
          <div className={styles["no-books"]}>
            <h2>You don't have any books in your library yet.</h2>
          </div>
        )}

        {props.endUserBooks.map((endUserBook, index) => (
          <div onClick={() => props.onGoToEndUserBook(endUserBook._id)} key={index}>
            <div className={styles.book}>
              <h2>{endUserBook.book.title}</h2>
              <h3>({endUserBook.book.author})</h3>
              <h4>Progress: {endUserBook.progress.toFixed(2)}%</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
