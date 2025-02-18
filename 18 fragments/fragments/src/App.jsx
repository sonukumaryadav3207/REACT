import React from "react";
import DaysName from "./components/DaysName";
import ErrorMsgs from "./components/ErrorMsgs";
import "./App.css";
function App() {
  let daysnames = ["Fri", "Sat"];
  // let daysnames = [];

  return (
    <>
      <h1 className="heading">Holiday</h1>
      <ErrorMsgs daysN={daysnames}></ErrorMsgs>
      <DaysName daysN={daysnames}></DaysName>
    </>
  );
}

export default App;
