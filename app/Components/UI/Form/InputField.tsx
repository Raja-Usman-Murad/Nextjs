// components/InputField.tsx
import React, { ChangeEvent, FocusEvent } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  error: string | false | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className={`block text-gray-700 text-sm font-bold mb-2 ${
          error ? "text-red-500" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
