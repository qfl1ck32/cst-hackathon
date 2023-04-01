import Menu, { Tab } from "@app/components/Menu";
import { Landing } from "@app/routes";
import { useAppGuardian } from "@app/services/AppGuardian";
import { useRouter } from "@bluelibs/x-ui-next";

import styles from "./styles.module.scss";

const MenuContainer: React.FC = () => {
  const router = useRouter();

  const appGuardian = useAppGuardian();

  const tabs: Tab[] = [
    {
      name: "Profile",
      onClick: () => {},
    },
    {
      name: "Library",
      onClick: () => {},
    },
    {
      name: "Search",
      onClick: () => {},
    },
  ];

  const onLogout = () => {
    appGuardian.logout();

    router.go(Landing);
  };

  return (
    <div className={styles.container}>
      <Menu {...{ tabs, onLogout }} />
    </div>
  );
};

export default MenuContainer;
