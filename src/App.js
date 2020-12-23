import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";
import Routes from "./Routes";
import RandomFact from "./components/RandomFact/RandomFact";

function App() {
  const debugMode = true;

  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <Routes debug={debugMode} />
      <AnotherRoundButton />
    </div>
  );
}

export default App;
