export const validateForm = (name: string, value: string) => {
  switch (name) {
    case "name":
      if (!value) {
        return "Name is required";
      } else if (!/^[A-Za-z]/.test(value)) {
        return "Name must start with an alphabet";
      } else if (!/^[A-Za-z0-9-' ]*$/.test(value)) {
        return "Name can only contain alphabet, numbers, hyphens, and apostrophes";
      } else if (value.length < 3) {
        return "Name must be at least 3 characters long";
      }
      break;
    case "email":
      if (!value) {
        return "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return "Email must be valid";
      }
      break;
    case "password":
      if (!value) {
        return "Password is required";
      } else if (value.length < 8) {
        return "Password must be at least 8 characters long";
      } else if (!/[a-z]/.test(value)) {
        return "Password must contain at least one lowercase letter";
      } else if (!/[A-Z]/.test(value)) {
        return "Password must contain at least one uppercase letter";
      } else if (!/\d/.test(value)) {
        return "Password must contain at least one number";
      } else if (!/[@$!%*?&]/.test(value)) {
        return "Password must contain at least one special character";
      }
      break;
    default:
      break;
  }
  return "";
};
