import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AnotherRoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not Named",
    };
  }

  render() {
    return <Button>{this.state.name}</Button>;
  }
}

export default AnotherRoundButton;