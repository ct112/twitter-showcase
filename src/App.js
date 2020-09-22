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
  const [tweetData, setTweetData] = useState([]);
  const [tweetsWallData, setTweetsWallData] = useState([]);
  // const clearSearchRef = useRef("")

  const twitter = {
    getWallData: async function (searchString, searchType) {
      await axios
        .get(`/api/wall/${searchType}?search=${searchString}`)
        .then((res) => setTweetsWallData(res.data.statuses))
        .catch((error) => console.log(error));
    },
    getSingleTweet: async function (searchString, searchType) {
      await axios
        .get(`/api/randomtweet/${searchType}?search=${searchString}`)
        .then((res) => setTweetData(res.data))
        .catch((error) => console.log(error));
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
    const { value } = event.target;
    setSearchString(value);
  }

  function handleClickButton(event, ...arg) {
    // const [searchInput] = [...arg];
    // if (searchInput) {
    //   getTweets(searchInput, "user");
    // } else {
    const searchType = event.currentTarget.dataset.type;
    twitter.getWallData(searchString, searchType);

    // clearSearchRef.current.value = ""
  }

  function handleClickImage(event) {
    const searchName = event.target.id;
    twitter.getSingleTweet(searchName, "user");
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
              handleClick={handleClickButton}
              // clearSearchRef={clearSearchRef}
            />
            <Tiles tweetData={tweetsWallData} />
          </Route>
          <Route path="/bye">
            <Carousel handleClickImage={handleClickImage} />
            <Quote tweetData={tweetData} />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
