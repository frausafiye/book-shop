import React from "react";
import { useSelector } from "react-redux";
import Book from "./book/Book";
import WarningMultipleCartItems from "./book/WarningMultipleCartItems";

const Books = (props) => {
  let favoriteItems = useSelector((state) => state.favorites);
  let alert = useSelector((state) => state.alert);

  return (
    <div>
      <section className="section">
        <div className="section-center books">
          {alert && <WarningMultipleCartItems />}
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
