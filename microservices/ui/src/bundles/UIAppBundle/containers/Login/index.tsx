import Hero from "@app/components/Hero";
import Login, { FormValues } from "@app/components/Login";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { Home, Library } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { use, useRouter } from "@bluelibs/x-ui-next";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

const LoginContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const router = useRouter();

  const [onSubmit, isLoading] = useOnSubmit({
    onSubmit: async (input: FormValues) => {
      await endUserService.login(input);

      toast.info("You have successfully logged in.");

      router.go(Library);
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  return (
    <div className={styles.wrapper}>
      <Hero />
      <Login {...{ onSubmit, isLoading }} />
    </div>
  );
};

export default LoginContainer;
