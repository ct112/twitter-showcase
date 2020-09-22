import React from "react";
import Masonry from "react-masonry-css";
import "../Tiles.css";
import Moment from "react-moment";
import Cards from "./Cards";

function Tiles(props) {
  const tweetData = props.tweetData.map((item) => (
    <Cards
      id={item.id}
      screen_name={item.user.screen_name}
      date_created={item.created_at}
      img_url={item.user.profile_image_url}
      favorite_count={item.favorite_count}
      text={item.text}
    />
  ));
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {tweetData}
    </Masonry>
  );
}

export default Tiles;
