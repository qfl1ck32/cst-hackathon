import Loader from "../Loader";

import styles from "./styles.module.scss";

export interface Props {
  backgroundColor?: string;
}

const PageLoader: React.FC<Props> = ({ backgroundColor }) => {
  return (
    <div style={{ backgroundColor }} className={styles.container}>
      <Loader />
    </div>
  );
};

export default PageLoader;
