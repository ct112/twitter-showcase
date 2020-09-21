import React from "react";
import Masonry from "react-masonry-css";
import "../Tiles.css";
import Moment from "react-moment";
import Cards from "./Cards";

function Tiles(props) {
  console.table(props.tweetData);

  const tweets = props.tweetData.map((item, index) => {
    return (
      <div className="card" style={{ width: 300 }} key={item.id}>
        <div className="card-header">
            <img src={item.user.profile_image_url} alt={`${item.user.screen_name} profile pic`}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.user.screen_name}</h5>
          <h6>
            <Moment format="MM/DD/YYYY">{item.created_at}</Moment>
          </h6>

          <p className="card-text">{item.text}</p>
        </div>
        <div className="card-footer text-muted">{item.favorite_count}</div>
      </div>
    );
  });
  // console.table(props.tweetData)
  // const tweets = props.tweetData.map((item, index) => {
  //           return (
  //               <div>
  //               <div key={index}>{item.id}</div>
  //                <div key={index}>{item.text}</div>
  //                 <div key={index}>{item.created_at}</div>
  //                 <div key={index}>{item.favorite_count}</div>
  //             </div>)
  // });

  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {tweets}
    </Masonry>
  );
}

export default Tiles;
