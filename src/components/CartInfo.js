import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartInfo(props) {
  let cartItems = useSelector((state) => state.cart);
  let total = useSelector((state) => state.total);
  return (
    <>
      {total ? (
        <div className="amount-box">
          <>
            <p>Amount of Artikel: {cartItems.length}</p>
            <p>Total Price:{total}€</p>
          </>
        </div>
      ) : (
        <div className=" amount-box no-item-box">
          <>
            <p>You haven't booked any book yet. Start Exploring!</p>
          </>
        </div>
      )}

      <div className="checkout-box">
        {total ? (
          <Link to={{ pathname: "/payment" }}>
            <button className="btn">Checkout</button>
          </Link>
        ) : null}
      </div>
    </>
  );
}
