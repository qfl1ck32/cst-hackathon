import { EndUsersSearchBookMutation } from "@app/graphql/generated/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType } from "yup";
import Button from "../Button";
import Input from "../Input";
import schema from "./schema";
import styles from "./styles.module.scss";

export type FormValues = InferType<typeof schema>;

export interface Props {
  onSearch: (input: FormValues) => Promise<void>;
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit(props.onSearch)}>
        <Input height="40px" width="50%" {...register("title")} placeholder="Title" />
        <p>{errors.title?.message}</p>

        <Button type="submit">Add to library</Button>
      </form>
    </div>
  );
};

export default Search;
