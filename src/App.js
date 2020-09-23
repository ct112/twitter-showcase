import React, { useState, useEffect, useContext, createContext } from "react";
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
  const [tweetData, setTweetData] = useState(null);
  const [wallTweets, setWallTweets] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [name, setName] = useState();
  let UserContext = createContext("");

  const twitter = {
    getWallTweets: async function (searchString, searchType) {
      await axios
        .get(`/api/wall/${searchType}?search=${searchString}`)
        .then((res) => setWallTweets(res.data.statuses))
        .catch((error) => console.log(error));
    },
    getSingleTweet: async function (searchString, searchType) {
      await axios
        .get(`/api/randomtweet/${searchType}?search=${searchString}`)
        .then((res) => setTweetData(res.data))

        .catch((error) => console.log(error));
    },
  };
  useEffect(() => {
    twitter.getSingleTweet(searchName, "user");
  }, [searchName]);

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
    twitter.getWallTweets(searchString, searchType);
  }

  function handleClickImage(event) {
    setSearchName(event.target.id);
  }

  return (
    <div>
      <Navbar />
      <Route path="/" component={App}>
        <Switch>
          <Route path="/test">
            <Searchbar
              handleChange={handleChange}
              handleClick={handleClickButton}
            />
            <Tiles tweetData={wallTweets} />
          </Route>
          <Route path="/bye">
            <Carousel handleClickImage={handleClickImage} tweet={tweetData} />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
