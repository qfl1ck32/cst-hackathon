import MenuBar from '../MenuBar';
import styles from './styles.module.scss'

export interface Props {

}

const Menu: React.FC<Props> = (props) => {
  
  return (
    <div className={styles.container}>
      <MenuBar text={'Profile'} isSelected> </MenuBar>
      <MenuBar text={'Library'} isSelected={false}> </MenuBar>
    </div>
  );
};

export default Menu;
