import { LEVEL_UP_EXPERIENCE } from "@app/constants";
import styles from "./styles.module.scss";

export interface Props {
  username: string;
  level: number;
  experience: number;
}

const Banner: React.FC<Props> = (props) => {
  // const progress = (props.experience / LEVEL_UP_EXPERIENCE) * 100;

  const progress = 50;

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.bar} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles["user-data"]}>
        <div className={styles["user-data__level"]}>LvL {props.level}</div>
        <div className={styles["user-data__username"]}>{props.username}</div>
      </div>
    </div>
  );
};

export default Banner;
