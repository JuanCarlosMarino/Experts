import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿En dónde necesitas a tu <strong>Experto</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Paris</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Londres</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Berlin</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Tokio</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cartagena</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
