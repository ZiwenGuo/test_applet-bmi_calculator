import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WeightInputBoard extends React.Component {
  render() {
    return this.props.useEngUnit ? (
      <div>
        <h2> Weight </h2>
        <Form>
          <Form.Row>
            <Container>
              <Row>
                <Col></Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Pounds</Form.Label>
                    <Form.Control
                      type="number"
                      value={
                        this.props.weightInPound === null
                          ? ""
                          : this.props.weightInPound
                      }
                      onChange={this.props.onWeightInPoundChange}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Form.Row>
        </Form>
      </div>
    ) : (
      <div>
        <h2> Weight </h2>
        <Form>
          <Form.Row>
            <Container>
              <Row>
                <Col></Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Kilograms</Form.Label>
                    <Form.Control
                      type="number"
                      value={
                        this.props.weightInKilogram === null
                          ? ""
                          : this.props.weightInKilogram
                      }
                      onChange={this.props.onWeightInKilogramChange}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default WeightInputBoard;
