import { Fragment, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthErrorCodes, AuthError } from "firebase/auth";

import { ReactComponent as ShopLogo } from "../../assets/crown.svg";
import "./navigation-styles.scss";

import CartIcon from "../../components/cart-icon/cart-icon-comp";
import CartDisplay from "../../components/cart-display/cart-display-comp";

import { selectCurrentUser, selectErrorMessage } from "../../store/user/user-selector";
import { selectCartState } from "../../store/cart/cart-selector";
import { signOutStart } from "../../store/user/user-action";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartState = useSelector(selectCartState);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  const AuthentificationError = useSelector(selectErrorMessage)

  useEffect(() => {
    const ErrorHandler = () => {
      if (AuthentificationError) {
        switch ((AuthentificationError as AuthError).code) {
          case AuthErrorCodes.INVALID_PASSWORD:
            alert("Incorrect username/password combination. Please try again");
            break;
          case AuthErrorCodes.USER_DELETED:
            alert(
              "There was a problem, we cannot find an account associated to that email address"
            );
            break;
          case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
            alert(
              "Access to this account has been temporarily disabled due to many failed login attempts. Please try again later"
            );
            break;
          case AuthErrorCodes.EMAIL_EXISTS:
            alert(
              "Your Email is already associated with an account"
            )
            break
          default:
            alert(
              "There was an issue, please try again later"
            )
            console.log((AuthentificationError as AuthError).code)
        }
      }
    };

    ErrorHandler()
  }, [AuthentificationError]);

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
            <span onClick={signOutUser} className="link">
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
