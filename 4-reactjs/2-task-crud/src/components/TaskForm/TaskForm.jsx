import React, { useState } from "react";

const TaskForm = (props) => {
  const { allTasks, setAllTasks } = props;
  const [taskInput, setTaskInput] = useState("");

  const taskInputHandler = (event) => {
    event.preventDefault();
    setTaskInput(event.target.value);
  };

  const taskFormSubmitHandler = (event) => {
    event.preventDefault();
    if (!taskInput) {
      alert("please fill the input field");
      return;
    }

    setAllTasks([...allTasks, taskInput]);

    setTaskInput("");
  };
  return (
    <form id="task-form" action="" onSubmit={taskFormSubmitHandler}>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            name="task"
            id="task"
            onChange={taskInputHandler}
            value={taskInput}
          />
          <label>New Task</label>
        </div>
      </div>
      <input type="submit" value="Add Task" className="btn" />
    </form>
  );
};

export default TaskForm;
