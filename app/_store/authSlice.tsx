import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../_helper/localStorage";

interface SetAuthInitialState {
  token: string | null;
  isAuthenticated: boolean;
}

const userData = getLocalStorage("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: JSON.parse(userData || "null")?.token || null, // Get the token from local storage
    isAuthenticated: userData ? true : false,
  } as SetAuthInitialState,
  reducers: {
    Login(state, action) {
      state.token = action.payload?.token;
      state.isAuthenticated = true;
      setLocalStorage("user", JSON.stringify(action.payload));
    },
    Logout(state, action) {
      state.token = null;
      state.isAuthenticated = false;
      removeLocalStorage("user");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
