import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class OutputBoard extends React.Component {
  render() {
    let metrics = (
      <div>
        <table className="table">
          <tbody>
            <tr className="table-primary">
              <td>Underweight</td>
              <td>{"<18.5"}</td>
            </tr>
            <tr className="table-success">
              <td>Normal weight </td>
              <td>{"18.5–24.9"}</td>
            </tr>
            <tr className="table-warning">
              <td>Overweight</td>
              <td>{"25–29.9"}</td>
            </tr>
            <tr className="table-danger">
              <td>Obesity</td>
              <td>BMI of 30 or greater</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    let result = null;
    if (this.props.bmi !== null) {
      if (Number(this.props.bmi) < 18.5) {
        result = (
          <Card
            bg={"primary"}
            text={"white"}
            style={{ width: "60%", left: "20%" }}
            className="mb-2"
          >
            <Card.Header>BMI: {Number(this.props.bmi).toFixed(1)}</Card.Header>
            <Card.Body>
              <Card.Title>Underweight</Card.Title>
              <Card.Text>
                You are underweight. Try fitness app to stay healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      } else if (
        Number(this.props.bmi) >= 18.5 &&
        Number(this.props.bmi) <= 24.9
      ) {
        result = (
          <Card
            bg={"success"}
            text={"white"}
            style={{ width: "60%", left: "20%" }}
            className="mb-2"
          >
            <Card.Header>BMI: {Number(this.props.bmi).toFixed(1)}</Card.Header>
            <Card.Body>
              <Card.Title>Normal Weight</Card.Title>
              <Card.Text>
                You are normal weight. Try fitness app to stay healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      } else if (
        Number(this.props.bmi) > 24.9 &&
        Number(this.props.bmi) <= 29.9
      ) {
        result = (
          <Card
            bg={"warning"}
            text={"white"}
            style={{ width: "60%", left: "20%" }}
            className="mb-2"
          >
            <Card.Header>BMI: {Number(this.props.bmi).toFixed(1)}</Card.Header>
            <Card.Body>
              <Card.Title>Overweight</Card.Title>
              <Card.Text>
                You are overweight. Try fitness app to stay healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      } else {
        result = (
          <Card
            bg={"danger"}
            text={"white"}
            style={{ width: "60%", left: "20%" }}
            className="mb-2"
          >
            <Card.Header>BMI: {Number(this.props.bmi).toFixed(1)}</Card.Header>
            <Card.Body>
              <Card.Title>Obesity</Card.Title>
              <Card.Text>
                You are obesity. Try fitness app to stay healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }
    }
    return (
      <div>
        {metrics}
        {result}
      </div>
    );
  }
}

export default OutputBoard;
