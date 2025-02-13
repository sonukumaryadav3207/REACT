import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMsgs from "./component/ErrorMsgs";
function App() {
  let foodItems = ["Dal", "Green vegetables", "Rotiation", "Food", "Milk"];
  return (
    <React.Fragment>
      <h1 className="food-heading">Fragments</h1>
      <ErrorMsgs items={foodItems}></ErrorMsgs>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
