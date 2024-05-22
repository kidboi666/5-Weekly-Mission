import { createSlice } from "@reduxjs/toolkit";
import {
  checkEmailAccess,
  getSharedUserInfo,
  loginAccess,
  signUpAccess,
  userInfoAccess,
} from "../actions/auth";
import { UserData } from "@/services/types";
import { API_MSG } from "@/constants/strings";

interface Props {
  isLoggedIn: boolean;
  status: string;
  userInfo: UserData;
  sharedUserInfo: UserData;
}

const initialUserInfo = {
  id: 0,
  createdAt: "",
  name: "",
  imageSource: "",
  email: "",
  authId: "",
};

const initialState: Props = {
  isLoggedIn: false,
  status: "",
  userInfo: { ...initialUserInfo },
  sharedUserInfo: { ...initialUserInfo },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = initialUserInfo;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(loginAccess.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
        state.status = API_MSG.FUL;
      })
      .addCase(loginAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(checkEmailAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(checkEmailAccess.fulfilled, (state, action) => {
        state.status = action.payload;
        state.status = API_MSG.FUL;
      })
      .addCase(checkEmailAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(signUpAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(signUpAccess.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        localStorage.setItem("accessToken", action.payload.data.accessToken);
        localStorage.setItem("refreshToken", action.payload.data.refreshToken);
        state.status = API_MSG.FUL;
      })
      .addCase(signUpAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(userInfoAccess.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(userInfoAccess.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.userInfo = action.payload[0];
        state.status = API_MSG.FUL;
      })
      .addCase(userInfoAccess.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      })
      .addCase(getSharedUserInfo.pending, (state, action) => {
        state.status = API_MSG.PEN;
      })
      .addCase(getSharedUserInfo.fulfilled, (state, action) => {
        state.status = API_MSG.FUL;
        state.sharedUserInfo = action.payload[0];
      })
      .addCase(getSharedUserInfo.rejected, (state, action) => {
        state.status = API_MSG.REJ;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
