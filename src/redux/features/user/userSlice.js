import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Foysal",
  email: "foysal@gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
