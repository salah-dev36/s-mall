import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom';

import { CartContext } from '../../contexts/cart-context'

import Button from '../button/button-comp'
import CartItem from '../cart-item/cart-item-comp'

import'./cart-display-styles.scss'

const CartDisplay = () => {

  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-display-container'>
      <div className="cart-items">
        {
          cartItems.map(item =>{return (
            <CartItem key={item.id} cartItem= {item} />
          )})
        }
      </div>
      
        <Button onClick={goToCheckOut} children='Check-out'/>
      
      
    </div>
  )
}

export default CartDisplay