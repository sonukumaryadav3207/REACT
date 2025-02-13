import Appname from "./components/Appname";
import Clockbody from "./components/ClockBody";
import Clocktimer from "./components/Clocktimer";
import "./App.css"; 
function App() {
  return (
    <div className="container">
      <Appname></Appname>
      <Clockbody></Clockbody>
      <Clocktimer></Clocktimer>
    </div>
  );
}

export default App;
