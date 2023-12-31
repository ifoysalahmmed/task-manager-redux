import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../../firebase/firebase.config";

const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

export const signIn = createAsyncThunk(
  "userSlice/signIn",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

export const googleLogin = createAsyncThunk(
  "userSlice/googleLogin",
  async () => {
    const googleProvider = new GoogleAuthProvider();

    const data = await signInWithPopup(auth, googleProvider);

    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logOut: (state) => {
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.email = "";
        state.name = "";
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload.email;
        state.name = payload.name;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.email = "";
        state.name = "";
        state.error = action.error.message;
      });

    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.email = "";
        state.name = "";
        state.error = "";
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload.email;
        state.name = payload.name;
        state.error = "";
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.email = "";
        state.name = "";
        state.error = action.error.message;
      });

    builder
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.email = "";
        state.name = "";
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload.email;
        state.name = payload.name;
        state.error = "";
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.email = "";
        state.name = "";
        state.error = action.error.message;
      });
  },
});

export const { setUser, toggleLoading, logOut } = userSlice.actions;

export default userSlice.reducer;
