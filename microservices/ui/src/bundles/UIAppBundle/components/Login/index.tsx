import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import Button from "@app/components/Button";
import schema from "./schema";
import styles from "./styles.module.scss";
import Hero from "../Hero";
import Input from "../Input";
export type FormValues = InferType<typeof schema>;

export interface Props {
  onSubmit: SubmitHandler<FormValues>;
  isLoading: boolean;
}

const Login: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit(props.onSubmit)}>

          <div className={styles.title}>Log In</div>
          <Input {...register("usernameOrEmail")} placeholder="Username / e-mail" />
          <p>{errors.usernameOrEmail?.message}</p>

          <Input {...register("password")} placeholder="Password" />
          <p>{errors.password?.message}</p>

          <Button className={styles.register} isLoading={props.isLoading} type="submit" >
            Login
          </Button>
        </form>
    </div>
  );
};

export default Login;
