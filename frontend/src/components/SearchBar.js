import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  const redirectUrl = "/search-results";

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿En dónde necesitas a tu <strong>Experto</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl}>Paris</Dropdown.Item>
        <Dropdown.Item href={redirectUrl}>Londres</Dropdown.Item>
        <Dropdown.Item href={redirectUrl}>Berlin</Dropdown.Item>
        <Dropdown.Item href={redirectUrl}>Tokio</Dropdown.Item>
        <Dropdown.Item href={redirectUrl}>Cartagena</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
