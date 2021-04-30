import React, { useState } from "react";
import Task from "./Task";
import FilterTask from "./FilterTask";

function TodoList() {
  //the state array of objects managing the task list and checkboxes value
  const [taskList, setTaskList] = useState([]);
  //the input state
  const [inputValue, setInputValue] = useState("");
  //the filter task array state
  // const [filterTask, setFilterTask] = useState([...taskList]);
  const [filterValue, setFilterValue] = useState("");

  //adding the task to the list
  const handleAddTask = () => {
    setTaskList([...taskList, { text: inputValue, checked: false }]);
    setInputValue("");
  };

  //handle ability to add task using "enter" key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const filterTaskList = (array) => {
    const newTab = array.filter((item) => item.text.includes(filterValue));

    return newTab;
  };

  // console.log(filterTask);
  return (
    <main>
      <FilterTask
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        taskList={taskList}
      />
      <div
        className={
          filterTaskList(taskList).length > 0 ? "task-list" : "task-list hidden"
        }
      >
        {filterTaskList(taskList)
          // .sort((item, nextItem) => {
          //   if (item.checked) {
          //     return 1;
          //   } else return -1;
          // })
          .map((item, index) => (
            <Task
              key={index}
              text={item.text}
              checked={item.checked}
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
