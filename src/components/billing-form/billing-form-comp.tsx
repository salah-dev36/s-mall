import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button from "../button/button-comp";

import "./billing-form-styles.scss";

import { selectTotalCount } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";


const BillingForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectTotalCount);
  const currentUser = useSelector(selectCurrentUser);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setPaymentProcessing(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((resp) => resp.json());

    const clientSecret = response.paymentIntent.client_secret;

    const cardDetails = elements.getElement(CardElement)

    if (!cardDetails) return;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setPaymentProcessing(false);

    if (paymentResult.error) {
      alert("Payment failed, please try again");
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <div className="billing-form-container">
      <form onSubmit={paymentHandler} className="form-container">
        <h2>Credit Card Payment</h2>
        <CardElement  />
        <Button
          disabled={!amount || paymentProcessing}
          isLoading={paymentProcessing}
          feature="payment"
          children="Pay Now"
        />
      </form>
    </div>
  );
};

export default BillingForm;
