import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PedigreePage } from "./Frontend/Pages/Pedigree/PedigreePage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      {/* //Replace with Router */}
      <header className="App-header">
        <ChakraProvider>
          <PedigreePage />
        </ChakraProvider>
      </header>
    </div>
  );
}

export default App;
