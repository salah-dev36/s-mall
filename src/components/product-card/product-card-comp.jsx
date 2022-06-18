import React from 'react'
import './product-card-styles.scss'
import Button from '../button/button-comp'

const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;

  return (
    <div className='product-card-container'>
      
      <img src={imageUrl} alt=''/>
        
      
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button children='Add to Cart' feature='inverted'/>

    </div>
  )
}

export default ProductCard