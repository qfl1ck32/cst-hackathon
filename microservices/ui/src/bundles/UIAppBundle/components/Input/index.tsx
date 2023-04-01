import { forwardRef } from "react";

import styles from './styles.module.scss'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <input className={styles.input} ref={ref} {...props} />
    )
})

export default Input