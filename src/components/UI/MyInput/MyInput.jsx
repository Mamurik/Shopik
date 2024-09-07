import React from "react";
import classes from "./MyInput.module.css";
const MyInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className={classes.my_input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default MyInput;
