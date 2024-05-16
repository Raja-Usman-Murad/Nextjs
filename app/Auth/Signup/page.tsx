// pages/signup.tsx
"use client";
import InputField from "@/app/Components/UI/Form/InputField";
import useForm from "@/app/Hooks/FormHook/useForm";
import Link from "next/link";
import React, { ChangeEvent, FocusEvent } from "react";

const Signup: React.FC = () => {
  const { formData, errors, handleChange, handleBlur } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
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
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          error={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">{errors.name}</p>
        )}

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">{errors.email}</p>
        )}

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">{errors.password}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Sign Up
        </button>
        <div className="text-center mt-4">
          <Link href="Signin" className="text-blue-500 hover:text-blue-700">
            Already have an account? Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
