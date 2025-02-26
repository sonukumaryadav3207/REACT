import styles from "./FoodInput.module.css";
const DaysInput = ({ handlekeyDown }) => {
  //method
  // const handleOnchange = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <input
      type="text"
      placeholder="Enter Days here"
      className={styles.foodInput}
      onKeyDown={handlekeyDown}
    />
  );
};
export default DaysInput;
