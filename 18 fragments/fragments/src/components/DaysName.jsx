import styles from "./DaysName.module.css";
const DaysName = (props) => {
  // let daysnames = [];

  const handleButtonClick = (day, event) => {
    console.log(event);
    console.log(`${day} Applay Leave`);
  };
  return (
    <ul className="list-group">
      {props.daysN.map((day, index) => (
        <li key={index} className="list-group-item kg-item">
          <span className="kg-span">{day}</span>
          <button
            className={`${styles.button} btn btn-primary`}
            onClick={(event) => handleButtonClick(day, event)}
          >
            take leave
          </button>
        </li>
      ))}
    </ul>
  );
};
export default DaysName;
