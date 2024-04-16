import React, { useState } from "react";
import PaymentSteps from "./payment-steps/PaymentSteps";
import PPB from "./PPB";
import { useLocation } from "react-router-dom";

export default function Payment(props) {
  const [showPaypal, setShowPaypal] = useState(true);
  const location = useLocation();
  console.dir(location.state);
  return (
    <div>
      <PaymentSteps active="second" />
      <div style={{ width: "100%", textAlign: "center" }}>
        {showPaypal && <PPB total={location.state.total} />}
      </div>
    </div>
  );
}
