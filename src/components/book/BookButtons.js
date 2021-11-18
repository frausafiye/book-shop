import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function BookButtons({ book }) {
  const location = useLocation();
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart);

  const changeNumberFunc = (bookObj, e) => {
    dispatch({
      type: "changeAmount",
      payload: { book: bookObj, newAmount: e.target.value },
    });
  };

  const toAddFavorites = (bookObj, e) => {
    e.target.disabled = true;
    dispatch({ type: "addFavorites", payload: bookObj });
  };
  const addToCart = (bookObj) => {
    if (
      cartItems.filter(
        (book) =>
          book.volumeInfo.title === bookObj.volumeInfo.title &&
          book.volumeInfo.infoLink === bookObj.volumeInfo.infoLink
      ).length > 0
    ) {
      dispatch({ type: "setAlert", payload: { alert: true } });
      setTimeout(() => {
        dispatch({ type: "setAlert", payload: { alert: false } });
      }, 2000);
    } else {
      dispatch({ type: "addCart", payload: bookObj });
    }
  };
  return (
    <div>
      {location.pathname === "/" && (
        <>
          <button className="btn book-btn" onClick={() => addToCart(book)}>
            {" "}
            Add to cart
          </button>
          <button
            className="btn book-btn"
            onClick={(e) => toAddFavorites(book, e)}
          >
            {" "}
            Add to favorites
          </button>
        </>
      )}
      {location.pathname === "/cart" && (
        <>
          <div>
            <button
              className="btn book-btn"
              onClick={() =>
                dispatch({
                  type: "removeFromCart",
                  payload: book,
                })
              }
            >
              {" "}
              Remove from cart
            </button>
            <button
              className="btn book-btn"
              onClick={(e) => toAddFavorites(book, e)}
            >
              {" "}
              Add to favorites
            </button>
          </div>
          <input
            type="number"
            name="number"
            min="0"
            value={book.quantity}
            onChange={(e) => changeNumberFunc(book, e)}
          />
        </>
      )}
      {location.pathname === "/watch" && (
        <>
          <button className="btn book-btn" onClick={() => addToCart(book)}>
            {" "}
            Add to cart
          </button>
          <button
            className="btn book-btn"
            onClick={() =>
              dispatch({
                type: "removeFromFavorites",
                payload: book,
              })
            }
          >
            {" "}
            Remove from favorites
          </button>
        </>
      )}
    </div>
  );
}
