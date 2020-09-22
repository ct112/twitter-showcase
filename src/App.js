import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import routes from "./routes";
import Navbar from "./Components/Navbar";
import "./App.css";
import axios from "axios";
import Searchbar from "./Components/Searchbar";
import Tiles from "./Components/Tiles";
import Bye from "./Components/Bye";
import Carousel from "./Components/Carousel";
import Quote from "./Components/Quote";

function App() {
  const [data, setData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [tweetsData, setTweetsData] = useState([]);
  const [tweetsWallData, setTweetsWallData]= useState([])
  // const clearSearchRef = useRef("")

  const twitter = {
    getWallData: async function (searchString, searchType) {
      await axios
        .get(`/api/${searchType}?search=${searchString}`)
        .then((res) => setTweetsWallData(res.data.statuses));
    },
  };

  // async function getTweets(searchString, searchType) {
  //   const response = await axios
  //     .get(`/api/${searchType}?search=${searchString}`)
  //     .then((res) => setTweetsData(res.data.statuses));
  // }

  // useEffect(() => {
  //   async function getTwitter() {
  //     const response = await axios
  //       .get("http://localhost:5000/twitter")
  //       .then((res) => setData(res));
  //     console.log(data);
  //   }
  // }, [data]);

  function handleChange(event) {
    let { value } = event.target;
    setSearchString(value);
  }

  function handleClick(event, ...arg) {
    // const [searchInput] = [...arg];
    // if (searchInput) {
    //   getTweets(searchInput, "user");
    // } else {
      const searchType = event.currentTarget.dataset.type;
      twitter.getWallData(searchString, searchType)

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
            <Tiles tweetData={tweetsWallData} />
          </Route>
          <Route path="/bye">
            <Carousel handleClick={handleClick} />
            <Quote tweetData={tweetsData} />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
