import React, { Component } from "react";
import GameButton from "../GameButton/GameButton";
import { BrowserRouter as Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <GameButton size="lg" variant="primary" name="Splash Screen" />
        </Link>
        <GameButton size="lg" variant="success" name="Game Screen" />
        <GameButton size="lg" variant="warning" name="Lobby Screen" />
        <GameButton size="lg" variant="danger" name="End Screen" />
      </div>
    );
  }
}

export default NavBar;
