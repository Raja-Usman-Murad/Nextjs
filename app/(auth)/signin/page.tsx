// pages/signin.tsx
"use client";

import InputField from "@/app/_Components/UI/Form/InputField";
import useForm from "@/app/_Hooks/FormHook/useForm";
import Link from "next/link";
import React, { useState } from "react";
import { validateForm } from "../_formValidation/formValidation";
import { useDispatch } from "react-redux";
import { showToast } from "@/app/_helper/toast";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { authActions } from "@/app/_store/authSlice";
import LoadingSpinner from "@/app/_Components/UI/LoadingSpinner/LoadingSpinner";

const initialSigninFormState = {
  email: "",
  password: "",
};

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { formData, errors, handleChange, handleBlur, setErrors, setFormData } =
    useForm(initialSigninFormState);
  const [loading, setLoading] = useState<boolean>(false);

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
      setLoading(true);
      const response: any = await axios.post(`api/auth/signin`, formData);

      if (response.data.success) {
        setLoading(false);
        dispatch(authActions.Login(response.data.data));
        // dispatch(getUser(response.data.payload.token));

        showToast(response.data.message, "success");
        setFormData(initialSigninFormState);
        // Redirect to the sign-in page after successful sign-up
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setLoading(false);
        showToast(response.data.message, "error");
      }
    } catch (error) {
      setLoading(false);
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
          {loading && <LoadingSpinner />}
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
