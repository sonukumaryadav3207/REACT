const DaysName = () => {
  let daysnames = [];
  return (
    <ul className="list-group">
      {daysnames.map((day) => (
        <li key={day} className="list-group-item">
          {day}
        </li>
      ))}
    </ul>
  );
};
export default DaysName;
