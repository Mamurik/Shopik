import React from "react";
import classes from "./Cart.module.css";
const Cart = ({ cartRef, cart, removeFromCart }) => {
  let summa = 0;
  cart.map((cartItem) => {
    return (summa += cartItem.price);
  });
  return (
    <div ref={cartRef} className={classes.cart_items_wrapper}>
      <p className={classes.total_price}>Total Price: {summa} $</p>
      <div className={classes.cart_wrapper}>
        {cart.length === 0 ? (
          <h2 className={classes.cart_empty}>Your cart is empty</h2>
        ) : (
          cart.map((cartItem, index) => {
            return (
              <div className={classes.cart_item} key={index}>
                <h1 className={classes.cart_title}>{cartItem.title}</h1>
                <p className={classes.cart_price}>{cartItem.price} $</p>
                <img
                  src={cartItem.img}
                  alt="cartItem"
                  className={classes.cart_image}
                />
                <button
                  className={classes.cart_delete_button}
                  onClick={() => removeFromCart(cartItem.id)}
                >
                  Удалить
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
