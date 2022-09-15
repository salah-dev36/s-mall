import React, { FC, memo } from "react";
import { Product } from "../../store/cart/cart-types";

import "./cart-item-styles.scss";

export type CartItemProps = {
  cartItem: Product
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
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
