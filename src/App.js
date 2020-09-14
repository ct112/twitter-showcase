import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import routes from "./routes";
import Navbar from "./Components/Navbar";
import "./App.css";
import axios from "axios";
import Searchbar from "./Components/Searchbar";
import Tiles from "./Components/Tiles";
import Bye from "./Components/Bye";

function App() {
  let [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getTwitter() {
  //     const response = await axios
  //       .get("http://localhost:5000/twitter")
  //       .then((res) => setData(res));
  //     console.log(data);
  //   }
  // }, [data]);

  function handleSubmit(e) {
    return "";
  }

  return (
    <div>
      <Navbar />
      <p>{data}</p>
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
    </div>
  );
}

export default App;
