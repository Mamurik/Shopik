import React from "react";
import classes from "./MyLogin.module.css";
const MyLogin = ({ AuthUser, updateUser, updatePassword, authInput }) => {
  return (
    <div className={classes.Login_Form}>
      <h1>Login</h1>
      <input
        className={classes.Login_input}
        onChange={(e) => updateUser(e.target.value)}
        type="text"
        value={authInput.user}
        placeholder="Login"
      />
      <input
        className={classes.Login_input}
        onChange={(e) => updatePassword(e.target.value)}
        type="password"
        value={authInput.password}
        placeholder="Password"
      />
      <button className={classes.Login_btn} onClick={AuthUser}>
        Login
      </button>
      <p>You don't have an account yet?</p>
      <button className={classes.Login_btn}>Registration</button>
    </div>
  );
};

export default MyLogin;
