import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
        <Weather />
      </header>
      <footer>
        <a
          href="https://github.com/snbarnhouse/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open Source
        </a>{" "}
        Code by Stephanie Barnhouse
      </footer>
    </div>
  );
}

export default App;
