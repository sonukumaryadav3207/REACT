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

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <div className="container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        <ContainsItem todoItems={todoItems}></ContainsItem>
      </div>
    </center>
  );
}

export default App;
