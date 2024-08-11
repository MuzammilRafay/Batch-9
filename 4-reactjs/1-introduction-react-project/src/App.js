import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    // count = count + 1;
    setCount(count + 1);
    console.log(count, "clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Count: {count}</p>
        <button onClick={incrementHandler}>Increment</button>
      </header>
    </div>
  );
}

export default App;
