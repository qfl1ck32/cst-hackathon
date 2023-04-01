import Login, { FormValues } from "@app/components/login";
import { SubmitHandler } from "react-hook-form";

const LoginContainer: React.FC = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return <Login onSubmit={onSubmit} />;
};

export default LoginContainer;
