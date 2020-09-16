import React from "react";
import Masonry from 'react-masonry-css'
import "../Tiles.css"


function Tiles(props) {

console.table(props.tweetData)
const tweets = props.tweetData.map((item, index) => {
          return (
              <div>
              <div key={index}>{item.id}</div>
               <div key={index}>{item.text}</div>
                <div key={index}>{item.created_at}</div>
                <div key={index}>{item.favorite_count}</div>
            </div>)
});

    return (
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {tweets}
        </Masonry>)
}

export default Tiles