import { useEffect, useState } from "react";
import "./GruopList.scss";
import axios from "axios";
//to do 
const week_list = ["Mon", "Tue", "Wen", "Thu", "Fri"];

const AttTable = () => {
  let cTime = new Date().toString();
  const date = cTime.split(" ");
  const week = date[0];
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const parsedData = JSON.parse(userInfo);
      const data = parsedData;
      setUser(data);
    }
  }, []);
  const [groupMates, setGroupMates] = useState(null);

  const handleFindUsers = async () => {
    try {
      const res = await axios.post("http://localhost:9999/api/group-data");
      setGroupMates(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleWeek = setInterval(() => {
    const el = document.getElementById(week);
    if (el) {
      clearInterval(handleWeek);
      el.style.backgroundColor = "#ff5722";
    }
  }, 1000);

  const handleUserLine = setInterval(() => {
    const el = document.getElementById(user?.name);
    if (el) {
      clearInterval(handleUserLine);
      el.style.backgroundColor = "#f3f3f3";
    }
  }, 100);

  handleFindUsers();

  let n = 0;
  return (
    <div className="att-table-container">
      <div className="data-container">
        <div className="table-line-header-container" key={n++}>
          <p className="number">№</p>
          <p className="line-name">Name</p>
          <p className="line-surname">Surname</p>
          {week_list.map((i) => (
            <p className="week-day" key={i} id={i} on>
              {i}
            </p>
          ))}
        </div>
        {groupMates?.map((i) => (
          <div className="table-line-container" key={n++} id={i?.name}>
            <p className="number">{n}</p>
            <p className="line-name">{i.name} </p>
            <p className="line-surname">{i.surname}</p>
            <p className="checks"></p>
            <p className="checks"></p>
            <p className="checks"></p>
            <p className="checks"></p>
            <p className="checks"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttTable;
