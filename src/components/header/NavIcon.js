import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavIcon(props) {
  let favoriteItems = useSelector((state) => state.favorites);
  let cartItems = useSelector((state) => state.cart);
  let link = props.type === "cart" ? "/cart" : "/watch";
  let icon = props.type === "cart" ? ["fas", "cart-plus"] : ["fas", "heart"];
  let length = props.type === "cart" ? cartItems.length : favoriteItems.length;
  return (
    <Link to={link}>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
        <div className="counterbox">{length}</div>
      </div>
    </Link>
  );
}
