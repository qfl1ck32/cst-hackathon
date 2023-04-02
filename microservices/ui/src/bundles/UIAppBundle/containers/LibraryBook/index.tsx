import LibraryBook from "@app/components/LibraryBook";
import PageLoader from "@app/components/PageLoader";
import { EndUserBookDetails, useEndUsersGetBookQuery } from "@app/graphql/generated/graphql";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { Test } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { use, useRouter } from "@bluelibs/x-ui-next";
import { Fragment } from "react";
import { toast } from "react-toastify";

export interface Props {
  endUserBookId: string;
}

const LibraryBookContainer: React.FC<Props> = (props) => {
  const { data, loading } = useEndUsersGetBookQuery({
    fetchPolicy: "network-only",

    variables: {
      input: {
        endUserBookId: props.endUserBookId,
      },
    },
  });

  const router = useRouter();

  const endUserService = use(EndUserService);

  const [startTest, startTestLoading] = useOnSubmit({
    onSubmit: async (chapterId: string) => {
      toast.info("Generating your test. This might take a couple of seconds...");

      await endUserService.generateTest({
        chapterId,
        endUserBookId: props.endUserBookId,
      });

      router.go(Test, {
        params: {
          chapterId,
          endUserBookId: props.endUserBookId,
        },
      });

      toast.success("The test has been generated. Good luck!");
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Fragment>
      {startTestLoading && <PageLoader />}

      <LibraryBook {...{ startTest }} bookDetails={data!.EndUsersGetBook as EndUserBookDetails} />
    </Fragment>
  );
};

export default LibraryBookContainer;
