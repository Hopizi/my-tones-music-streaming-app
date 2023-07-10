import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signUpSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  username: yup
    .string()
    .min(7, "Username must be at least 7 characters long")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  dayOfBirth: yup.string().required("Required"),
  yearOfBirth: yup.string().required("Required"),
  monthOfBirth: yup.string()
    .required("Please select a month")
    .oneOf(
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      "Invalid month selection"
    ),
  userGender: yup.string()
    .required("Please select a gender")
    .oneOf(["male", "female", "prefer-not-to-say"], "Invalid gender selection"),
  marketingMessages: yup.boolean(),
  shareRegistrationData: yup.boolean(),
});