import SubjectButton from "../SubjectButton/SubjectButton";
import "./AttendList.scss";

const AttendList = ()=> {
    const subjects = [
      { id:1, name: "English" },
      { id:2, name: "Maths" },
      { id:3, name: "CSE111" },
      { id:4, name: "CSE002" },
      { id:5, name: "Religion" },
      { id:6, name: "Physics" },
    ];

    return (
      <div className="att-subjects-container">
        <h2>Subjects:</h2>
        <div className="buttons-container">
          {subjects.map((i) => (
            <SubjectButton key={i.id} name={i.name} />
          ))}
        </div>
      </div>
    );
}

export default AttendList;
