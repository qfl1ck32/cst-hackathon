import classNames from 'classnames';
import styles from './styles.module.scss'

export interface Props {
    text: string;
    isSelected: boolean;
}

const MenuBar: React.FC<Props> = (props) => {
  
  return (
    <div className={classNames(styles.container, {
        [styles['container--selected']]: props.isSelected,
        [styles['container--unselected']]: !props.isSelected
    })}>
      <span className={styles.text} >{props.text}</span>
    </div>
  );
};

export default MenuBar;