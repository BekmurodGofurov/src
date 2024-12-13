import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import LeftMainSideBar from "../../components/leftMainSideBar/LeftMainSideBar.jsx";
import AttTable from "../../components/AttTable/AttTable.jsx";
import DayTable from "../../components/DayTable/DayTable.jsx";
import "./Homepage.scss";

const Homepage = () => {


  const navigate = useNavigate
  return (
    <div className="home-page-container">
      <div className="contains-navbar">
        <Navbar />
        <div className="line-horizontal-1px"></div>
      </div>
      <div className="line-vertical-1px"></div>
      <div className="contains-content">
        <div className="contains-left-side-bar">
          <LeftMainSideBar />
        </div>
        <div className="contains-main">
          <div className="day-table">
            <DayTable />
          </div>
          <div className="att-table">
            <AttTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
