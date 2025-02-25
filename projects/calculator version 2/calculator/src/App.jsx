import Display from "./components/Display";
import ButtonContanier from "./components/ButtonContainer";
import style from "./App.module.css";

function App() {
  return (
    <>
      <h1>Calculator</h1>
      <div className={style.calculator}>
        <Display></Display>
        <ButtonContanier></ButtonContanier>
      </div>
    </>
  );
}

export default App;
