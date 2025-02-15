import React from "react";
import DaysName from "./components/FoodItems";
function App() {
  let daysnames = [];
  // let daysnames = ["Fri", "Sat"];
  // if (daysnames.length === 0) {
  //   return <h1>WORK ALL DAY, YOU ARE A SLAVE</h1>;
  // }

  // let workdays =
  //   daysnames.length === 0 ? <h3>WORK ALL DAY, YOU ARE A SLAVE</h3> : null;

  return (
    <>
      <h1>Holiday</h1>
      {daysnames.length === 0 && <h3>WORK ALL DAY, YOU ARE A SLAVE '_' </h3>}
      <DaysName></DaysName>
    </>
  );
}

export default App;
