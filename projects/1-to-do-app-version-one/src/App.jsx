import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";
import "./App.css";
function App() {
  return (
    <center className="container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <TodoItem todoDate="4/10/2025" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="5/10/2025" todoName="Go to college"></TodoItem>
      </div>
    </center>
  );
}

export default App;
