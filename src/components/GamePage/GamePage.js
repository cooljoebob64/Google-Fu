import React, { Component } from "react";
import RandomFact from "../RandomFact/RandomFact";
import WinnerSelector from "../WinnerSelector/WinnerSelector";

class GamePage extends Component {
  state = { revealed: false };

  handleRevealAnswer() {
    this.setState({ revealed: true });
  }

  render() {
    return (
      <div>
        This is the actual game!! <br />
        <br />
        <br />
        <RandomFact revealed={this.state.revealed} />
        <p>Reveal status: {this.state.revealed.toString()}</p>
        <br />
        <br />
        <WinnerSelector onClick={this.handleRevealAnswer} name={"Player 1"} />
        <span> </span>
        <WinnerSelector onClick={this.handleRevealAnswer} name="Player 2" />
        <br />
      </div>
    );
  }
}
export default GamePage;
