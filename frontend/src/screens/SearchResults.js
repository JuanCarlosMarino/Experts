import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ResultList from "../components/ResultList";

const SearchResults = () => {
  const city = localStorage.getItem("city");

  return (
    <Container>
      <Row>
        <h2>Ciudad: {city}</h2>
      </Row>
      <Row>
        <Col>
          <ResultList location={city} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
