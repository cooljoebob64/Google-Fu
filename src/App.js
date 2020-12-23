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
      <GameButton name="Start Game" />
      <Routes />
    </div>
  );
}

export default App;
