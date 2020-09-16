import React from "react";
import {Button, InputGroup,FormControl} from "react-bootstrap"

function Searchbar(props) {
  return (
    <form
      action="#"
      onSubmit={(event) => props.handleSubmit(event)}
      className="form-inline d-flex justify-content-center md-form form-sm mt-0"
    >
      <div className="input-group">
        <input
          className="form-control form-control-sm ml-3 w-75"
          onChange={(event) => props.handleChange(event)}
          type="text"
          placeholder="Search"
          aria-label="Search"
        />

        <button className="btn btn-outline-secondary" type="submit">
          Button
        </button>
        <button className="btn btn-outline-secondary" type="submit">
          Button
        </button>
      </div>
    </form>
  );
}
export default Searchbar;



