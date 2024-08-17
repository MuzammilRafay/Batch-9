import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DisplayCount from "./components/DisplayCount/DisplayCount";
function App() {
  let countTwo = 0;
  const [count, setCount] = useState(0); // [getValue,setValue]

  const incrementHandler = () => {
    // countTwo = countTwo + 1;
    setCount(count + 1);
    console.log(count, "clicked");
    // console.log(countTwo, "clicked");
  };
  return (
    <div className="App">
      <header className="App-header">
        <DisplayCount count={count} countTwo={countTwo} />
        <button onClick={incrementHandler}>Increment</button>
      </header>
    </div>
  );
}

export default App;
