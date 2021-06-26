import logo from './cat3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bucket List - Interactive
        </h1>
        <h2>
        <code>Built in React</code>
        </h2>
      </header>
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my <code>first app</code> in React.
        </p>
        <a
          className="App-link"
          href="https://www.tripadvisor.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trip Advisor
        </a>
      </div>
    </div>
  );
}

export default App;
