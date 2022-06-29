import React, { useContext }from 'react'

import { CartContext } from '../../contexts/cart-context'

import Button from '../button/button-comp'

import './product-card-styles.scss'

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;
  const {addItemToCart}= useContext(CartContext);

  const addToCart = () => addItemToCart(product);
  
  return (
    <div className='product-card-container'>
      
      <img src={imageUrl} alt=''/>
        
      
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button onClick={addToCart} children='Add to Cart' feature='inverted'/>

    </div>
  );
}

export default ProductCard