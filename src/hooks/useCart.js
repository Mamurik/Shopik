import { useState, useRef, useEffect } from "react";

const useCart = () => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const cartRef = useRef(null);
  const addToCart = (shopItem) => {
    setCart((prevCart) => [...prevCart, shopItem]);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const removeFromCart = (id) => {
    const indexToRemove = cart.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart);
    }
  };
  const toggleCart = () => {
    if (cartRef.current) {
      cartRef.current.style.display =
        cartRef.current.style.display === "none" ? "block" : "none";
    }
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      cartRef.current.style.display = "none";
    }
  };

  return {
    cart,
    cartRef,
    toggleCart,
    setCart,
    addToCart,
    removeFromCart,
  };
};

export default useCart;
