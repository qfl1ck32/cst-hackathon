import Button from "@app/components/Button";
import { Library, Search } from "@app/routes";
import { useRouter } from "@bluelibs/x-ui-next";

const HomeContainer: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.go(Library)}>My library</Button>
      <Button onClick={() => router.go(Search)}>Search for a book</Button>
    </div>
  );
};

export default HomeContainer;
