import PageLoader from "@app/components/PageLoader";
import Search, { FormValues } from "@app/components/Search";
import { Book, EndUsersSearchBookMutation } from "@app/graphql/generated/graphql";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { Book as BookRoute } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { useRouter } from "@bluelibs/x-ui-next";
import { use } from "@bluelibs/x-ui-react-bundle";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";

const SearchBookContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const router = useRouter();

  const [onSearch, loadingSearch] = useOnSubmit({
    onSubmit: async (input: FormValues) => {
      const book = await endUserService.searchBook(input);

      if (book) {
        await onAddToLibrary();
      }
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  const [onAddToLibrary, loadingAddToLibrary] = useOnSubmit({
    onSubmit: async (book: Book) => {
      const endUserBookId = await endUserService.addBookToLibrary({
        bookId: book._id,
      });

      toast.info(`The book "${book!.title} has been added to your library."`);

      router.go(BookRoute, {
        params: {
          endUserBookId,
        },
      });
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  return (
    <Fragment>
      {loadingSearch || (loadingAddToLibrary && <PageLoader />)}
      <Search {...{ onSearch, onAddToLibrary, loadingSearch, loadingAddToLibrary }} />
    </Fragment>
  );
};

export default SearchBookContainer;
