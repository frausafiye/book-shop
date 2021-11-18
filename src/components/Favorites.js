import React from "react";
import { useSelector } from "react-redux";
import Book from "./book/Book";

const Books = (props) => {
  let favoriteItems = useSelector((state) => state.favorites);
  let alert = useSelector((state) => state.alert);

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
          {favoriteItems &&
            favoriteItems.map((bookObj, i) => (
              <Book index={i} book={bookObj} />
            ))}
        </div>
      </section>
    </div>
  );
};
export default Books;
