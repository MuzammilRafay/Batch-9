/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TaskListing = (props) => {
  const { allTasks, setAllTasks } = props;

  const clearTaskHandler = (event) => {
    event.preventDefault();
    setAllTasks([]);
  };
  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input type="text" name="filter" id="filter" />
        <label>Filter Task</label>
      </div>
      <ul className="collection">
        {allTasks.map((singleTask, index) => {
          return (
            <li className="collection-item">
              {singleTask}
              <a
                href="#"
                className="delete-item secondary-content"
                onClick={(e) => {
                  e.preventDefault();

                  const copyTask = [...allTasks];
                  copyTask.splice(index, 1);
                  setAllTasks(copyTask);
                }}
              >
                <i className="fa fa-remove"></i>
              </a>
            </li>
          );
        })}
      </ul>
      <a href="#" className="clear-tasks btn black" onClick={clearTaskHandler}>
        Clear Tasks
      </a>
    </div>
  );
};

export default TaskListing;
