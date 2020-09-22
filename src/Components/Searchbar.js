import React, { useRef } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function Searchbar({ handleChange, handleClick }) {
  return (
    <InputGroup className="mb-3">
      <FormControl
        onChange={(event) => handleChange(event)}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          data-type="user"
          onClick={(event) => handleClick(event)}
        >
          Content
        </Button>
        <Button
          variant="outline-secondary"
          data-type="user"
          onClick={(event) => handleClick(event)}
        >
          User
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
export default Searchbar;
