// pages/signin.tsx
"use client";

import React from "react";
import Link from "next/link";
import { signinValidationSchema } from "../_ValidationSchema/ValidationSchema";
import InputField from "@/app/Components/UI/Form/InputField";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

const FormikSignIn: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    // Submit the form (e.g., send data to an API)

    if (!values.email || !values.password) {
      alert("All fields are required");
      return;
    }
    // Submit the form (e.g., send data to an API)
    console.log("Form submitted:", values);

    // Reset the form to its initial values
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={signinValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
            <InputField
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
            <div className="text-center mt-4">
              <Link
                className="text-blue-500 hover:text-blue-700"
                href="formikSignup"
              >
                Don't have an account? Create one.
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikSignIn;
