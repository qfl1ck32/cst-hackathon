import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import Button from "@app/components/Button";
import schema from "./schema";
import styles from "./styles.module.scss";

import Input from "@app/components/Input";

export type FormValues = InferType<typeof schema>;

export interface Props {
  onSubmit: SubmitHandler<FormValues>;
  isLoading: boolean;
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div className={styles.title}>Sign Up</div>

        <div className={styles.fields}>
          <Input error={errors.username?.message} {...register("username")} placeholder="Username" />

          <Input error={errors.email?.message} {...register("email")} placeholder="Email" />

          <Input type="password" error={errors.password?.message} {...register("password")} placeholder="Password" />
        </div>

        <div className={styles.button}>
          <Button isLoading={props.isLoading} type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
