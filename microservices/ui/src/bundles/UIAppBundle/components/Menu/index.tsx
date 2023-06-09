import Button from "@app/components/Button";
import styles from "./styles.module.scss";

import BookLightSvg from "@public/svg/book-light.svg";

export interface Tab {
  name: string;
  icon?: any;

  onClick: () => void;
}
export interface Props {
  tabs: Tab[];

  onLogout?: () => Promise<void>;
}

const Menu: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles["top-icon"]}>
          <BookLightSvg />
        </div>
        <div className={styles["top-text"]}>BookQuest</div>
      </div>

      <div className={styles.center}>
        {props.tabs.map((tab, index) => (
          <div key={index} className={styles.tab}>
            <Button onClick={tab.onClick} key={index}>
              <div className={styles.text}>{tab.name}</div>
            </Button>
          </div>
        ))}
      </div>

      {props.onLogout && (
        <div className={styles.bottom}>
          <Button>
            <div onClick={props.onLogout} className={styles.text}>
              Logout
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Menu;
