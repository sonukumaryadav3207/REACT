import style from "./Button.module.css";
const ButtonContainer = () => {
  const buttonsnames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={style.buttoncontainer}>
      {buttonsnames.map(buttonName =>  <button className={style.button}>{buttonName}</button>)}
     
    </div>
  );
};

export default ButtonContainer;
