import React from 'react'
import './category-item-styles.scss'

const Category = ({category}) => {
  const {title, imageUrl, size} = category;

  return (
    <div  className={`category-item ${size}`}>
      <div 
        className='background-image' 
        style = {{backgroundImage : `url(${imageUrl})`
        }} 
      />
      <div className='category-body-container'>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </div>
          
    </div>
  )
}

export default Category