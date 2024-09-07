import React from "react";
import classes from "./AuthZone.module.css";
const AuthZone = ({ outAuth, authInput, isAuth }) => {
  return (
    <div className={classes.Auth}>
      {isAuth && <p className={classes.auth_text}>User: {authInput.user}</p>}
      <button className={classes.AuthButton} onClick={outAuth}>
        Out
      </button>
    </div>
  );
};

export default AuthZone;
