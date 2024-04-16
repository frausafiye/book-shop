import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import BookButtonTypes from "./BookButtonTypes";

export default function BookButtons({ book, calculateTotal }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);

  const changeNumberFunc = (bookObj, e) => {
    if (e.target.value === "0") {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
      e.target.value = "1";
    } else {
      dispatch({
        type: "changeAmount",
        payload: { book: bookObj, newAmount: e.target.value },
      });
      calculateTotal();
    }
  };

  return (
    <div>
      {location.pathname === "/" && (
        <>
          <BookButtonTypes type="addToCart" book={book} />
          <BookButtonTypes type="addToFavorites" book={book} />
        </>
      )}
      {location.pathname === "/watch" && (
        <>
          <BookButtonTypes type="addToCart" book={book} />
          <BookButtonTypes type="removeFromFavorites" book={book} />
        </>
      )}
      {location.pathname === "/cart" && (
        <>
          {showWarning && (
            <div className="warning-box">
              <p>
                Please click on remove from cart button to remove the book from
                cart
              </p>
            </div>
          )}
          <div>
            <BookButtonTypes type="removeFromCart" book={book} />
            <BookButtonTypes type="addToFavorites" book={book} />
          </div>
          <input
            type="number"
            name="number"
            min="0"
            defaultValue={book.quantity}
            onChange={(e) => changeNumberFunc(book, e)}
          />
        </>
      )}
    </div>
  );
}
