// pages/signup.tsx
"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import Link from "next/link";
import InputField from "@/components/UI/Form/InputField";
import { signupValidationSchema } from "../../../lib/authValidations/authValidationSchema/validationSchema";

const FormikSignup: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    // Submit the form (e.g., send data to an API)
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
            <InputField
              label="Name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
            />
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
              Sign Up
            </button>
            <div className="text-center mt-4">
              <Link
                href="formik-signin"
                className="text-blue-500 hover:text-blue-700"
              >
                Already have an account? Log In
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikSignup;
