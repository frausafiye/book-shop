import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./payment-steps.css";

export default function PaymentSteps({ active }) {
  return (
    <div className="buying steps">
      <div className={active === "first" ? "active-step" : undefined}>
        <div className="step-box">
          <FontAwesomeIcon
            icon={["fas", "shopping-cart"]}
            className="buying step"
          />
        </div>
      </div>
      <div className="arrow-box">
        <FontAwesomeIcon
          icon={["fas", "arrow-circle-right"]}
          className="buying step"
        />
      </div>
      <div className={active === "second" ? "active-step" : undefined}>
        <div className="step-box">
          <FontAwesomeIcon
            icon={["fas", "euro-sign"]}
            className="buying step"
          />
        </div>
      </div>
      <div className="arrow-box">
        <FontAwesomeIcon
          icon={["fas", "arrow-circle-right"]}
          className="buying step"
        />
      </div>
      <div className={active === "third" ? "active-step" : undefined}>
        <div className="step-box">
          <FontAwesomeIcon
            icon={["fas", "shipping-fast"]}
            className="buying step"
          />
        </div>
      </div>
    </div>
  );
}
