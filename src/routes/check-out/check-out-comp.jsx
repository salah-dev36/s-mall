import React from "react";
import { useSelector } from "react-redux";

import "./check-out-styles.scss";

import CheckOutItem from "../../components/checkout-item/checkout-item-comp";

import {
  selectCartItems,
  selectTotalCount,
} from "../../store/cart/cart-selector";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectTotalCount);

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
      {cartItems.map((cartItem) => {
        return <CheckOutItem cartItem={cartItem} key={cartItem.id} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
