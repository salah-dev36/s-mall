import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input-comp";
import Button from "../../components/button/button-comp";

import {
  createUserDocument,
  signInWithGooglePopup,
  signInAuthUser,
} from "../../utils/firebase/firebase-utils";

import "./sign-in-form-styles.scss";

const defaultFieldsValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFieldsValue);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFieldsValue);
    navigate("/shop");
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUser(email, password);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert(
            "There was a problem, we cannot find an account with that email address"
          );
          break;
        case "auth/wrong-password":
          alert("Incorrect username/password combination. Please try again");
          break;
        default:
          console.log(err);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    navigate("/shop");
  };

  const eventHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="email"
          inputProps={{
            type: "email",
            name: "email",
            onChange: eventHandler,
            value: email,
          }}
        />

        <FormInput
          label="password"
          inputProps={{
            type: "password",
            name: "password",
            onChange: eventHandler,
            value: password,
          }}
        />

        <div className="buttons-container">
          <Button type="submit" children="sign in" />

          <Button
            onClick={logGoogleUser}
            children="sign in with google"
            feature="google-sign-in"
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
