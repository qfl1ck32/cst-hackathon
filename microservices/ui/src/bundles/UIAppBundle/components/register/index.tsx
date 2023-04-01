import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import schema from "./schema";

export type FormValues = InferType<typeof schema>;

export interface Props {
  onSubmit: SubmitHandler<FormValues>;
}

const Register: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input {...register("username")} placeholder="Username" />
        <p>{errors.username?.message}</p>

        <input {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <input {...register("password")} placeholder="Password" />
        <p>{errors.password?.message}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
