function ToDoItem() {
  let todoname = "React";
  let todoadte = "4/10/2025";
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-sm-4">{todoname}</div>
        <div class="col-sm-4">{todoadte}</div>
        <div class="col-sm-2">
          <button class="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
