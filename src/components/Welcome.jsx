import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/loginReducer";

const Welcome = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(loginAction.login());
  };
  return (
    <div>
      <button className="welcome-btn" onClick={loginHandler}>
        Login To Redux Counter
      </button>
    </div>
  );
};

export default Welcome;
