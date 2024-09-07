import React from "react";
import shopItemsList from ".././Data/shopItemsList.json";
import Users from ".././Data/Users.json";
import useAuth from ".././hooks/useAuth";
import useCart from ".././hooks/useCart";
import useSortAndFilter from ".././hooks/useSortAndFilter";

const About = () => {
  const { sortShopList, filterItems, filterInput, filteredItems } =
    useSortAndFilter(shopItemsList);
  return <div>{shopItemsList.length}</div>;
};

export default About;
