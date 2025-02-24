import { configureStore } from "@reduxjs/toolkit";
import resetDataPassReducer from "../Features/resetDataPassSlice/resetDataPassSlice";

export const store = configureStore({
  reducer: {
    resetDataPass: resetDataPassReducer,
  },
});

export default store;