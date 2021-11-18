import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFetchAsync } from "../reducer/middleWare";
import { HashRouter, Route, Switch } from "react-router-dom";
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
      <Route
        render={(props) => (
          <Header {...props} addInputToState={addInputToState} />
        )}
      ></Route>
      <Switch>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/watch">
          <Favorites />
        </Route>
        <Route exact path="/sendingInfo" component={SendingInfo} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/">
          <Books />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
