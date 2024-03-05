import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";





const store = configureStore({
  reducer: { counter: counterReducer, login: loginReducer },
});

export default store;
