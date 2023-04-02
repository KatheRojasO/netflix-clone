import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
