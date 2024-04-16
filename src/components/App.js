import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFetchAsync } from "../reducer/middleWare";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Books from "./Books";
import Cart from "./Cart";
import Favorites from "./Favorites";
import SendingInfo from "./SendingInfo";
import Payment from "./Payment";

const App = () => {
  const dispatch = useDispatch();

  const addInputToState = ({ arg: a, type: b }) => {
    if (b === "category") {
      let urlToPass = `https://www.googleapis.com/books/v1/volumes?q=subject:${a}&key=${process.env.REACT_APP_API_KEY}`;
      dispatch(dataFetchAsync(urlToPass));
    } else {
      let urlToPass = `https://www.googleapis.com/books/v1/volumes?q=${a}}& key=${process.env.REACT_APP_API_KEY}`;
      dispatch(dataFetchAsync(urlToPass));
    }
  };
  const initialCategory = "horror";

  useEffect(() => {
    addInputToState({ arg: initialCategory, type: "category" });
  }, []);

  return (
    <HashRouter>
      <Header addInputToState={addInputToState} />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/watch" element={<Favorites />} />
        <Route path="/sendingInfo" element={<SendingInfo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
