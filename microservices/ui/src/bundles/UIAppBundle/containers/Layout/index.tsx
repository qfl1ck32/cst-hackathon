import PageLoader from "@app/components/PageLoader";
import BannerContainer from "@app/containers/Banner";
import MenuContainer from "@app/containers/Menu";
import { useAppGuardian } from "@app/services/AppGuardian";
import { useEffect } from "react";

import styles from "./styles.module.scss";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const guardian = useAppGuardian();

  if (!guardian.state.initialised) {
    return <PageLoader />;
  }

  if (guardian.state.fetchingUserData) {
    return <PageLoader />;
  }

  // hacky stuff because framework is nuts :DDDD
  if (localStorage["bluelibs-token"] && !guardian.state.isLoggedIn) {
    return <PageLoader />;
  }

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
