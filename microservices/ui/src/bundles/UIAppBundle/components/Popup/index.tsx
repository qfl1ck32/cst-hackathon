import styles from "./styles.module.scss";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;

  backgroundColor: string;
}

const Popup: React.FC<Props> = ({ isOpen, onClose, children, backgroundColor }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <div style={{ backgroundColor }} className={styles.popup}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
