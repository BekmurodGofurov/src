import { useEffect, useState } from "react";
import "./LeftMainSideBar.scss";

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
        <h1>{user?.name}</h1>
        <h2>{user?.surname}</h2>
      </div>
    </div>
  );
};

export default LeftMainSideBar;
