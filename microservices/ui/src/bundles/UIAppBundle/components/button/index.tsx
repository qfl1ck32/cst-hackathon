import Loader from "@app/components/loader";
import { forwardRef } from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button disabled={props.isLoading} ref={ref}>
      {props.isLoading ? <Loader /> : props.children}
    </button>
  );
});

export default Button;
