import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

class UnitSwitch extends React.Component {
  render() {
    return this.props.useEngUnit ? (
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Eng Unit"
        onChange={this.props.onChange}
      />
    ) : (
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Met Unit"
        onChange={this.props.onChange}
      />
    );
  }
}

export default UnitSwitch;
