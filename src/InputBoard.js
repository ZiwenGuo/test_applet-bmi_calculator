import React from "react";
import "./index.css";
import UnitSwitch from "./UnitSwitch";
import HeightInputBoard from "./HeightInputBoard";
import WeightInputBoard from "./WeightInputBoard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class InputBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useEngUnit: this.props.useEngUnit,
      heightInInch: null,
      heightInFoot: null,
      heightInCentimeter: null,
      weightInPound: null,
      weightInKilogram: null,
    };
  }

  handleUnitChange(prevUseEngUnit) {
    if (prevUseEngUnit) {
      let cm = null;
      let kg = null;
      if (
        this.state.heightInInch !== null &&
        this.state.heightInFoot !== null
      ) {
        const ft = Number(this.state.heightInFoot);
        const inch = Number(this.state.heightInInch);
        cm = (ft * 12 + inch) * 2.54;
      }
      if (this.state.weightInPound !== null) {
        kg = 0.453592 * Number(this.state.weightInPound);
      }
      this.setState({
        useEngUnit: !prevUseEngUnit,
        heightInInch: null,
        heightInFoot: null,
        heightInCentimeter: cm,
        weightInPound: null,
        weightInKilogram: kg,
      });
    } else {
      let inch = null;
      let ft = null;
      let lb = null;
      if (this.state.heightInCentimeter !== null) {
        inch = Number(this.state.heightInCentimeter) * 0.3937;
        ft = Math.floor(inch / 12);
        inch = inch - ft * 12;
      }
      if (this.state.weightInKilogram !== null) {
        lb = Number(this.state.weightInKilogram * 2.20462);
      }
      this.setState({
        useEngUnit: !prevUseEngUnit,
        heightInInch: inch,
        heightInFoot: ft,
        heightInCentimeter: null,
        weightInPound: lb,
        weightInKilogram: null,
      });
    }
  }

  handleHeightInFootChange(event) {
    this.setState({
      heightInFoot: event.target.value,
    });
  }

  handleHeightInInchChange(event) {
    this.setState({
      heightInInch: event.target.value,
    });
  }

  handleHeightInCentimeterChange(event) {
    this.setState({
      heightInCentimeter: event.target.value,
    });
  }

  handleWeightInPoundChange(event) {
    this.setState({
      weightInPound: event.target.value,
    });
  }

  handleWeightInKilogramChange(event) {
    this.setState({
      weightInKilogram: event.target.value,
    });
  }

  calculateBMI() {
    if (this.props.calculateBMI) {
      this.props.calculateBMI(this.state);
    }
  }

  shouldDisableCalculateButton() {
    if (this.state.useEngUnit) {
      return (
        Number(this.state.heightInInch) +
          Number(this.state.heightInFoot) * 12 <=
          0 || Number(this.state.weightInPound) <= 0
      );
    } else {
      return (
        Number(this.state.heightInCentimeter) <= 0 ||
        Number(this.state.weightInKilogram) <= 0
      );
    }
  }

  reset() {
    this.setState({
      heightInInch: null,
      heightInFoot: null,
      heightInCentimeter: null,
      weightInPound: null,
      weightInKilogram: null,
    });
    if (this.props.resetBMI) {
      this.props.resetBMI();
    }
  }

  render() {
    return (
      <div className="input-board">
        <h1> BMI Calculator </h1>
        <UnitSwitch
          useEngUnit={this.state.useEngUnit}
          onChange={this.handleUnitChange.bind(this, this.state.useEngUnit)}
        />
        <HeightInputBoard
          useEngUnit={this.state.useEngUnit}
          heightInFoot={this.state.heightInFoot}
          heightInInch={this.state.heightInInch}
          heightInCentimeter={this.state.heightInCentimeter}
          onHeightInFootChange={this.handleHeightInFootChange.bind(this)}
          onHeightInInchChange={this.handleHeightInInchChange.bind(this)}
          onHeightInCentimeterChange={this.handleHeightInCentimeterChange.bind(
            this
          )}
        />
        <WeightInputBoard
          useEngUnit={this.state.useEngUnit}
          weightInPound={this.state.weightInPound}
          weightInKilogram={this.state.weightInKilogram}
          onWeightInPoundChange={this.handleWeightInPoundChange.bind(this)}
          onWeightInKilogramChange={this.handleWeightInKilogramChange.bind(
            this
          )}
        />
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Button
                onClick={this.calculateBMI.bind(this)}
                disabled={this.shouldDisableCalculateButton()}
              >
                {" "}
                Calculate{" "}
              </Button>
            </Col>
            <Col>
              <Button onClick={this.reset.bind(this)}> Reset </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default InputBoard;
