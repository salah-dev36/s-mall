import { ReactComponent as CartImg } from '../../assets/cart.svg'

import { CartContext } from '../../contexts/cart-context'

import './cart-icon-styles.scss'

import React, { useContext } from 'react'



const CartIcon = () => {
  const {cartState, setCartState} = useContext(CartContext);

  const toggleCart = () => {
    setCartState(!cartState)
  }

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <CartImg className='cart-img'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon