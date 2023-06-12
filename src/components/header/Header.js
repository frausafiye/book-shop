import React from "react";
import Logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavIcon from "./NavIcon";
import NavLinks from "./NavLinks";
import "./header.css";
import SearchBox from "./SearchBox";

const Header = (props) => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-first-line">
          <img className="logo" src={Logo} alt="logo" />
          <SearchBox addInputToState={props.addInputToState} />
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
