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
    <div className={styles.container}>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className={styles.title}>Log In</div>

        <div className={styles.fields}>
          <Input
            style={{ marginTop: "10px" }}
            error={errors.usernameOrEmail?.message}
            {...register("usernameOrEmail")}
            placeholder="Username or email"
          />

          <Input
            autoComplete="off"
            style={{ marginTop: "10px" }}
            type="password"
            error={errors.password?.message}
            {...register("password")}
            placeholder="Password"
          />
        </div>

        <div className={styles.button}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
