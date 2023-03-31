import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PedigreePage } from "./Frontend/Pages/Pedigree/PedigreePage";

function App() {
  return (
    <div className="App">
      {/* //Replace with Router */}
      <header className="App-header">
        <PedigreePage />
      </header>
    </div>
  );
}

export default App;


//first find whales with no parents. Place these in level 1