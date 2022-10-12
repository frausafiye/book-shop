import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import NavIcon from "./NavIcon";
import NavLinks from "./NavLinks";
import "./header.css";

const Header = (props) => {
  const history = useHistory();
  const [inputField, setInputField] = useState("");

  const AddToAppState = (e) => {
    e.preventDefault();
    history.push("/");
    props.addInputToState({ arg: inputField, type: "userInput" });
  };
  return (
    <div>
      <nav className="nav">
        <div className="nav-first-line">
          <img className="logo" src={Logo} alt="logo" />
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
          <div className="horizontal-nav">
            <div className="horizontal-nav-bars">
              <FontAwesomeIcon icon={["fas", "bars"]} />
            </div>
            <div className="icons">
              <NavIcon type={"cart"} />
              <NavIcon type={"watch"} />
            </div>
          </div>
        </div>
        <NavLinks addInputToState={props.addInputToState} />
      </nav>
    </div>
  );
};
export default Header;
