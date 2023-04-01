import Loader from "@app/components/loader";
import { forwardRef } from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isLoading, children, ...buttonProps } = props;

  return (
    <button disabled={isLoading} {...buttonProps} ref={ref}>
      {isLoading ? <Loader /> : children}
    </button>
  );
});

export default Button;
