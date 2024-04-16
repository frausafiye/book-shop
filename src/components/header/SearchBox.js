import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchBox(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const [inputField, setInputField] = useState("");

  const AddToAppState = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
    props.addInputToState({ arg: inputField, type: "userInput" });
  };
  return (
    <form onSubmit={AddToAppState}>
      <label>
        <input
          type="text"
          name="searchbox"
          onChange={(e) => setInputField(e.target.value)}
        />
        <button type="submit" className="btn search-button">
          <FontAwesomeIcon icon={["fas", "search"]} />
        </button>
      </label>
    </form>
  );
}
