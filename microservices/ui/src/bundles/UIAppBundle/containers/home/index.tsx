import Button from "@app/components/Button";
import { Library, SearchBook } from "@app/routes";
import { useRouter } from "@bluelibs/x-ui-next";

const HomeContainer: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>

      <Button onClick={() => router.go(Library)}>My library</Button>
      <Button onClick={() => router.go(SearchBook)}>Search for a book</Button>
    </div>
  );
};

export default HomeContainer;
