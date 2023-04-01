import PageLoader from "@app/components/PageLoader";
import ChapterTestContainer from "@app/containers/ChapterTest";
import { useRouter } from "@bluelibs/x-ui-next";

const ChapterTest: React.FC = () => {
  const router = useRouter();

  if (!router.next.isReady) {
    return <PageLoader />;
  }

  const endUserBookId = router.next.query.endUserBookId as string;
  const chapterId = router.next.query.chapterId as string;

  return (
    <ChapterTestContainer
      {...{
        chapterId,
        endUserBookId,
      }}
    />
  );
};

export default ChapterTest;
