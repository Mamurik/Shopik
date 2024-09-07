import React from "react";
import Cart from "../Cart/Cart";
import AuthZone from "./AuthZone/AuthZone";
import CartZone from "./CartZone/CartZone";
import classes from "./Header.module.css";

const Header = ({
  openCart,
  cart,
  outAuth,
  authInput,
  isAuth,
  cartRef,
  removeFromCart,
}) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo_container}>
          <img src="logo.png" alt="logo" className={classes.logo}></img>

          <p className={classes.logo_title}>MamurinhoStore</p>
        </div>
        <nav className={classes.menu}>
          <ul className={classes.Link_List}>
            <li></li>
            <li></li>
          </ul>
        </nav>
        <AuthZone
          outAuth={outAuth}
          isAuth={isAuth}
          authInput={authInput}
        ></AuthZone>
        <CartZone cart={cart} openCart={openCart}></CartZone>
      </header>
      <Cart
        cartRef={cartRef}
        cart={cart}
        removeFromCart={removeFromCart}
      ></Cart>
    </>
  );
};

export default Header;
