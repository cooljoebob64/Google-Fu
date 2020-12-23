import logo from "./logo.svg";
import "./App.css";
import GameButton from "./components/GameButton/GameButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <GameButton size="lg" variant="warning" name="Start Game" />
      <GameButton size="lg" variant="warning" name="End Game" />
      <GameButton size="lg" variant="warning" name="Change Category" />
      <Routes />
    </div>
  );
}

export default App;
