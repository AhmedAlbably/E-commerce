import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  email: "",
};

const emailSlice = createSlice({
  name: "email",
  initialState,

  reducers: {
    saveEmail: (state, action) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = "";
    },
  },
});

export const { saveEmail, clearEmail } = emailSlice.actions;
export default emailSlice.reducer;
