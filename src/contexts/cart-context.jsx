import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id 
  );

  if (existingProduct) {
    return cartItems.map((cartItem)=>
    cartItem.id === productToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
    )
  }
    
  return [...cartItems, {...productToAdd, quantity: 1}]
};

const removeCartItem = (cartItems, productToDelete) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id 
  );

  if (existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }

  return cartItems.map((cartItem)=>
  cartItem.id === productToDelete.id
  ? {...cartItem, quantity: cartItem.quantity - 1}
  : cartItem
  );
};

const clearCartItem = (cartItems, ProductToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== ProductToClear.id);
};



export const CartContext = createContext({
  cartState : 'null',
  setCartState: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  itemsNumber: 0,
  cartTotal: 0
});

export const CartProvider = ({children}) => {
  const [cartState, setCartState] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [itemsNumber, setItemsNumber] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems (addCartItem(cartItems, productToAdd))
  };
  const removeItemFromCart = (productToDelete) => {
    setCartItems(removeCartItem(cartItems, productToDelete))
  };
  const clearItemFromCart = (ProductToClear) => {
    setCartItems(clearCartItem(cartItems, ProductToClear))
  };
  
  useEffect(()=>{
    const itemsCount = cartItems.reduce((total, item)=> total + item.quantity, 0)
    setItemsNumber(itemsCount)
  },[cartItems]);

  useEffect(()=>{
    const totalCount = cartItems.reduce((cartTotal, item)=> cartTotal + item.price * item.quantity, 0)
    setCartTotal(totalCount)
  },[cartItems]);

  const value = {cartState, setCartState, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, itemsNumber, cartTotal};
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}