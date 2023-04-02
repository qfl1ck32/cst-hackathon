import Library from "@app/components/Library";
import PageLoader from "@app/components/PageLoader";
import { EndUserBook, useEndUsersGetBooksQuery } from "@app/graphql/generated/graphql";
import { Book } from "@app/routes";
import { useRouter } from "@bluelibs/x-ui-next";

import styles from "./styles.module.scss";

const LibraryContainer: React.FC = () => {
  const { data, loading } = useEndUsersGetBooksQuery();

  const router = useRouter();

  const onGoToEndUserBook = (endUserBookId: string) => {
    router.go(Book, {
      params: {
        endUserBookId,
      },
    });
  };

  if (loading) return <PageLoader />;

  return (
    <div className={styles.container}>
      <Library {...{ onGoToEndUserBook }} endUserBooks={data!.EndUsersGetBooks as EndUserBook[]} />
    </div>
  );
};

export default LibraryContainer;
