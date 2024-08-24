import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskListing from "./components/TaskListing/TaskListing";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div id="main" className="card">
            <div className="card-content">
              <span className="card-title">Task List</span>
              <TaskForm />
            </div>
            <TaskListing />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
