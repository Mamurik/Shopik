import React from "react";
import classes from "./shopList.module.css";
import MySelect from "../UI/MySelect/MySelect";
import ShopListItem from "../ShopListItem/ShopListItem";
import MyInput from "../UI/MyInput/MyInput";
const ShopList = ({
  openItem,
  callback,
  shopItems,
  sortShopList,
  inputOnChange,
  InputValue,
}) => {
  return (
    <div className={classes.ShopListik}>
      <div className={classes.sort_filter_zone}>
        <MySelect callback={sortShopList} />
        <MyInput
          placeholder={"Searching..."}
          value={InputValue}
          onChange={inputOnChange}
        ></MyInput>
      </div>

      {shopItems.length !== 0 ? (
        <div className={classes.ShopList_wrapper}>
          {shopItems.map((Item) => {
            return (
              <ShopListItem
                openItem={openItem}
                key={Item.id}
                callback={callback}
                shopItem={Item}
              ></ShopListItem>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>Oops,nothing here</h2>
        </div>
      )}
    </div>
  );
};

export default ShopList;
