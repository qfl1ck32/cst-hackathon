import styles from "./styles.module.scss";

export interface Props {
  progress: number;
  height: number;
  width?: string;
  progressColor?: string;
}

const ProgressBar: React.FC<Props> = (props) => {
  return (
    <div style={{ width: props.width, height: `${props.height}px` }} className={styles.progress}>
      <div className={styles.bar} style={{ height: `${props.height}px`, backgroundColor: props.progressColor, width: `${props.progress}%` }} />
    </div>
  );
};

export default ProgressBar;
