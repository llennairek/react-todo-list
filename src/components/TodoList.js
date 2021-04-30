import React, { useState } from "react";
import Task from "./Task";

function TodoList() {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    setTaskList([...taskList, inputValue]);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <main>
      <div className={taskList.length > 0 ? "task-list" : "task-list hidden"}>
        {taskList.map((item, index) => (
          <Task
            key={index}
            text={item}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
      <div className="add-task">
        <input
          type="text"
          name="new-task"
          id="new-task"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </main>
  );
}

export default TodoList;
