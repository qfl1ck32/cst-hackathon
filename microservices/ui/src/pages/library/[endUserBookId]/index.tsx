import Loader from "@app/components/Loader";
import PageLoader from "@app/components/PageLoader";
import Layout from "@app/containers/Layout";
import LibraryBookContainer from "@app/containers/LibraryBook";
import { useRouter } from "@bluelibs/x-ui-next";

const Library: React.FC = () => {
  const router = useRouter();

  if (!router.next.isReady) {
    return <PageLoader />;
  }

  const endUserBookId = router.next.query.endUserBookId as string;

  return (
    <Layout>
      <LibraryBookContainer {...{ endUserBookId }} />
    </Layout>
  );
};

export default Library;
