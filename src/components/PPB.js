import React, { useEffect, useState } from "react";
import { PayPalButtons, FUNDING } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const PayPalPayment = ({ total }) => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"BookShopper books",
          amount: {
            currency_code: "USD",
            value: total,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Show a success message to the buyer
      setPaid(true);
      console.log("Transaction completed by " + details.payer.name.given_name);
    });
  };

  useEffect(() => {
    // This function will be called when the component mounts
    // Initialize the PayPal SDK
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}`;
    script.addEventListener("load", () => {
      // Once the script is loaded, you can initialize PayPal buttons
      window.paypal
        .Buttons({
          fundingSource: FUNDING.PAYPAL,
          createOrder,
          onApprove,
          onError: setError,
        })
        .render("#paypal-buttons-container");
    });
    document.body.appendChild(script);

    return () => {
      // Clean up function to remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    paid &&
      navigate("/sendingInfo", {
        state: { total: total, paypal: window.paypal },
      });
  }, [paid]);

  return (
    <div>
      <div id="paypal-buttons-container"></div>
      {paid && <div>Payment successful!</div>}
      {error && <div>Error occurred: {error.message}</div>}
    </div>
  );
};

export default PayPalPayment;
