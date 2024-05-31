// hooks/useForm.tsx
import { validateForm } from "@/lib/authValidations/formValidation/formValidation";
import { useState, ChangeEvent, FocusEvent } from "react";

interface FormData {
  [key: string]: string;
}

interface Errors {
  [key: string]: string;
}

const useForm = (initialValues: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateForm(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateForm(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    setErrors,
    setFormData,
  };
};

export default useForm;
