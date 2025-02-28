import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ContainsItem from "./components/ContainsItem";
import "./App.css";
import { useState } from "react";

function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2022",
    },
  ];

  const [todoitems, setTodoItems] = useState("");

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`OnNewItem : ${itemName} Date: ${itemDueDate}`);
  };
  return (
    <center className="todo-container">
      <div className="container">
        z<AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        <ContainsItem todoItems={initialtodoItems}></ContainsItem>
      </div>
    </center>
  );
}

export default App;
