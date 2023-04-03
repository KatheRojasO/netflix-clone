import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Browse from "./pages/Browse";

import "./style/style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Browse />
      </BrowserRouter>
    </div>
  );
}

export default App;
