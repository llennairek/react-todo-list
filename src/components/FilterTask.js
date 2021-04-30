function FilterTask({ filterValue, setFilterValue, taskList }) {
  const handleChange = (event) => {
    setFilterValue(event.target.value);
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
