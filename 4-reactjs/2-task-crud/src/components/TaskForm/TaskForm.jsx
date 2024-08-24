import React from "react";

const TaskForm = () => {
  return (
    <form id="task-form" action="">
      <div className="row">
        <div className="input-field col s12">
          <input type="text" name="task" id="task" />
          <label>New Task</label>
        </div>
      </div>
      <input type="submit" value="Add Task" className="btn" />
    </form>
  );
};

export default TaskForm;
