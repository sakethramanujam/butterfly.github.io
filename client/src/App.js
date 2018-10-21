<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
=======
import React, { Component } from 'react';
import MainLayout from './components/MainLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
>>>>>>> 3744964698c890d8aadd90004301c07a8a35e822
