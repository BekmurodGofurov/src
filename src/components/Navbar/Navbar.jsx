import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  let cTime = new Date().toString();
  const date = cTime.split(" ");
  const week = date[0];
  const month = date[1];
  const day = date[2];

  const currentTime = week + " " + month + " " + day;

  return (
    <div className="navbar-container">
      <Link to='/'>
        <div className="brand-name">AttendMe</div>
      </Link>
      <p className="time navbar-time">{currentTime}</p>
    </div>
  );
};

export default Navbar;
