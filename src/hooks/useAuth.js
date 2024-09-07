import { useState } from "react";

const useAuth = (users) => {
  const [isAuth, setIsAuth] = useState(true);
  const [authInput, setAuthInput] = useState({
    user: "",
    password: "",
  });

  const updateUser = (newUser) => {
    setAuthInput((prevState) => ({
      ...prevState,
      user: newUser,
    }));
  };

  const updatePassword = (newPassword) => {
    setAuthInput((prevState) => ({
      ...prevState,
      password: newPassword,
    }));
  };

  const AuthUser = () => {
    const userExists = users.some((userItem) => {
      return (
        userItem.user === authInput.user &&
        userItem.password === authInput.password
      );
    });

    if (userExists) {
      setIsAuth(true);
    } else {
      alert("вы неверно ввели логин или пароль");
    }
  };

  return {
    isAuth,
    authInput,
    setIsAuth,
    updateUser,
    updatePassword,
    AuthUser,
  };
};

export default useAuth;
