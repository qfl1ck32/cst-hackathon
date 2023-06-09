import styles from "./styles.module.scss";

import BookSvg from "@public/svg/book.svg";

const Hero: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <BookSvg />

      <div className={styles.text}>BookQuest</div>
    </div>
  );
};

export default Hero;
