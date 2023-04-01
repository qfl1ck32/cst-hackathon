import Search, { FormValues } from "@app/components/search";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { use } from "@bluelibs/x-ui-react-bundle";
import { useState } from "react";
import { toast } from "react-toastify";

const SearchContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const { onSubmit, isLoading } = useOnSubmit({
    onSubmit: async (input: FormValues) => {
      await endUserService.searchBook(input);
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  return <Search {...{ onSubmit, isLoading }} />;
};

export default SearchContainer;
