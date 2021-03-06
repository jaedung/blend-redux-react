import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../actions";

const Header = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {isLoggedIn ? (
        <button onClick={() => dispatch(signOut())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(signIn())}>Login</button>
      )}
    </>
  );
};

export default Header;
