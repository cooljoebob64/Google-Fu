import React, { Component } from "react";
import WinnerSelector from "../WinnerSelector/WinnerSelector";

class GamePage extends Component {
  render() {
    return (
      <div>
        This is the actual game!! <br />
        <p>Here is a random fact:</p>
        <p>What is the height of Mt Fuji in Feet?</p>
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
