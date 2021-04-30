import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Task({ text, index, taskList, setTaskList, checked }) {
  //called when the trash is clicked, remove the task from the tasklist
  const handleRemove = () => {
    const newTab = [...taskList];
    newTab.splice(index, 1);
    setTaskList(newTab);
  };

  //caled when the checkbox is checked
  const handleCheck = () => {
    const newTab = [...taskList];
    newTab[index].checked = !checked;
    newTab.sort((item, nextItem) => {
      if (item.checked && nextItem.checked) {
        return 0;
      } else if (item.checked && !nextItem.checked) {
        return 1;
      } else if (!item.checked && !nextItem.checked) {
        return 0;
      } else {
        return -1;
      }
    });
    setTaskList(newTab);
  };

  return (
    <div className="task">
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <span className={checked ? "strike-through" : null}>{text}</span>
      <FontAwesomeIcon icon="trash-alt" onClick={handleRemove} />
    </div>
  );
}

export default Task;
