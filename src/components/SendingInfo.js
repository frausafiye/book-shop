import React from "react";
import { useSelector } from "react-redux";
import PaymentSteps from "./payment-steps/PaymentSteps";

export default function SendingInfo(props) {
  let total = useSelector((state) => state.total);
  return (
    <div>
      <PaymentSteps active="third" />
      {total ? (
        <div
          style={{ padding: "5px", width: "fit-content", margin: "10px auto" }}
        >
          <h3>
            Payment of {total}$ is successful. Thank you for your purchase!
          </h3>
        </div>
      ) : (
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <h1>404</h1>
        </div>
      )}
    </div>
  );
}
