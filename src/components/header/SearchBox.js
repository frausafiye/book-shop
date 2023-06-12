import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SearchBox(props) {
  const history = useHistory();
  const [inputField, setInputField] = useState("");

  const AddToAppState = (e) => {
    e.preventDefault();
    console.log(history);
    if (history.location.pathname !== "/") {
      history.push("/");
    }
    props.addInputToState({ arg: inputField, type: "userInput" });
  };
  return (
    <form onSubmit={AddToAppState}>
      <label>
        <input
          type="text"
          name="searchbox"
          placeholder="search for a book"
          onChange={(e) => setInputField(e.target.value)}
        />
        <button type="submit" className="btn">
          <FontAwesomeIcon icon={["fas", "search"]} />
        </button>
      </label>
    </form>
  );
}
