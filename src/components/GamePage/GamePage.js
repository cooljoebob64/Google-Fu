import React, { Component } from "react";
import WinnerSelector from "../WinnerSelector/WinnerSelector";

class GamePage extends Component {
  render() {
    return (
      <div>
        This is the actual game!!
        <WinnerSelector name="Player 1" />
        <WinnerSelector name="Player 2" />
      </div>
    );
  }
}
export default GamePage;
