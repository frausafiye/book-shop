import React from "react";
import { useSelector } from "react-redux";
import BookButtons from "./BookButtons";

export default function Book(props) {
  let alert = useSelector((state) => state.alert);
  return (
    <div className={alert ? "book changedColor" : "book"}>
      <h3> {props.index + 1} </h3>
      <div className="img-container">
        <img
          src={
            props.book.volumeInfo.imageLinks
              ? props.book.volumeInfo.imageLinks.smallThumbnail
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
          }
          alt="book"
          className={"book-img"}
        />
      </div>
      <div className="book-info">
        <h4> {props.book.volumeInfo.title} </h4>
        <p> {props.book.volumeInfo.authors} </p>
        <p> Related Categories: {props.book.volumeInfo.categories} </p>
        <p> Price:{props.book.price}€ </p>
        <a href={props.book.volumeInfo.infoLink} className="btn more">
          More
        </a>
      </div>
      <BookButtons book={props.book} calculateTotal={props.calculateTotal} />
    </div>
  );
}
