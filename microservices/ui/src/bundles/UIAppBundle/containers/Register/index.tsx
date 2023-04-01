import Hero from "@app/components/Hero";
import Register, { FormValues } from "@app/components/Register";
import useOnSubmit from "@app/hooks/useOnSubmit";
import { Login } from "@app/routes";
import { EndUserService } from "@app/services/EndUser";
import { extractError } from "@app/utils/apollo";
import { useRouter, use } from "@bluelibs/x-ui-next";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";

const RegisterContainer: React.FC = () => {
  const endUserService = use(EndUserService);

  const router = useRouter();

  const [onSubmit, isLoading] = useOnSubmit({
    onSubmit: async (input: FormValues) => {
      await endUserService.register(input);

      router.go(Login);

      toast.success("You have been registered successfully. Please check your e-mail for confirmation.");
    },

    onError: (err) => {
      toast.error(extractError(err));
    },
  });

  return (
    <div className={styles.wrapper}>
      <Hero />

      <Register {...{ onSubmit, isLoading }} />
    </div>
  );
};

export default RegisterContainer;
