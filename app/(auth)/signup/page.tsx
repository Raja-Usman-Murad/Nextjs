// pages/signup.tsx
"use client";
import InputField from "@/components/UI/Form/InputField";
import useForm from "@/customHooks/FormHook/useForm";
import Link from "next/link";
import React, { useState } from "react";
import { validateForm } from "../../../lib/authValidations/formValidation/formValidation";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";
import { showToast } from "@/helper/toast";

const initialSignupFormState = {
  name: "",
  email: "",
  password: "",
};

const Signup: React.FC = () => {
  const router = useRouter();
  const { formData, errors, handleChange, handleBlur, setErrors, setFormData } =
    useForm(initialSignupFormState);

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
      errors.name ||
      errors.email ||
      errors.password ||
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      return;
    }

    try {
      setLoading(true);
      const response: any = await axios.post(`api/auth/signup`, formData);

      if (response.data.success) {
        setLoading(false);
        showToast(response.data.message, "success");
        setFormData(initialSignupFormState);
        // Redirect to the sign-in page after successful sign-up
        setTimeout(() => {
          router.push("signin");
        }, 2000);
      } else {
        setLoading(false);
        showToast(response.data.message, "error");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error signing up:", error);
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
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          error={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          error={errors.email}
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
          Sign Up
          {loading && <LoadingSpinner />}
        </button>
        <div className="text-center mt-4">
          <Link href="signin" className="text-blue-500 hover:text-blue-700">
            Already have an account? Log In
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
