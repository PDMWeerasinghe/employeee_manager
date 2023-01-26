import { configureStore } from '@reduxjs/toolkit'
import viewModeSlice from "./reducers/toolbarSlice";
import employeeSlice from './reducers/employeeSlice';


export const store = configureStore({
  reducer: {
    viewMode: viewModeSlice,
    employees: employeeSlice
  },
})