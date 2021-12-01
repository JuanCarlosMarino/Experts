import React, { useState, useEffect } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import ResultItem from "./ResultItem";
import Profile from "./Profile";

import { searchExperts } from "../apis/crud";

const ResultList = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchExperts(props.city, setSearchResults);
    console.log(searchResults)
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example">
      <Row>
        <Col sm={5}>
          <ListGroup>
            {searchResults.map((result, index) => (
              <ListGroup.Item action href={"#" + index}>
                <ResultItem expertData={result} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col sm={7}>
          <Tab.Content>
            {searchResults.map((result, index) => (
              <Tab.Pane eventKey={"#" + index}>
                <Profile expertData={result} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ResultList;
