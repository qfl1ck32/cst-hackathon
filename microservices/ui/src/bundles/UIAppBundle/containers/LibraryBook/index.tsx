import LibraryBook from "@app/components/LibraryBook";
import PageLoader from "@app/components/PageLoader";
import { EndUserBookDetails, useEndUserGetBookQuery } from "@app/graphql/generated/graphql";

export interface Props {
  endUserBookId: string;
}

const LibraryBookContainer: React.FC<Props> = (props) => {
  const { data, loading } = useEndUserGetBookQuery({
    variables: {
      input: {
        endUserBookId: props.endUserBookId,
      },
    },
  });

  if (loading) {
    return <PageLoader />;
  }

  return (
    // TODO
    <LibraryBook bookDetails={data!.EndUsersGetBook as EndUserBookDetails} />
  );
};

export default LibraryBookContainer;
