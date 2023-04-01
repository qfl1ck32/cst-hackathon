import Login, { FormValues } from "@app/components/login";
import { Home } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { use, useRouter } from "@bluelibs/x-ui-next";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const LoginContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await endUserService.login(data);

      toast.info("You have been logged in successfully.");

      router.go(Home);
    } catch (err: any) {
      toast.error(extractError(err));
    }
  };

  return <Login onSubmit={onSubmit} />;
};

export default LoginContainer;
