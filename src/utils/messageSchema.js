import * as Yup from "yup";

const messageSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(2, "Too short!")
    .max(1000, "Too long")
    .required("Required"),
});

export default messageSchema;
