import React from "react";
import classes from "./CartZone.module.css";
const CartZone = ({ cart, openCart }) => {
  return (
    <div className={classes.Cart_zone}>
      <button onClick={openCart} className={classes.Cart_btn}>
        <img className={classes.cart_img} src="cart.png" alt="Cart" />
      </button>
      <p className={classes.cart_count}>{cart.length}</p>
    </div>
  );
};

export default CartZone;
