import Loader from "@app/components/Loader";
import { forwardRef } from "react";

import styles from "./styles.module.scss";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, ...buttonProps } = props;

  return (
    <button className={styles.container} {...buttonProps} ref={ref}>
      <div className={styles.children}>{children}</div>
    </button>
  );
});

export default Button;
