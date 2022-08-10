import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./checkout-item-styles.scss";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const increase = () => dispatch(addItemToCart(cartItems, cartItem));
  const decrease = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));

  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="item-container">
      <div className="img-container">
        <img alt={`${name}`} src={imageUrl} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decrease}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increase}>
          &#10095;
        </div>
      </span>

      <span className="price">${price}</span>

      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
