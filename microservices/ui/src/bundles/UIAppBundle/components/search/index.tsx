import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType } from "yup";
import Button from "../button";
import schema from "./schema";

export type FormValues = InferType<typeof schema>;

export interface Props {
  onSubmit: (input: FormValues) => Promise<void>;
  isLoading: boolean;
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

      <form onSubmit={handleSubmit(props.onSubmit)}>
        <input {...register("title")} placeholder="Title" />
        <p>{errors.title?.message}</p>

        <Button isLoading={props.isLoading} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
