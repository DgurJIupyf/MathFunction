import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./New.css";
import {ReadyPanel} from "./components/NewPanel.js";
import {Page} from "./StartBigFile";


function App() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <ReadyPanel />
        <Page
          addA = {a}
          onInputA = {event => setA(event.target.value)}
          addB = {b}
          onInputB = {event => setB(event.target.value)}
          addC = {c}
          onInputC = {event => setC(event.target.value)}
        ></Page>
        {console.log(a)}
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

export default App;
