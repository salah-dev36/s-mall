import './cart-item-styles.scss'

import React from 'react'

const CartItem = ({cartItem}) => {
  const {name, quantity, imageUrl, price, } = cartItem;
  return (
    <div className='cart-item-container'>
      <img alt={`${name}`} src={imageUrl} />
      <div className="details">
        <h2 className='name'>{name}</h2>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem