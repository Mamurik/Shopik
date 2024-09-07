import React from "react";
import MyLogin from "./MyLogin/MyLogin";
const MyAuth = ({ AuthUser, updateUser, updatePassword, authInput }) => {
  return (
    <div>
      <MyLogin
        authInput={authInput}
        AuthUser={AuthUser}
        updatePassword={updatePassword}
        updateUser={updateUser}
      ></MyLogin>
    </div>
  );
};

export default MyAuth;
