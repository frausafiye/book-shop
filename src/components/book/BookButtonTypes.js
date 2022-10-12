import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BookButtonTypes({ type, book }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addToCartHandler = (bookObj) => {
    if (
      cartItems.filter(
        (bookItem) =>
          bookItem.volumeInfo.title === bookObj.volumeInfo.title &&
          bookItem.volumeInfo.infoLink === bookObj.volumeInfo.infoLink
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

  const addFavoritesHandler = (bookObj, e) => {
    e.target.disabled = true;
    dispatch({ type: "addFavorites", payload: bookObj });
  };

  const removeFromFavoritesButton = (
    <button
      className="btn book-btn"
      onClick={() =>
        dispatch({
          type: "removeFromFavorites",
          payload: book,
        })
      }
    >
      Remove from favorites
    </button>
  );

  const removeFromCartButton = (
    <button
      className="btn book-btn"
      onClick={() =>
        dispatch({
          type: "removeFromCart",
          payload: book,
        })
      }
    >
      Remove from cart
    </button>
  );

  const addToCartButton = (
    <button className="btn book-btn" onClick={() => addToCartHandler(book)}>
      Add to cart
    </button>
  );

  const addToFavoritesButton = (
    <button
      className="btn book-btn"
      onClick={(e) => addFavoritesHandler(book, e)}
    >
      Add to favorites
    </button>
  );
  return type === "addToFavorites"
    ? addToFavoritesButton
    : type === "addToCart"
    ? addToCartButton
    : type === "removeFromFavorites"
    ? removeFromFavoritesButton
    : removeFromCartButton;
}
