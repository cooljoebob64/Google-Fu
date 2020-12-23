import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";
import LobbyPage from "./components/LobbyPage/LobbyPage";
import EndPage from "./components/EndPage/EndPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <hr />
        <Route name="Home" exact path="/" component={HomePage} />
        <Route name="Game" exact path="/game" component={GamePage} />
        <Route name="Lobby" exact path="/lobby" component={LobbyPage} />
        <Route name="End" exact path="/end" component={EndPage} />
        <hr />
      </Router>
    );
  }
}
export default Routes;
