// pages/signin.tsx
"use client";

import InputField from "@/app/Components/UI/Form/InputField";
import useForm from "@/app/Hooks/FormHook/useForm";
import Link from "next/link";
import React from "react";
import { validateForm } from "../_FormValidation/FormValidation";
import { login } from "@/app/_api/auth";
import { useDispatch } from "react-redux";
import { showToast } from "@/app/helper/toast";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { setCookie } from "nookies"; // This is for Next.js to set cookies

const initialSigninFormState = {
  email: "",
  password: "",
};

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { formData, errors, handleChange, handleBlur, setErrors, setFormData } =
    useForm(initialSigninFormState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (const [name, value] of Object.entries(formData)) {
      const error = validateForm(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }

    if (
      errors.email ||
      errors.password ||
      !formData.email ||
      !formData.password
    ) {
      return;
    }
    // Submit the form (e.g., send data to an API)
    console.log("Form submitted:", formData);

    try {
      const response: any = await dispatch(login(formData));

      if (response.data.success) {
        setCookie(null, "token", response.data.data.token, {
          maxAge: 86400, // 1 day in seconds
          path: "/", // Root path so that all requests can access it
        });
        showToast(response.data.message, "success");
        setFormData(initialSigninFormState);
        // Redirect to the sign-in page after successful sign-up
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        showToast(response.data.message, "error");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      showToast("An error occurred. Please try again.", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm"
      >
        <InputField
          label="Email"
          type="email"
          name="email"
          error={errors.email}
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign In
        </button>
        <div className="text-center mt-4">
          <Link href="signup" className="text-blue-500 hover:text-blue-700">
            Don't have an account? Create one.
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
