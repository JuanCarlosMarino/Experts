import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ResultList from "../components/ResultList";

const SearchResults = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ResultList />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
