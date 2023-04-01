import Hero from '@app/components/Hero';
import styles from './styles.module.scss';
import Button from '@app/components/Button';

const LandingContainer: React.FC = () => {
  return <div className={styles.container}>
    <header className={styles.header}>

        <Button isLoading={false} children={null} text={'Log In'}/>
        <Button isLoading={false} children={null} text={'Sign Up'}/>
      
    </header>
    <h1>Welcome to</h1>
    <Hero />
  </div>;
};

export default LandingContainer;
