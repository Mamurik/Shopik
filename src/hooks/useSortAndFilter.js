// hooks/useSort.js
import { useState, useEffect } from "react";

const useSortAndFilter = (initialItems) => {
  const [shopItems, setShopItems] = useState(initialItems);
  const [filterInput, setFilterInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(shopItems);

  const sortOfPriceCheap = () => {
    const sortedItems = [...shopItems].sort((a, b) => a.price - b.price);
    setShopItems(sortedItems);
  };

  const sortOfPriceEx = () => {
    const sortedItems = [...shopItems].sort((a, b) => b.price - a.price);
    setShopItems(sortedItems);
  };

  const sortShopList = (e) => {
    e.preventDefault();
    const form = e.target.value;
    if (form === "Cheap") {
      sortOfPriceCheap();
    } else {
      sortOfPriceEx();
    }
  };

  const filterItems = (e) => {
    const input = e.target.value;
    setFilterInput(input);
  };

  useEffect(() => {
    const filtered = shopItems.filter((item) =>
      item.title.toLowerCase().startsWith(filterInput.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [filterInput, shopItems]);
  return {
    sortShopList,
    filterItems,
    filterInput,
    filteredItems,
  };
};

export default useSortAndFilter;
