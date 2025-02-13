import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";
function App() {
  const todoItema = [
    {
      name: "Buy Milk",
      duedate: "2017-",
    },
    {
      name: "Buy cheese",
      duedate: "2019-",
    },
  ];
  return (
    <center class="todo-container">
      <AppName></AppName>
      <div class="container text-center">
        <AddTodo></AddTodo>
        <TodoItem todoDate="4/10/2025" todoName="Buy Milk"></TodoItem>
        <TodoItem todoDate="5/10/2025" todoName="Go to college"></TodoItem>
      </div>
    </center>
  );
}

export default App;
