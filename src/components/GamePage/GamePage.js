import React, { Component } from "react";
import RandomFact from "../RandomFact/RandomFact";
import WinnerSelector from "../WinnerSelector/WinnerSelector";

class GamePage extends Component {
  render() {
    return (
      <div>
        This is the actual game!! <br />
        <br />
        <br />
        <RandomFact />
        <br />
        <br />
        <p>(Will reveal the answer here shortly!)</p>
        <WinnerSelector name={"Player 1"} />
        <span> </span>
        <WinnerSelector name="Player 2" />
        <br />
      </div>
    );
  }
}
export default GamePage;
