import React,{ useContext } from 'react';
import ProductCard from "../../components/product-card/product-card-comp.jsx";
import { ProductsContext } from '../../contexts/products-context';

import './shop-styles.scss'



const Shop = () => {
  const {products} = useContext(ProductsContext)
  

  return (
    <div className='collections'>
      <h2>Collections</h2>
      <div className='collection'>
        <h3>Hats</h3>
        <div className='products-container'>
          { 
            products.map((product)=>{
              return (
                <ProductCard key={product.id} product={product}/>
              )
            })
          }
        </div> 
      </div>
      
    </div>
  )
}

export default Shop