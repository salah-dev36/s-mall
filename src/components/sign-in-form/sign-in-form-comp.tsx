import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";



import FormInput from "../form-input/form-input-comp";
import Button from "../button/button-comp";

import "./sign-in-form-styles.scss";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user-action";


const defaultFieldsValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFieldsValue);
  const { email, password } = formFields;



  const resetFormFields = () => {
    setFormFields(defaultFieldsValue);
  };

  

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(emailSignInStart(email, password));

    resetFormFields();
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const eventHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
