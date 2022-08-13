import React, { memo } from "react";

import "./cart-item-styles.scss";

const CartItem = memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img alt={`${name}`} src={imageUrl} />
      <div className="details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
});

export default CartItem;
