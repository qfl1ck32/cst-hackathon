import ChapterTest from "@app/components/ChapterTest";
import PageLoader from "@app/components/PageLoader";
import { EndUserBookTestQuestion, useEndUsersGetChapterTestQuery } from "@app/graphql/generated/graphql";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { use } from "@bluelibs/x-ui-next";
import { toast } from "react-toastify";

export interface Props {
  chapterId: string;
  endUserBookId: string;
}

const ChapterTestContainer: React.FC<Props> = (props) => {
  const { data, loading } = useEndUsersGetChapterTestQuery({
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
      const response = await endUserService.submitTest({
        answers,
        chapterId: props.chapterId,
        endUserBookId: props.endUserBookId,
      });

      toast.success("Test submitted successfully");
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  if (loading || submitLoading) {
    return <PageLoader />;
  }

  return <ChapterTest {...{ onSubmit }} questions={data!.EndUsersGetChapterTest as EndUserBookTestQuestion[]} />;
};

export default ChapterTestContainer;
