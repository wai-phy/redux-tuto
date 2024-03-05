import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import todoReducer from "./reducer/Todo";
const store = configureStore({
  reducer: { counter: counterReducer, login: loginReducer , todo : todoReducer},
});

export default store;
