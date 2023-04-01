import { EndUserBook } from "@app/graphql/generated/graphql";

export interface Props {
  books: EndUserBook[];
}

const Library: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Library</h1>
    </div>
  );
};

export default Library;
