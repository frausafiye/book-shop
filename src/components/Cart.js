import React from "react";
import { useSelector } from "react-redux";
import PaymentSteps from "./payment-steps/PaymentSteps";
import Book from "./book/Book";
import CartInfo from "./CartInfo";

const Books = (props) => {
  let cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <PaymentSteps active="first" />
      <section className="section">
        <div className="section-center books">
          {cartItems &&
            cartItems.map((bookObj, i) => <Book index={i} book={bookObj} />)}
        </div>

        <CartInfo />
      </section>
    </div>
  );
};
export default Books;
