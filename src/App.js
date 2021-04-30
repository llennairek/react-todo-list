import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import { useState } from "react";

// IMPORTING FONT AWESOME ICONS
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faListAlt, faTrashAlt);

function App() {
  const [theme, setTheme] = useState("theme-dark");

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
