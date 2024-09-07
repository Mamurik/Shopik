import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import shopItemsList from "../../Data/shopItemsList.json";
import classes from "./OpenedItem.module.css";
const OpenedItem = () => {
  const { id } = useParams();
  const item = shopItemsList.find((item) => item.id === Number(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className={classes.phone_wrapper}>
      <Link className={classes.link_to_main} to={"/main"}>
        Back To Buy
      </Link>
      <div className={classes.item_wrapper}>
        <h1 className={classes.item_title}>{item.title}</h1>
        <img className={classes.item_img} src={item.img} alt={item.title} />
        <p className={classes.item_price}>Price: {item.price} $</p>
        <p className={classes.item_desc}>Description: {item.desc}</p>
        <p className={classes.item_mem}>
          MEMORY: {item.ram}/{item.rom}
        </p>
      </div>
    </div>
  );
};

export default OpenedItem;
