function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Enter To Do" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
