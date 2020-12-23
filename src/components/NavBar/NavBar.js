import React, { Component } from "react";
import GameButton from "../GameButton/GameButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return (
        <div className="nav">
          <Link to="/">
            <GameButton size="lg" variant="primary" name="Splash Screen" />
          </Link>
          <Link to="/game">
            <GameButton size="lg" variant="success" name="Game Screen" />
          </Link>
          <Link to="/lobby">
            <GameButton size="lg" variant="warning" name="Lobby Screen" />
          </Link>
          <Link to="/end">
            <GameButton size="lg" variant="danger" name="End Screen" />
          </Link>
        </div>
      );
    } else return <span></span>;
  }
}

export default NavBar;
