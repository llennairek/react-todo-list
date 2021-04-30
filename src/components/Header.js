import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ theme, setTheme }) {
  const handleClick = () => {
    if (theme === "theme-light") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  };
  return (
    <header>
      <FontAwesomeIcon icon="list-alt" />
      <h1>Todo List</h1>
      <div
        className={theme === "theme-light" ? "theme" : "theme isActive"}
        onClick={handleClick}
      ></div>
    </header>
  );
}

export default Header;
