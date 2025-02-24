import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  resetCode: "",
};

const resetDataPassSlice = createSlice({
  name: "email",
  initialState,

  reducers: {
    saveEmail: (state, action) => {
      state.email = action.payload;
    },

    saveResetCode: (state, action) => {
      state.resetCode = action.payload;
    },
    clearData: (state) => {
      state.email = "";
      state.resetCode = "";
    },
  },
});

export const { saveEmail, saveResetCode, clearEmail } = resetDataPassSlice.actions;
export default resetDataPassSlice.reducer;
