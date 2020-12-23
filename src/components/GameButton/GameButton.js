import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class GameButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button size={this.props.size} variant={this.props.variant}>
        {this.props.name}
      </Button>
    );
  }
}

export default GameButton;
