import axios from ".";
import { AxiosResponse } from "axios";
import { authActions } from "../slices/authSlice";
import { Dispatch } from "@reduxjs/toolkit";

// interface signupUserData {
//   name: string;
//   email: string;
//   password: string;
// }

// type addNewUser = (data: signupUserData) => any;

export const addNewUser = async (data: any) => {
  try {
    const response = await axios.post(`/auth/signup`, data);
    return response;
  } catch (error) {
    console.log(error, "error");
    return error;
  }
};

export const login =
  (data: any): any =>
  async (dispatch: Dispatch<any>): Promise<any> => {
    try {
      const response = await axios.post("/auth/signin", data);

      if (response.data.success) {
        dispatch(authActions.Login(response.data.data));
        // dispatch(getUser(response.data.payload.token));
      }
      return response;
    } catch (error) {
      return error;
    }
  };
