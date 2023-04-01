import { forwardRef, Fragment } from "react";

import styles from "./styles.module.scss";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error, ...inputProps } = props;

  return (
    <Fragment>
      <input className={styles.input} ref={ref} {...inputProps} />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </Fragment>
  );
});

export default Input;
