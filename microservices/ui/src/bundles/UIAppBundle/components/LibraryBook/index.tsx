import { EndUserBookDetails } from "@app/graphql/generated/graphql";
import Button from "@app/components/Button";
import PageLoader from "@app/components/PageLoader";

export interface Props {
  bookDetails: EndUserBookDetails;
  startTest: (chapterId: string) => Promise<void>;
  isLoading: boolean;
}

const LibraryBook: React.FC<Props> = (props) => {
  const { bookDetails } = props;

  {
    /* TODO: make this nicer xD */
  }
  if (props.isLoading) {
    return <PageLoader />;
  }

  return (
    <div>
      <h1>Book: {bookDetails.title}</h1>
      <p>Author: {bookDetails.author}</p>

      <h3>Chapters:</h3>

      {bookDetails.chapters.map((chapter, index) => (
        <div key={index}>
          <h4>{chapter.title}</h4>
          <p>Is passed: {chapter.isPassed ? "Yes" : "No"}</p>
          <p>Tries to pass it: {chapter.numberOfTries}</p>

          {!chapter.isPassed && <Button onClick={() => props.startTest(chapter._id)}>Start test</Button>}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LibraryBook;
