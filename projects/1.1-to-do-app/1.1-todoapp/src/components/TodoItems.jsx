import TodoItem from "./TodoItem";
const TodoItems = (todoItems) => {
  return (
    <div className="items-container">
      <TodoItem todoName="Buy Groceries" todoDate="2025-02-20"></TodoItem>
      <TodoItem todoName="Build React Project" todoDate="2025-02-20"></TodoItem>
      <TodoItem todoName="Buy Groceries" todoDate="2025-02-20"></TodoItem>
    </div>
  );
};

export default TodoItems;
