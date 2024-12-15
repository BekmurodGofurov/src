import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaUser } from "react-icons/fa"; // Ikonkalar
import "./LeftMainSideBar.scss";

const btnList = [
  { name: "Home", page: "/", icon: <FaHome /> },
  { name: "Time-Table", page: "/time-table", icon: <FaCalendarAlt /> },
  { name: "Group List", page: "/students-list", icon: <FaUser /> },
];

const LeftMainSideBar = () => {
  return (
    <div className="sidebarContainer">
      <div className="left-main-side-bar">
        <div className="user-info">
          <h1>Bekmurod</h1>
          <h2>G'ofurov</h2>
        </div>
        <div className="nav-btn">
          {btnList.map((i) => (
            <Link to={i.page} key={i.name} className="nav-item">
              <span className="icon">{i.icon}</span>
              <span className="text">{i.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftMainSideBar;
