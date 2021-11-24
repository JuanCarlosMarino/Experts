import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const redirectUrl = "/search-results";

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿En dónde necesitas a tu <strong>Experto</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <Link to={redirectUrl} state={{ city: "Paris" }}>
            Paris
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={redirectUrl} state={{ city: "Londres" }}>
            Londres
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={redirectUrl} state={{ city: "Berlin" }}>
            Berlin
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to={redirectUrl} state={{ city: "Pasto" }}>
            Pasto
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
