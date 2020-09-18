import React, {useRef} from "react";
import {Button, InputGroup,FormControl} from "react-bootstrap"

function Searchbar({ handleChange, handleClick, }) {

  return (
    <form
      action="#"
      // onSubmit={(event) => handleSubmit(event)}
      className="form-inline d-flex justify-content-center md-form form-sm mt-0"
    >
      <div className="input-group">
        <input
          className="form-control form-control-sm ml-3 w-75"
          onChange={(event) => handleChange(event)}
          type="text"
          placeholder="Search"
          aria-label="Search"
          // ref={clearsSearchRef}
        />

        <button className="btn btn-outline-secondary" data-type="users" data-count="15" onClick={event => handleClick(event)}  type="submit">
          User
        </button>
        <button className="btn btn-outline-secondary" data-type="search" data-count="15" type="submit">
          Content
        </button>
      </div>
    </form>
  );
}
export default Searchbar;



