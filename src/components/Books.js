import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./book/books.css";
import Book from "./book/Book";
import WarningMultipleCartItems from "./book/WarningMultipleCartItems";

const Books = (props) => {
  let books = useSelector((state) => state.books);
  let cartItems = useSelector((state) => state.cart);
  let alert = useSelector((state) => state.alert);

  useEffect(() => {}, [cartItems]);

  return (
    <div>
      <section className="section">
        <div className="section-center books">
          {alert && <WarningMultipleCartItems />}
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
