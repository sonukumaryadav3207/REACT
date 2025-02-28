const AddTodo = ({ onNewItem }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Enter ToDo here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
            onClick={() => onNewItem("a,b")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
