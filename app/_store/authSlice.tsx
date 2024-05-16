import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../helper/localStorage";

interface SetAuthInitialState {
  token: string | null;
  isAuthenticated: boolean;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: JSON.parse(getLocalStorage("user") || "null")?.token || null, // Get the token from local storage
    isAuthenticated: false,
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
