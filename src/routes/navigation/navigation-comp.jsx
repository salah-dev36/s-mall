import React, { Fragment, useContext } from 'react';
import {Link, Outlet} from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';

import { ReactComponent as ShopLogo } from '../../assets/crown.svg';

import { SignOutUser } from '../../utils/firebase/firebase-utils';

import './navigation-styles.scss';


const Navigation = () => {

  const {currentUser}= useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to='/' className='logo-container'>
          <ShopLogo className="logo" />
        </Link>
        <div className="links-container">
          <Link to='/' className="link">
            Home
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation