import React from "react";
import { useSelector } from "react-redux";

import "./check-out-styles.scss";

import CheckOutItem from "../../components/checkout-item/checkout-item-comp";

import {
  selectCartItems,
  selectTotalCount,
} from "../../store/cart/cart-selector";
import BillingForm from "../../components/billing-form/billing-form-comp";

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
      <h3>
        * Please use the following test debit card for payment * 4242 4242 4242
        4242 - Exp: 04/24 - CVV:242 - Postcode: 42424
      </h3>
      <BillingForm />
    </div>
  );
};

export default CheckOut;
