import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";
import Routes from "./Routes";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <NavBar />
      <AnotherRoundButton />
      <GameButton size="lg" variant="warning" name="Start Game" />
      <GameButton size="lg" variant="warning" name="End Game"  />
      <GameButton size="lg" variant="warning" name="Change Category"/>
      <Routes />
    </div>
  );
}

export default App;
