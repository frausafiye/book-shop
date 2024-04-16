import React from "react";
import { ReviewSummmary } from "./ReviewSummary";

export default function BookInfo({ book }) {
  return (
    <div className="book-info">
      <h4> {book.volumeInfo.title} </h4>
      <p>
        {book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "unknown"}
      </p>
      <p>
        Related Categories:
        {book.volumeInfo.categories
          ? book.volumeInfo.categories.join(", ").toLowerCase()
          : "unknown"}
      </p>
      <ReviewSummmary
        averageRating={book.volumeInfo.averageRating}
        ratingsCount={book.volumeInfo.ratingsCount}
      />
      <p> Price:{book.price}€ </p>
      <a href={book.volumeInfo.infoLink} className="btn more">
        More
      </a>
    </div>
  );
}
