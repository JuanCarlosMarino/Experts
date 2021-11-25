import React, { useState, useEffect } from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import ResultItem from "./ResultItem";
import Profile from "./Profile";

import { searchExperts } from "../apis/crud";

const ResultList = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchExperts(props.city, setSearchResults);
  }, []);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={5}>
          <ListGroup>
            {searchResults.forEach((result) => {
              <ListGroup.Item action href={result.uid}>
                <ResultItem />
              </ListGroup.Item>;
            })}
          </ListGroup>
        </Col>

        <Col sm={7}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
              <Profile />
            </Tab.Pane>

            <Tab.Pane eventKey="#link2">
              <Profile />
            </Tab.Pane>

            <Tab.Pane eventKey="#link3">
              <Profile />
            </Tab.Pane>

            <Tab.Pane eventKey="#link4">
              <Profile />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default ResultList;
