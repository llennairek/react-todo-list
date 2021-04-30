import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

// IMPORTING FONT AWESOME ICONS
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faListAlt, faTrashAlt);

function App() {
  return (
    <div>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
