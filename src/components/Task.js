import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task({ text, index, taskList, setTaskList }) {
  const [checked, setChecked] = useState(false);

  const handleRemove = () => {
    const newTab = [...taskList];
    newTab.splice(index, 1);
    setTaskList(newTab);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span className={checked ? "strike-through" : null}>{text}</span>
      <FontAwesomeIcon icon="trash-alt" onClick={handleRemove} />
    </div>
  );
}

export default Task;
