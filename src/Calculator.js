import React from "react";
import "./index.css";
import InputBoard from "./InputBoard";
import OutputBoard from "./OutputBoard";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: null,
    };
  }

  calculateBMI(data) {
    let cm, kg;
    if (data["useEngUnit"]) {
      cm =
        (Number(data["heightInFoot"]) * 12 + Number(data["heightInInch"])) *
        2.54;
      kg = Number(data["weightInPound"]) * 0.453592;
    } else {
      cm = Number(data["heightInCentimeter"]);
      kg = Number(data["weightInKilogram"]);
    }
    this.setState({
      bmi: kg / ((cm / 100) * (cm / 100)),
    });
  }

  resetBMI() {
    this.setState({
      bmi: null,
    });
  }

  render() {
    return (
      <div className="calculator">
        <InputBoard
          useEngUnit={true}
          calculateBMI={this.calculateBMI.bind(this)}
          resetBMI={this.resetBMI.bind(this)}
        />
        <br/>
        <OutputBoard bmi={this.state.bmi} />
      </div>
    );
  }
}

export default Calculator;
