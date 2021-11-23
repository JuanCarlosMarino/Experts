import React from "react";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

import ResultItem from "./ResultItem";
import Profile from "./Profile";

const ResultList = () => {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={5}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              <ResultItem />
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              <ResultItem />
            </ListGroup.Item>
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
