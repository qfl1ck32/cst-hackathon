import { EndUserBook } from "@app/graphql/generated/graphql";

export interface Props {
  endUserBooks: EndUserBook[];
  onGoToEndUserBook: (endUserBookId: string) => void;
}

const Library: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Library</h1>

      <div>
        {props.endUserBooks.map((endUserBook, index) => (
          <div onClick={() => props.onGoToEndUserBook(endUserBook._id)} key={index}>
            <h2>{endUserBook.book.title}</h2>
            <h2>Progress: {endUserBook.progress.toFixed(2)}%</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
