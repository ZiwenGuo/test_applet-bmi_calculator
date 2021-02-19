import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HeightInputBoard extends React.Component {
  convertEngHeightToMet(ft, inch) {
    return (ft * 12 + inch) * 2.54;
  }

  render() {
    return this.props.useEngUnit ? (
      <div>
        <h2> Height </h2>
        <Form>
          <Form.Row>
            <Container>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Feet</Form.Label>
                    <Form.Control
                      id="height_ft"
                      type="number"
                      value={
                        this.props.heightInFoot === null
                          ? ""
                          : this.props.heightInFoot
                      }
                      onChange={this.props.onHeightInFootChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Inches</Form.Label>
                    <Form.Control
                      id="height_inch"
                      type="number"
                      value={
                        this.props.heightInInch === null
                          ? ""
                          : this.props.heightInInch
                      }
                      onChange={this.props.onHeightInInchChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form.Row>
        </Form>
      </div>
    ) : (
      <div>
        <h2> Height </h2>
        <Form>
          <Form.Row>
            <Container>
              <Row>
                <Col></Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>Centimeters</Form.Label>
                    <Form.Control
                      id="height_kg"
                      type="number"
                      value={
                        this.props.heightInCentimeter === null
                          ? ""
                          : this.props.heightInCentimeter
                      }
                      onChange={this.props.onHeightInCentimeterChange}
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

export default HeightInputBoard;
