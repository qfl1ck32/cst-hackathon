import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { InferType } from "yup";

export type FormValues = InferType<typeof schema>;

export interface Props {
  onSubmit: SubmitHandler<FormValues>;
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
