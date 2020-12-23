import "./App.css";
import GameButton from "./components/GameButton/GameButton";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <AnotherRoundButton /> <br />
      <GameButton size="lg" variant="success" name="Start Game" />
      <GameButton size="lg" variant="warning" name="End Game" />
      <GameButton size="lg" variant="danger" name="Change Category" />
      <Routes />
    </div>
  );
}

export default App;
