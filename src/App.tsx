import React from "react";
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