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
      <Routes />
    </div>
  );
}

export default App;
