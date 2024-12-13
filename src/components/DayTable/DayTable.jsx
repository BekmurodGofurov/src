import "./DayTable.scss";

const subjects = [
  { name: "Maths", code: "MTH101", order: 1, starts: "9:00", ends: "9:55" },
  { name: "English", code: "ENG111", order: 2, starts: "10:00", ends: "10:55" },
  { name: "CSE111/CSE101", code: "CSE111/CSE101", order: 3, starts: "11:00", ends: "12:55" },
  { name: "Physics", code: "PGY111", order: 4, starts: "14:00", ends: "14:55" },
];

const DayTable = () => {
  return (
    <div className="day-table-container">
      <div className="data-container"></div>
    </div>
  );
};

export default DayTable;
