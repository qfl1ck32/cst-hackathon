import BannerContainer from "@app/containers/Banner";
import MenuContainer from "@app/containers/Menu";

import styles from "./styles.module.scss";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <MenuContainer />
      </div>

      <div className={styles.banner}>
        <BannerContainer />
      </div>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
