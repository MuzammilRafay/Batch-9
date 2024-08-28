import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskListing from "./components/TaskListing/TaskListing";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <TaskForm allTasks={allTasks} setAllTasks={setAllTasks} />
            </div>
            <TaskListing allTasks={allTasks} setAllTasks={setAllTasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
