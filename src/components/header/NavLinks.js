import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Navlinks(props) {
  const history = useHistory();
  const categories = [
    "Romance",
    "Adventure",
    "Horror",
    "Fantasy",
    "Mystery",
    "Science-Fiction",
    "History",
    "Travel",
    "Children's",
  ];
  const [clickedCategorie, setClickedCategorie] = useState("");
  return (
    <ul className="nav-links">
      {categories.map((genre) => (
        <li
          onClick={(e) => {
            setClickedCategorie(genre);
            props.addInputToState({
              arg: e.target.innerHTML,
              type: "category",
            });
            if (history.location.pathname !== "/") {
              history.push("/");
            }
          }}
          className={
            clickedCategorie === genre ? "nav-link active" : "nav-link"
          }
          key={genre}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
}
