// hooks/useForm.tsx
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
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} is required`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
  };
};

export default useForm;
