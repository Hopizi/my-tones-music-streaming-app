import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;


export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password must have a minimum of 5 charcters with a Uppercase letter" })
    .required("Password is Required"),
});