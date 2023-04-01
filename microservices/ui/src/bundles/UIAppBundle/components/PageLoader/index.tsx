import Loader from "../Loader";

import styles from "./styles.module.scss";

const PageLoader: React.FC = () => {
  return (
    <div className={styles.container}>
      <Loader />
    </div>
  );
};

export default PageLoader;
