import React, { Component, useState } from "react";
import GameButton from "../GameButton/GameButton";

class WinnerSelector extends Component {
  state = {
    name: "not loaded",
  };

  constructor(props) {
    super(props);

    props.name
      ? (this.state.name = props.name)
      : (this.state.name = "no name provided");
  }

  render() {
    return (
      <div>
        <GameButton name={this.props.name} />
      </div>
    );
  }
}

export default WinnerSelector;
