import style from "./Display.module.css";
const Display = ({ dispalyValue }) => {
  return (
    <input
      type="text"
      name="display"
      className={style.display}
      value={dispalyValue}
      readOnly
    />
  );
};
export default Display;
