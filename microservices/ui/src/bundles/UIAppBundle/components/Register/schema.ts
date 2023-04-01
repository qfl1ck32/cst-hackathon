import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default schema;
