import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

import Button from "../button/button-comp";

import "./product-card-styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />

      <div className="footer">
        <span className="name">{name}</span>
        {price < 99 ? (
          <span className="price">${price}</span>
        ) : (
          <span className="high-price">${price}</span>
        )}
      </div>

      <Button onClick={addToCart} children="Add to Cart" feature="inverted" />
    </div>
  );
};

export default ProductCard;
