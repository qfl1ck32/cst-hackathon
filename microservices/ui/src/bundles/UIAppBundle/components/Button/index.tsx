import Loader from "@app/components/Loader";
import { forwardRef } from "react";

import styles from "./styles.module.scss";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
  text?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isLoading, children, text, ...buttonProps } = props;

  return (
    <button className={styles.container} disabled={isLoading} {...buttonProps} ref={ref}>
      {isLoading ? <Loader /> : children}
      {text ? <span >{text}</span> : null}
    </button>
  );
});

export default Button;
