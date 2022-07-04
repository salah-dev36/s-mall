import React, {useContext} from 'react'
import './checkout-item-styles.scss'
import { CartContext } from '../../contexts/cart-context'

const CheckOutItem = ({cartItem}) => {
  const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);
  
  const increase = () => addItemToCart(cartItem);
  const decrease = () => removeItemFromCart(cartItem);
  const clearItem = () => clearItemFromCart(cartItem);

  const {name, imageUrl, quantity, price} = cartItem;
  return (
    <div className='item-container'>

      <div className="img-container">
        <img alt={`${name}`} src={imageUrl}/>
      </div>

      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className="arrow" onClick={decrease}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className="arrow" onClick={increase}>&#10095;</div>
      </span>

      <span className='price'>${price}</span>

      <div 
        className='remove-button' 
        onClick={clearItem}
      >&#10005;</div>
                
    </div>
  )
}

export default CheckOutItem