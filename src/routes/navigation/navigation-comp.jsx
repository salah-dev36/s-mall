import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as ShopLogo } from "../../assets/crown.svg";
import "./navigation-styles.scss";

import { SignOutUser } from "../../utils/firebase/firebase-utils";

import CartIcon from "../../components/cart-icon/cart-icon-comp";
import CartDisplay from "../../components/cart-display/cart-display-comp";
import { selectCurrentUser } from "../../store/user/user-selector";
import { selectCartState } from "../../store/cart/cart-selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartState = useSelector(selectCartState);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <ShopLogo className="logo" />
        </Link>
        <div className="links-container">
          <Link to="/shop" className="link">
            Shop
          </Link>
          {currentUser ? (
            <span onClick={SignOutUser} className="link">
              Sing Out
            </span>
          ) : (
            <Link to="/sign-in" className="link">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {cartState && <CartDisplay />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
