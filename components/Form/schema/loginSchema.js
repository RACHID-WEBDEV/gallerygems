import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Kindly provide a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "Password should be of minimum 6 characters length"),
  })
  .required();
