import React, { Fragment } from 'react'
import './navigation-styles.scss'
import {Link, Outlet} from 'react-router-dom'
import { ReactComponent as ShopLogo } from '../../assets/crown.svg'

const Navigation = () => {
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
          <Link to='/sign-in' className="link">
            Sign In
          </Link>  
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation