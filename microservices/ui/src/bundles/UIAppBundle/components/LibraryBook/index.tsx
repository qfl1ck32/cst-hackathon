import { EndUserBookDetails } from "@app/graphql/generated/graphql";

export interface Props {
  bookDetails: EndUserBookDetails;
}

const LibraryBook: React.FC<Props> = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Book: </h1>
    </div>
  );
};

export default LibraryBook;
