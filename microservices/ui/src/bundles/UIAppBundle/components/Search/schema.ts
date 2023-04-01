import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required(),
});

export default schema;
