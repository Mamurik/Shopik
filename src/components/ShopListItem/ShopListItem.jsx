import React from "react";
import classes from "./ShopListItem.module.css";

const ShopListItem = ({ openItem, shopItem, callback }) => {
  return (
    <div onClick={() => openItem(shopItem)} className={classes.shopItem}>
      <img className={classes.shopItem_img} src={shopItem.img} alt="shopItem" />
      <h1 className={classes.shopItem_title}>{shopItem.title}</h1>
      <p className={classes.shopItem_price}>{shopItem.price} $</p>
      <button
        className={classes.shopItem_buy}
        onClick={(e) => {
          e.stopPropagation();
          callback(shopItem);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShopListItem;
