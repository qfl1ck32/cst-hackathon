import Loader from "@app/components/Loader";
import { forwardRef } from "react";

import styles from "./styles.module.scss";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  height?: number;
  width?: number;
}

const Button = forwardRef<HTMLButtonElement, Props>(function ButtonComponent(props, ref) {
  const { children, height, width, ...buttonProps } = props;

  return (
    <button style={{ height, width }} className={styles.container} {...buttonProps} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
