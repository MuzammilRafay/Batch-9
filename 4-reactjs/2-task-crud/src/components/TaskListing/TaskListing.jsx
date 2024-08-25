/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TaskListing = (props) => {
  const { allTasks } = props;
  return (
    <div className="card-action">
      <h5 id="task-title">Tasks</h5>
      <div className="input-field col s12">
        <input type="text" name="filter" id="filter" />
        <label>Filter Task</label>
      </div>
      <ul className="collection">
        {/* <li className="collection-item">
          List Item
          <a href="#" className="delete-item secondary-content">
            <i className="fa fa-remove"></i>
          </a>
        </li> */}
      </ul>
      <a href="#" className="clear-tasks btn black">
        Clear Tasks
      </a>
    </div>
  );
};

export default TaskListing;
