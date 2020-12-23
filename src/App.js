import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <Routes />
      <AnotherRoundButton />
    </div>
  );
}

export default App;
