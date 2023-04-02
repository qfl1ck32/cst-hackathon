import { forwardRef, Fragment } from "react";

import styles from "./styles.module.scss";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;

  width?: string;
  height?: string;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { error, height, width, ...inputProps } = props;

  return (
    <Fragment>
      <input autoComplete="off" style={{ height, width }} className={styles.input} ref={ref} {...inputProps} />
      {/* {props.error && <p className={styles.error}>{props.error}</p>} */}
    </Fragment>
  );
});

export default Input;
