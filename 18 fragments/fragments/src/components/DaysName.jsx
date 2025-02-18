const DaysName = (props) => {
  // let daysnames = [];

  return (
    <ul className="list-group">
      {props.daysN.map((day, index) => (
        <li key={index} className="list-group-item kg-item">
          <span className="kg-span">{day}</span>
        </li>
      ))}
    </ul>
  );
};
export default DaysName;
