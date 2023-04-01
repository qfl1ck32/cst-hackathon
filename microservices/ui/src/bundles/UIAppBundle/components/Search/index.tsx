import { EndUsersSearchBookMutation } from "@app/graphql/generated/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType } from "yup";
import Button from "../Button";
import schema from "./schema";
import styles from './styles.module.scss';

export type FormValues = InferType<typeof schema>;

export interface Props {
  onSearch: (input: FormValues) => Promise<void>;
  onAddToLibrary: () => Promise<void>;

  loadingAddToLibrary: boolean;
  loadingSearch: boolean;

  book: EndUsersSearchBookMutation["EndUsersSearchBook"] | null;
}

const Search: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSubmit(props.onSearch)}>
        <input {...register("title")} placeholder="Title" />
        <p>{errors.title?.message}</p>

        <Button isLoading={props.loadingSearch} type="submit">
          Search
        </Button>
      </form>

      {props.book && (
        <div>
          <h2>Book</h2>
          <p>{props.book.title}</p>
          <p>{props.book.author}</p>

          <Button isLoading={props.loadingAddToLibrary} onClick={props.onAddToLibrary}>
            Add to library
          </Button>
        </div>
      )}
    </div>
  );
};

export default Search;
