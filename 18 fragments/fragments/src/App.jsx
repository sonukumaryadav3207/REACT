import React from "react";
import DaysName from "./components/DaysName";
import ErrorMsgs from "./components/ErrorMsgs";
import Container from "./components/Container";
import DaysInput from "./components/DaysInput";
import "./App.css";
import Heading from "./Heading.jsx";
import { useState } from "react";
function App() {
  // let daysnames = ["Mon", "Tue", "Fri", "Sat"];
  // let daysnames = [];
  // let textStateArr = useState("Food Item Enterd by user");
  // let textToshow = textStateArr[0];
  // let changeTextArr = textStateArr[1];

  let [textToshow, changeTextArr] = useState();
  let [daysnames, setdaysName] = useState(["Mon", "Tue", "Fri", "Sat"]);
  // console.log(`Current value of textToshow:${textToshow}`);

  const OnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newDaysNames = event.target.value;
      event.target.value = "";
      let newDay = [...daysnames, newDaysNames];
      setdaysName(newDay);
      console.log("new days names: " + newDaysNames);
    }
    changeTextArr(event.target.value);
  };

  // const handleButtonClick = () => {
  //   console.log("clicked");
  // };

  return (
    <>
      <Container>
        <Heading />
        <ErrorMsgs daysN={daysnames}></ErrorMsgs>
        <DaysInput handlekeyDown={OnKeyDown}></DaysInput>
        <p>{textToshow}</p>
        <DaysName daysN={daysnames} leave={true}></DaysName>
      </Container>

      {/* <Container>
        <p>Above is the list of Holidays</p>
      </Container> */}
    </>
  );
}

export default App;
