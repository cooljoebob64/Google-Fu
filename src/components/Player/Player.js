import React, { Component } from "react";

class Player extends Component {
  state = {
    name: "unnamed",
    score: 0,
  };

  constructor(props) {
    super(props);

    this.props.name ? (this.state = { name: this.props.name }) : "";
  }

  render() {
    return (
      <div>
        <div>Player Name: {this.state.name}</div>
        <div>Player Score: {this.state.score}</div>
      </div>
    );
  }
}

export default Player;
