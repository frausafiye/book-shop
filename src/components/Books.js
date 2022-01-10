import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./book/books.css";
import Book from "./book/Book";

const Books = (props) => {
  let books = useSelector((state) => state.books);
  let cartItems = useSelector((state) => state.cart);
  let alert = useSelector((state) => state.alert);

  useEffect(() => {}, [cartItems]);

  return (
    <div>
      <section className="section">
        <div className="section-center books">
          {alert && (
            <div className="warning-box">
              <p>
                You've added this book to your cart already. If you want to add
                it again, please go to your cart.
              </p>
            </div>
          )}
          {books &&
            books.map((bookObj, i) => (
              <Book key={i} index={i} book={bookObj} />
            ))}
        </div>
      </section>
    </div>
  );
};
export default Books;
