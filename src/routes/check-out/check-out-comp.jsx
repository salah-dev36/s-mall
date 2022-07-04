import React, { useContext }  from 'react'

import './check-out-styles.scss'

import { CartContext } from '../../contexts/cart-context'
import CheckOutItem from '../../components/checkout-item/checkout-item-comp';

const CheckOut = () => {
  const {cartItems, cartTotal} = useContext(CartContext);

  return (
    <div className="page-container">
      <div className="header">
        <div className="header-element">
          <span>Product</span>
        </div>
        <div className="header-element">
          <span>Description</span>
        </div>
        <div className="header-element">
          <span>Quantity</span>
        </div>
        <div className="header-element">
          <span>Price</span>
        </div>
        <div className="header-element">
          <span>Remove</span>
        </div>
      </div>
        {
          cartItems.map((cartItem) => {
            return (
              <CheckOutItem cartItem={cartItem} key={cartItem.id}/>
            )
          })
        }     
      <span className='total'>Total: ${cartTotal}</span>
    </div>  
  )
}

export default CheckOut