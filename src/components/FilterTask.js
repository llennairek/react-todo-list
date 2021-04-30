import React, { useState } from "react";

function FilterTask({ filterValue, setFilterValue, taskList }) {
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleClick = () => {
    const newTab = [...taskList].filter((item) => {
      return item.text.includes(filterValue);
    });
    // setFilterTask(newTab);
  };

  return (
    <div className="filter">
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Type here to filter your tasks"
      />
    </div>
  );
}

export default FilterTask;
