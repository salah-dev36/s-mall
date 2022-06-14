import React from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form-comp';
import SignInForm from '../../components/sign-in-form/sign-in-form-comp';
import './authentication-page-styles.scss'


const Authentication = () => {
  

  return (
    <div className='authentication-page'>
      <SignInForm/>
      <SignUpForm />
    </div>
  )
}

export default Authentication