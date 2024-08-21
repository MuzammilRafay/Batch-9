import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import DisplayCount from "./components/DisplayCount/DisplayCount";

const tasks = [
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
  {
    name: "task one",
  },
];

function App() {
  let countTwo = 0;
  const [count, setCount] = useState(0); // [getValue,setValue]
  const [isShowCountBtn, setIsShowCountBtn] = useState(true);

  const incrementHandler = () => {
    // countTwo = countTwo + 1;
    setCount(count + 1);
    console.log(count, "clicked");
    // console.log(countTwo, "clicked");
  };

  useEffect(() => {
    //it will run on first render of the component
    console.log("first render");
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <DisplayCount count={count} countTwo={countTwo} />
        <br />
        {isShowCountBtn && (
          <button onClick={incrementHandler}>Increment</button>
        )}
        <br />

        <button
          onClick={() => {
            //true ko false kardega or false ko true kardega
            setIsShowCountBtn(!isShowCountBtn);
          }}
        >
          Show / Hide
        </button>

        {/* {tasks.map((singleTask) => {
          return <p>{singleTask.name}</p>;
        })} */}
      </header>
    </div>
  );
}

export default App;
