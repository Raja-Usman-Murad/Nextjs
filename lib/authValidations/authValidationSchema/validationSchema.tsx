// validationSchema.ts
import * as Yup from "yup";

const email = Yup.string()
  .email("Email must be valid")
  .required("Email is required");

const password = Yup.string()
  .min(8, "Password must be at least 8 characters long")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/\d/, "Password must contain at least one number")
  .matches(/[@#$!%*?&]/, "Password must contain at least one special character")
  .required("Password is required");

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]/, "Name must start with an alphabet")
    .matches(
      /^[A-Za-z0-9-' ]*$/,
      "Name can only contain alphabet, numbers, hyphens, and apostrophes"
    )
    .min(3, "Name must be at least 3 characters long")
    .required("Name is required"),
  email: email,
  password: password,
});

export const signinValidationSchema = Yup.object().shape({
  email: email,
  password: password,
});
