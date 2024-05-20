import { toast, ToastContent, ToastOptions, TypeOptions } from "react-toastify";

// Custom type for valid toast methods
type ToastType = "info" | "success" | "warning" | "error";

export const showToast = (message: string, type: ToastType = "success") => {
  toast[type](message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};
