import axios from "axios";

export const checkErrorResponse = (error: any) => {
  if (axios.isAxiosError(error) && error.response) {
    return error.response.data.message;
  }
  return "Network Error";
};
