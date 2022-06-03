import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProgressTemplate from "./ProgressTemplate";

export default class App extends Component {
  render() {
    return (
      <div className="root">
        <Container>
          <Row>
            <Col>
              <ProgressTemplate percent={0} />
            </Col>
            <Col>
              <ProgressTemplate percent={40} />
            </Col>
            <Col>
              <ProgressTemplate percent={40} />
            </Col>
            <Col>
              <ProgressTemplate
                theme={{
                  success: {
                    symbol: "🏄‍",
                    color: "rgb(223, 105, 180)"
                  },
                  active: {
                    symbol: "😀",
                    color: "#fbc630"
                  },
                  default: {
                    symbol: "😱",
                    color: "#fbc630"
                  }
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
