import { configureStore } from "@reduxjs/toolkit";
import employeeTableReducer from "./features/employeeTableSlice";

export const store = configureStore({
  reducer: {
    employees: employeeTableReducer,
  },
  devTools: true,
});
