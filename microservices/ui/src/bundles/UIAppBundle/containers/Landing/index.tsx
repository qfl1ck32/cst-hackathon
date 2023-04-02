import Hero from "@app/components/Hero";
import styles from "./styles.module.scss";
import Button from "@app/components/Button";
import { useRouter } from "@bluelibs/x-ui-next";
import { Login, Register } from "@app/routes";

const LandingContainer: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button style={{ background: "rgba(255, 220, 169, 0.25)", marginRight: "40px" }} onClick={() => router.go(Login)}>
          Login
        </Button>
        <Button style={{ background: "rgba(255, 220, 169, 0.25)" }} onClick={() => router.go(Register)}>
          Sign up
        </Button>
      </div>

      <div className={styles.text}>Welcome to</div>

      <Hero />
    </div>
  );
};

export default LandingContainer;
