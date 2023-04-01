import styles from "./styles.module.scss";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Layout;
