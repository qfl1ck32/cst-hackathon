import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import Button from "@app/components/Button";
import schema from "./schema";

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
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input {...register("usernameOrEmail")} placeholder="Username / e-mail" />
        <p>{errors.usernameOrEmail?.message}</p>

        <input {...register("password")} placeholder="Password" />
        <p>{errors.password?.message}</p>

        <Button isLoading={props.isLoading} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
