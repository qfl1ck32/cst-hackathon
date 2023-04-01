import Loader from "@app/components/Loader";
import PageLoader from "@app/components/PageLoader";
import Layout from "@app/containers/layout";
import LibraryBookContainer from "@app/containers/LibraryBook";
import { useRouter } from "@bluelibs/x-ui-next";

const Library: React.FC = () => {
  const router = useRouter();

  if (!router.next.isReady) {
    return <PageLoader />;
  }

  const bookId = router.next.query.bookId as string;

  return (
    <Layout>
      <LibraryBookContainer {...{ endUserBookId: bookId }} />
    </Layout>
  );
};

export default Library;
