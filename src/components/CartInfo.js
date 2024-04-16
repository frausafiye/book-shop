import React from "react";
import { Link } from "react-router-dom";

export default function CartInfo({ total, amount }) {
  return (
    <>
      {total ? (
        <div className="amount-box">
          <>
            <p>Amount of Artikel: {amount}</p>
            <p>Total Price: {total}€</p>
            <Link to={{ pathname: "/payment" }} state={{ total: total }}>
              <button className="btn">Checkout</button>
            </Link>
          </>
        </div>
      ) : (
        <div className=" amount-box no-item-box">
          <p>
            You haven't booked any book yet.
            <Link to="/">
              <button className="btn" style={{ marginLeft: "2rem" }}>
                Start Exploring!
              </button>
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
