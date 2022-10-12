import React from "react";

export default function BookInfo({ book }) {
  return (
    <div className="book-info">
      <h4> {book.volumeInfo.title} </h4>
      <p> {book.volumeInfo.authors} </p>
      <p> Related Categories: {book.volumeInfo.categories} </p>
      <p> Price:{book.price}€ </p>
      <a href={book.volumeInfo.infoLink} className="btn more">
        More
      </a>
    </div>
  );
}
