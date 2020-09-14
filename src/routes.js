import React from "react";
import App from "./App";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Bye from "./Components/Bye";
import { Route, Switch } from "react-router-dom";
import Tiles from "./Components/Tiles";

const routes = (
  <Route path="/" component={App}>
    <Switch>
      <Route path="/test">
        <Searchbar handleSubmit={handleSubmit} />
        <Tiles />
      </Route>
      <Route path="/bye">
        <Bye />
      </Route>
    </Switch>
  </Route>
);

export default routes