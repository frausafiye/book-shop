import React from "react";
import { useSelector } from "react-redux";
import BookButtons from "./BookButtons";
import BookInfo from "./BookInfo";

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
      <BookInfo book={props.book} />
      <BookButtons book={props.book} calculateTotal={props.calculateTotal} />
    </div>
  );
}
