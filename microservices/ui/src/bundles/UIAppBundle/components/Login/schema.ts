import * as yup from "yup";

const schema = yup.object({
  usernameOrEmail: yup.string().required(),
  password: yup.string().required(),
});

export default schema;
