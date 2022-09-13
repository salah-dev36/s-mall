import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input-comp";
import Button from "../button/button-comp";

import {
  createAuthUser,
  createUserDocument,
} from "../../utils/firebase/firebase-utils";

import "./sign-up-form-styles.scss";
import { signUpStart } from "../../store/user/user-action";

const defaultFieldsValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFieldsValue);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFieldsValue);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not correspond");
      return;
    }

    try {
      dispatch(signUpStart(email,password, displayName))

      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("This email is already associated with another account");
      } else {
        console.log("there was an issue", err);
      }
    }
  };

  const eventHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Full Name"
          inputProps={{
            type: "text",
            name: "displayName",
            onChange: eventHandler,
            required: true,
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputProps={{
            type: "email",
            name: "email",
            onChange: eventHandler,
            required: true,
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputProps={{
            type: "password",
            name: "password",
            onChange: eventHandler,
            required: true,
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputProps={{
            type: "password",
            name: "confirmPassword",
            onChange: eventHandler,
            required: true,
            value: confirmPassword,
          }}
        />
        <Button type="submit" children="Sign-Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
