import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import style from "./App.module.css";
function App() {
  return (
    <div className={style.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
