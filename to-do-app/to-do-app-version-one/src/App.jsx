import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div className="items-container">
        <ToDoItem></ToDoItem>
      </div>
    </center>
  );
}

export default App;
