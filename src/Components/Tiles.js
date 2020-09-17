import React from "react";
import Masonry from 'react-masonry-css'
import "../Tiles.css"
import Moment from 'react-moment';
import 'moment-timezone';
import Cards from "./Cards"


function Tiles(props) {

const tweets = props.tweetData.map((item, index) => {
    return (
        <div className="card" style={{width: 300}}>
            <div className="card-body">
                <h5 className="card-title">{item.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.created_at}</h6>
                <p className="card-text">{item.text}</p>
            </div>
            <div className="card-footer text-muted">
                {item.favorite_count}
            </div>
        </div>
    )
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
            columnClassName="my-masonry-grid_column">
            {tweets}
        </Masonry>)
}

export default Tiles