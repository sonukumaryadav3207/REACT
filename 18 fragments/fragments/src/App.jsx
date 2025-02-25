import React from "react";
import DaysName from "./components/DaysName";
import ErrorMsgs from "./components/ErrorMsgs";
import Container from "./components/Container";
import "./App.css";
import Heading from "./Heading.jsx";
function App() {
  let daysnames = ["Mon", "Tue", "Fri", "Sat"];
  // let daysnames = [];

  return (
    <>
      <Container>
        <Heading />
        <ErrorMsgs daysN={daysnames}></ErrorMsgs>
        <DaysName daysN={daysnames}></DaysName>
      </Container>

      {/* <Container>
        <p>Above is the list of Holidays</p>
      </Container> */}
    </>
  );
}

export default App;
