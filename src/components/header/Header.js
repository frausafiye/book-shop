import React from "react";
import img from "../../images/stacked-books-ladders.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavIcon from "./NavIcon";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import "./header.css";

const Header = (props) => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-first-line">
          <img className="logo" src={img} alt="logo" />
          {/* Image by <a href="https://www.freepik.com/free-photo/front-view-stacked-books-ladders-with-copy-space-education-day_21745444.htm#query=library&position=35&from_view=keyword&track=sph&uuid=d7f45971-0de1-4736-a973-670e4e929d8e">Freepik</a> */}
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
