import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://tamreportfolioproject.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tamika Englehart
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/tamika16/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted by{" "}
          <a
            href="https://tamika-reactdictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
