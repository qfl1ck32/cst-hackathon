import Login, { FormValues } from "@app/components/Login";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { Home } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { use, useRouter } from "@bluelibs/x-ui-next";
import { toast } from "react-toastify";

const LoginContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const router = useRouter();

  const [onSubmit, isLoading] = useOnSubmit({
    onSubmit: async (input: FormValues) => {
      await endUserService.login(input);

      toast.info("You have been logged in successfully.");

      router.go(Home);
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  return <Login {...{ onSubmit, isLoading }} />;
};

export default LoginContainer;
