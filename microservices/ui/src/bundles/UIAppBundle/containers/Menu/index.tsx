import Menu, { Tab } from "@app/components/Menu";
import { Landing, Library, Profile, Search } from "@app/routes";
import { useAppGuardian } from "@app/services/AppGuardian";
import { useRouter } from "@bluelibs/x-ui-next";
import { toast } from "react-toastify";

import styles from "./styles.module.scss";

const MenuContainer: React.FC = () => {
  const router = useRouter();

  const appGuardian = useAppGuardian();

  const tabs: Tab[] = [
    // {
    //   name: "Profile",
    //   onClick: () => router.go(Profile),
    // },
    {
      name: "Library",
      onClick: () => router.go(Library),
    },
    {
      name: "Add book",
      onClick: () => router.go(Search),
    },
  ];

  const onLogout = async () => {
    router.go(Landing);

    appGuardian
      .logout()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        toast.success("You have successfully logged out.");
      });
  };

  return (
    <div className={styles.container}>
      <Menu {...{ tabs, onLogout }} />
    </div>
  );
};

export default MenuContainer;
