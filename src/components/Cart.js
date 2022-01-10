import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PaymentSteps from "./payment-steps/PaymentSteps";
import Book from "./book/Book";
import CartInfo from "./CartInfo";

const Books = (props) => {
  let cartItems = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  const calculateAmountAndTotal = () => {
    let amountOfCart = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.quantity,
      0
    );
    let totalOfCart = cartItems.reduce(
      (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
      0
    );
    setAmount(amountOfCart);
    setTotal(totalOfCart);
  };

  useEffect(() => {
    calculateAmountAndTotal();
  }, [cartItems]);

  return (
    <div>
      <PaymentSteps active="first" />
      <section className="section">
        <div className="section-center books">
          {cartItems &&
            cartItems.map((bookObj, i) => (
              <Book
                index={i}
                book={bookObj}
                calculateTotal={calculateAmountAndTotal}
              />
            ))}
        </div>

        <CartInfo total={total} amount={amount} />
      </section>
    </div>
  );
};
export default Books;
