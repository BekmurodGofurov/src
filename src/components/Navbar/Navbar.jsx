import "./Navbar.scss";

const Navbar = () => {
  let cTime = new Date().toString();
  const date = cTime.split(" ");
  const week = date[0];
  const month = date[1];
  const day = date[2];

  const currentTime = week + " " + month + " " + day;

  return (
    <div className="navbar-container">
      <a href="/">
        <div className="brand-name">AttendMe</div>
      </a>
      <p className="time navbar-time">{currentTime}</p>
    </div>
  );
};

export default Navbar;
