import React, { Component } from "react";

class GameState extends Component {
  state = {
    mode: "splash",
    round: 0,
    players: [],
    answerReveal: false,
  };

  render() {
    return <div>This is the game state!</div>;
  }
}

function getMode() {
  return this.state.mode;
}

function startInitialConfig() {
  this.state = { mode: "initialConfig" };
}

function startGame() {
  this.state = { mode: "inGame" };
}

function startLobby() {
  this.state = { mode: "inLobby" };
}

function answerReveal() {
  this.state = { answerReveal: true };
}

function answerHide() {
  this.state = { answerReveal: false };
}

function endGame() {
  this.state = { mode: "gameOver" };
}

export default GameState;
