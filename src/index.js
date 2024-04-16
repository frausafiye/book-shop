import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./css/main.css";
import Container from "./components/Container";
//icons:
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faHeart,
  faCartPlus,
  faShoppingCart,
  faEuroSign,
  faShippingFast,
  faArrowCircleRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faSearch,
  faCartPlus,
  faHeart,
  faShoppingCart,
  faEuroSign,
  faShippingFast,
  faArrowCircleRight,
  faBars
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Container>
    <App />
  </Container>
);
