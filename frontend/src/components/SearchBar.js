import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  const redirectUrl = "/search-results";
  const setSearchedCity = (selectedCity) => {
    console.log("Selecting city " + selectedCity);
    localStorage.setItem("city", selectedCity);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        ¿En dónde necesitas a tu <strong>Experto</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          href={redirectUrl}
          onClick={() => setSearchedCity("Paris")}
        >
          Paris
        </Dropdown.Item>
        <Dropdown.Item
          href={redirectUrl}
          onClick={() => setSearchedCity("Londres")}
        >
          Londres
        </Dropdown.Item>
        <Dropdown.Item
          href={redirectUrl}
          onClick={() => setSearchedCity("Berlin")}
        >
          Berlin
        </Dropdown.Item>
        <Dropdown.Item
          href={redirectUrl}
          onClick={() => setSearchedCity("Tokio")}
        >
          Tokio
        </Dropdown.Item>
        <Dropdown.Item
          href={redirectUrl}
          onClick={setSearchedCity("Cartagena")}
        >
          Cartagena
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
