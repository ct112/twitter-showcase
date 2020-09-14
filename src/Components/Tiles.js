import React from "react";
import Masonry from 'react-masonry-css'
import "../Tiles.css"


function Tiles() {
    var items = [
  {id: 1, name: 'My First Item', more: 'hello'},
  {id: 2, name: 'Another item', more:'hello'},
  {id: 3, name: 'Third Item',more:'hello'},
  {id: 4, name: 'Here is the Fourth', more:'hello'},
  {id: 5, name: 'High Five', more:'hello'}
];

items = items.map(function(item) {
  return <div key={item.id}>{item.name}</div>

});
    return (
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {items}
        </Masonry>)
}

export default Tiles