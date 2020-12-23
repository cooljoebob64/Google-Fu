import logo from "./logo.svg";
import "./App.css";
import GameButton from "./components/GameButton/GameButton";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";
import { Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <GameButton />
      <AnotherRoundButton />
      <GameButton size="lg" variant="warning" name="Start Game" margin-left/>
      <GameButton size="lg" variant="warning" name="End Game" margin-left />
      <GameButton size="lg" variant="warning" name="Change Category" margin-left/>
      <Routes />
    </div>
  );
}

export default App;
