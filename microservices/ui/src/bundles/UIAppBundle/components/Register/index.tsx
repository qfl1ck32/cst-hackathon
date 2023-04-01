import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";

import Button from "@app/components/Button";
import schema from "./schema";
import styles from "./styles.module.scss";
import Input from "../Input";
import Hero from "../Hero";

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
      <div className={styles.box}>

        <form onSubmit={handleSubmit(props.onSubmit)}>
          <div className={styles.title}>Sign Up</div>

          <Input {...register("username")} placeholder="Username" />
          <p>{errors.username?.message}</p>

          <Input {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>

          <Input{...register("password")} placeholder="Password" />
          <p>{errors.password?.message}</p>

          <Button className={styles.register} isLoading={props.isLoading} type="submit">
            Register
          </Button>
        </form>
    </div>
  );
};

export default Register;
