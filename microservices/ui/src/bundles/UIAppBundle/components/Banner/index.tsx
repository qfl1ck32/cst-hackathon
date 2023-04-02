import { LEVEL_UP_EXPERIENCE } from "@app/constants";
import ProgressBar from "@app/components/ProgressBar";
import styles from "./styles.module.scss";

export interface Props {
  username: string;
  level: number;
  experience: number;
}

const Banner: React.FC<Props> = (props) => {
  const progress = (props.experience / LEVEL_UP_EXPERIENCE) * 100;

  return (
    <div className={styles.container}>
      <ProgressBar height={42.5} progress={progress} />

      <div className={styles["user-data"]}>
        <div className={styles["user-data__level"]}>LvL {props.level}</div>
        <div className={styles["user-data__username"]}>{props.username}</div>
      </div>
    </div>
  );
};

export default Banner;
