import React from "react";
import "./App.css";
import { CalculatorPage } from "./pages";

const App = () => {
  return (
    <div className="App">
      <ErrorMessage/>
      <CalculatorPage />
    </div>
  );
};

export default App;
