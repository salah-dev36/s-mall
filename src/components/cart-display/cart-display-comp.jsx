import React from 'react'
import Button from '../button/button-comp'
import'./cart-display-styles.scss'

const CartDisplay = () => {
  return (
    <div className='cart-display-container'>
      <div className="cart-items" />
      <Button children='Check-out'/>
    </div>
  )
}

export default CartDisplay