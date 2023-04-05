import { useState } from "react";
import Router from "./components/Router";

import "./style/style.css";

function App() {
  const [status, setStatus] = useState(1);

  function onSuccess() {
    setStatus(1);
  }
  function onFail() {
    setStatus(2);
  }
  return (
    <div className="App">
      <div className="App">
      {status === 0 && <p>Loading...⏱️</p>}
      {status === 1 && <Router />}
      {status === 2 && <p>Error...❌</p>}
    </div>
    </div>
  );
}

export default App;
