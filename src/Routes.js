import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";

class Routes extends Component {
  state = {
    legacyNavVisible: false,
  };

  render() {
    return (
      <div>
        <Router>
          <hr />
          <Route name="Home" exact path="/" component={HomePage} />
          <Route name="Game" exact path="/game" component={GamePage} />
          <hr />
        </Router>
      </div>
    );
  }
}
export default Routes;
