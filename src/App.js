import logo from "./logo.svg";
import "./App.css";
import GameButton from "./components/GameButton/GameButton";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";

function App() {
  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <GameButton />
      <AnotherRoundButton />
    </div>
  );
}

export default App;
