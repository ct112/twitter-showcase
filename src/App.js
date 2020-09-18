import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import routes from "./routes";
import Navbar from "./Components/Navbar";
import "./App.css";
import axios from "axios";
import Searchbar from "./Components/Searchbar";
import Tiles from "./Components/Tiles";
import Bye from "./Components/Bye";

function App() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchType, setSearchType] = useState(null);
  const [tweetsWalldata, setTweetsWallData] = useState([]);
  const [randomTweetdata, setRandomTweetData] = useState(null);
  // const clearSearchRef = useRef("")

  async function getTweets(searchString, searchType, searchReturnCount) {
    const response = await axios
      .get(
        `/api?search=${searchString}&&type=${searchType}&&count=${searchReturnCount}`
      )
      .then((res) => setTweetsWallData(res.data))

  }

  // useEffect(() => {
  //   async function getTwitter() {
  //     const response = await axios
  //       .get("http://localhost:5000/twitter")
  //       .then((res) => setData(res));
  //     console.log(data);
  //   }
  // }, [data]);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //
  //   // don't forget to check search string for white spaces and add + to the search q
  // }

  function handleChange(event) {
    let { value } = event.target;
    setSearchString(value);
  }

  function handleClick(event){
    const searchType = event.currentTarget.dataset.type
    const tweetsReturnedCount = event.currentTarget.dataset.type
    getTweets(searchString, "user", 15);
    // clearSearchRef.current.value = ""

  }

  return (
    <div>
      <Navbar />
      <p>{data}</p>
      <Route path="/" component={App}>
        <Switch>
          <Route path="/test">
            <Searchbar
              // handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleClick={handleClick}
              // clearSearchRef={clearSearchRef}
            />
            <Tiles tweetData={tweetsWalldata}/>
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
