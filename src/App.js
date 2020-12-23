import "./App.css";
import GameButton from "./components/GameButton/GameButton";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <GameButton size="lg" variant="primary" name="Splash Screen" />
      <GameButton size="lg" variant="success" name="Game Screen" />
      <GameButton size="lg" variant="warning" name="Lobby Screen" />
      <GameButton size="lg" variant="danger" name="End Screen" />
      <br /> <AnotherRoundButton />
      <Routes />
    </div>
  );
}

export default App;
