import React, { Fragment, useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';
import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as ShopLogo } from '../../assets/crown.svg';

import { SignOutUser } from '../../utils/firebase/firebase-utils';

import './navigation-styles.scss';
import CartIcon from '../../components/cart-icon/cart-icon-comp';
import CartDisplay from '../../components/cart-display/cart-display-comp';


const Navigation = () => {

  const {currentUser}= useContext(UserContext);
  const {cartState} = useContext(CartContext);
  

  return (
    <Fragment>
      <div className="navigation">
        <Link to='/' className='logo-container'>
          <ShopLogo className="logo" />
        </Link>
        <div className="links-container">
          <Link to='/shop' className="link">
            Shop
          </Link>  
          {
            currentUser ? (
              <span onClick={SignOutUser} className="link" >Sing Out</span>
            ) : (
              <Link to='/sign-in' className="link">
                Sign In
              </Link> 
            )
          } 
          <CartIcon />       
        </div>
        {
          cartState && <CartDisplay />   
        }
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation