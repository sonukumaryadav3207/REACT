import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Groceries",
      duedate: "2025-02-20",
    },
    {
      name: "Build React Project",
      duedate: "2025-02-20",
    },
    {
      name: "Laern Node Also",
      duedate: "2025-02-20",
    },
  ];
  return (
    <center className="container">
      <Appname></Appname>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
