import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  const increaseNumber = () => {
    setCount(count + 1);
    if (count > 0) {
      setColor("#73E31A");
    } else if (count < 0) {
      setColor("#FC2510");
    }
  };

  const decreaseNumber = () => {
    setCount(count - 1);
    if (count < 0) {
      setColor("#FC2510");
    } else if (count > 0) {
      setColor("#73E31A");
    }
  };

  const resetNumber = () => {
    setCount(0);
    if (count === 0) {
      setColor("white");
    }
  };

  return (
    <div className="App">
      <main className="App-header">
        <div className="container">
          <h3>Counter</h3>
          <h1 style={{ color: `${color}` }}>{count}</h1>
          <div>
            <button onClick={increaseNumber}>INCREASE</button>
            <button onClick={decreaseNumber}>DECREASE</button>
            <button onClick={resetNumber}>RESET</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
