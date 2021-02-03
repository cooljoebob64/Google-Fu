import React, { Component } from "react";
import GameButton from "../GameButton/GameButton";
import RandomFact from "../RandomFact/RandomFact";
import WinnerSelector from "../WinnerSelector/WinnerSelector";

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = { revealed: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      revealed: !state.revealed,
    }));
    console.log("Answer revealed!");
  }

  render() {
    return (
      <div>
        <RandomFact revealed={this.state.revealed} />
        <span onClick={this.handleClick}>
          <GameButton
            name={this.state.revealed ? "Hide Answer" : "Reveal Answer"}
          />
        </span>
        <br />
        <br />
        <WinnerSelector name="Player 1" />
        <span> </span>
        <WinnerSelector name="Player 2" />
        <br />
      </div>
    );
  }
}
export default GamePage;
