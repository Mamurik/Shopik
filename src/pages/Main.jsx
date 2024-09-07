import React, { useEffect, useRef, useState } from "react";
import Cart from ".././components/Cart/Cart";
import Header from ".././components/Header/Header";
import ShopList from ".././components/ShopList/ShopList";
import MyAuth from ".././components/UI/MyAuth/MyAuth";
import shopItemsList from ".././Data/shopItemsList.json";
import Users from ".././Data/Users.json";
import useAuth from ".././hooks/useAuth";
import useCart from ".././hooks/useCart";
import useSortAndFilter from ".././hooks/useSortAndFilter";
import { useNavigate } from "react-router";

function Main() {
  const navigate = useNavigate();

  const openItem = (item) => {
    navigate(`/phone/${item.id}`);
  };

  const { cart, cartRef, toggleCart, setCart, addToCart, removeFromCart } =
    useCart();
  const { isAuth, setIsAuth, authInput, updateUser, updatePassword, AuthUser } =
    useAuth(Users);
  const { sortShopList, filterItems, filterInput, filteredItems } =
    useSortAndFilter(shopItemsList);
  const outAuth = () => {
    setIsAuth(false);
    setCart([]);
  };

  return (
    <div>
      <Header
        authInput={authInput}
        outAuth={outAuth}
        cart={cart}
        isAuth={isAuth}
        cartRef={cartRef}
        removeFromCart={removeFromCart}
        openCart={toggleCart}
      />
      {isAuth ? (
        <ShopList
          openItem={openItem}
          inputOnChange={filterItems}
          InputValue={filterInput}
          sortShopList={sortShopList}
          callback={addToCart}
          shopItems={filteredItems}
        />
      ) : (
        <MyAuth
          AuthUser={AuthUser}
          updateUser={updateUser}
          updatePassword={updatePassword}
          authInput={authInput}
        />
      )}
      <Cart cartRef={cartRef} cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Main;
