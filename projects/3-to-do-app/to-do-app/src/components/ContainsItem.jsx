import TodoItem from "./TodoItem";
import styles from "./ContainsItem.module.css";
const ContainsItem = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.id} todoName={item.name} todoDate={item.duedate} />
      ))}
    </div>
  );
};

export default ContainsItem;
