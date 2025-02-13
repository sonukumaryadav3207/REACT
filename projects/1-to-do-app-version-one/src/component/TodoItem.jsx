function TodoItem({ todoName, todoDate }) {
  return (
    <div class="row">
      <div class="col-6">{todoDate}</div>
      <div class="col-4">{todoName}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
