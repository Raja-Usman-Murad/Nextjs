// pages/signin.tsx
"use client";

import InputField from "@/app/Components/UI/Form/InputField";
import useForm from "@/app/Hooks/FormHook/useForm";
import Link from "next/link";
import React from "react";

const SignIn: React.FC = () => {
  const { formData, errors, handleChange, handleBlur } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }
    // Submit the form (e.g., send data to an API)
    console.log("Form submitted:", formData);
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
          <Link href="Signup" className="text-blue-500 hover:text-blue-700">
            Don't have an account? Create one.
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
