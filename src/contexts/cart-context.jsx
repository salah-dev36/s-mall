import { createContext, useState } from "react";

export const CartContext = createContext({
  cartState : 'null',
  setCartState: () => null
})

export const CartProvider = ({children}) => {
  const [cartState, setCartState] = useState(null)
  const value = {cartState, setCartState}
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}