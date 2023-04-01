import Search, { FormValues } from "@app/components/search";
import { EndUsersSearchBookMutation } from "@app/graphql/generated/graphql";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { Book } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { useRouter } from "@bluelibs/x-ui-next";
import { use } from "@bluelibs/x-ui-react-bundle";
import { useState } from "react";
import { toast } from "react-toastify";

const SearchContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const router = useRouter();

  const [book, setBook] = useState<EndUsersSearchBookMutation["EndUsersSearchBook"] | null>(null);

  const [onSearch, loadingSearch] = useOnSubmit({
    onSubmit: async (input: FormValues) => {
      const book = await endUserService.searchBook(input);

      if (book) {
        setBook(book);
      }
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  const [onAddToLibrary, loadingAddToLibrary] = useOnSubmit({
    onSubmit: async () => {
      const bookId = await endUserService.addBookToLibrary({
        bookId: book!.bookId,
      });

      toast.info(`The book "${book!.title} has been added to your library."`);

      router.go(Book, {
        params: {
          id: bookId,
        },
      });
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  return <Search {...{ onSearch, onAddToLibrary, loadingSearch, loadingAddToLibrary, book }} />;
};

export default SearchContainer;
