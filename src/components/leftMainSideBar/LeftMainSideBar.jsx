import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftMainSideBar.scss";

const btnList = [
  { name: "Home", page: "/" },
  { name: "Time-Table", page: "/time-table" },
  { name: "Students List", page: "/students-list" },
];

const LeftMainSideBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const parsedData = JSON.parse(userInfo);
      const data = parsedData;
      setUser(data);
    }
  }, []);

  return (
    <div className="left-main-side-bar">
      <div className="user-info">
        <h1>Bekmurod</h1>
        <h2>G'ofurov</h2>
      </div>
      <br />
      <div className="nav-btn">
        {btnList.map((i) => (
          <Link to={i.page} key={i.name}>
            <button className="nav-btn">{i.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftMainSideBar;
