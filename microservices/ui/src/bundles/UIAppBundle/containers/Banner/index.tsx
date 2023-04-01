import Banner from "@app/components/Banner";
import { useAppGuardian } from "@app/services/AppGuardian";

const BannerContainer: React.FC = () => {
  const appGuardian = useAppGuardian();

  const { user } = appGuardian.state;

  return (
    <Banner
      {...{
        username: user.username,
        level: user.endUser.level,
        experience: user.endUser.experience,
      }}
    />
  );
};

export default BannerContainer;
