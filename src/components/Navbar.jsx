import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../store/loginReducer";

const Navbar = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(loginAction.logout());
  };
  return (
    <nav>
      <h1>Redux Counter</h1>
      {isLogin && (
        <ul>
          <li>My Record</li>
          <li>Profile</li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
