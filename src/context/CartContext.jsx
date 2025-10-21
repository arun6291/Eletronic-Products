import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product); // ✅ check if this logs
      if (!product || !product.id) {
      console.error("❌ Product missing ID!", product);
      return;
    }
    
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: qty } : item
    ));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.finalPrice * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
