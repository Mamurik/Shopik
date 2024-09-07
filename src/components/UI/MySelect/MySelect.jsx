import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ callback }) => {
  return (
    <select
      className={classes.shop_select}
      onChange={callback}
      defaultValue={"Default"}
    >
      <option className={classes.shopSelect_option} disabled value="Default">
        Sort of price:
      </option>
      <option className={classes.shopSelect_option} value="Cheap">
        Cheap
      </option>
      <option className={classes.shopSelect_option} value="Expensive">
        Expensive
      </option>
    </select>
  );
};

export default MySelect;
