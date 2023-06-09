import ChapterTest from "@app/components/ChapterTest";
import ChapterTestResults from "@app/components/ChapterTestResults";
import PageLoader from "@app/components/PageLoader";
import { EndUserBookTestQuestion, EndUsersSubmitTestResponse, useEndUsersGetChapterTestQuery } from "@app/graphql/generated/graphql";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { Book } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { use, useRouter } from "@bluelibs/x-ui-next";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

export interface Props {
  chapterId: string;
  endUserBookId: string;
}

const ChapterTestContainer: React.FC<Props> = (props) => {
  const [testResults, setTestResults] = useState<EndUsersSubmitTestResponse>();

  const router = useRouter();

  const { data, loading } = useEndUsersGetChapterTestQuery({
    fetchPolicy: "network-only",

    variables: {
      input: {
        chapterId: props.chapterId,
        endUserBookId: props.endUserBookId,
      },
    },
  });

  const endUserService = use(EndUserService);

  const [onSubmit, submitLoading] = useOnSubmit({
    onSubmit: async (answers: string[]) => {
      toast.info("Submitting the test. This might take a couple of seconds...");

      const response = await endUserService.submitTest({
        answers,
        chapterId: props.chapterId,
        endUserBookId: props.endUserBookId,
      });

      setTestResults(response as EndUsersSubmitTestResponse);

      toast.success("Test submitted successfully.");
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  const goBack = () => {
    router.go(Book, {
      params: {
        endUserBookId: props.endUserBookId,
      },
    });
  };

  if (loading) {
    return <PageLoader />;
  }

  if (testResults) {
    return <ChapterTestResults {...{ goBack }} results={testResults} />;
  }

  return (
    <Fragment>
      {submitLoading && <PageLoader />}
      <ChapterTest {...{ onSubmit }} questions={data!.EndUsersGetChapterTest as EndUserBookTestQuestion[]} />
    </Fragment>
  );
};

export default ChapterTestContainer;
