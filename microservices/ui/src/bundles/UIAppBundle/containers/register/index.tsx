import Register, { FormValues } from "@app/components/register";
import { Login } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { useRouter } from "@bluelibs/x-ui-next";
import { use } from "@bluelibs/x-ui-react-bundle";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await endUserService.register(data);

    router.go(Login);

    toast.success("You have been registered successfully. Please check your e-mail for confirmation.");
  };

  return <Register onSubmit={onSubmit} />;
};

export default RegisterContainer;
