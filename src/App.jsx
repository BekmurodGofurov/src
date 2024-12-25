import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Signup/Signup.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import DayTable from "./components/DayTable/DayTable.jsx";
import GroupList from "./components/GroupList/GroupLIst.jsx";
import AttendList from "./components/AttendList/AttendList.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <>404 not found</>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "time-table",
        element: <DayTable />,
      },
      {
        path: "students-list",
        element: <GroupList />,
      },
      {
        path: "attendes-list",
        element: <AttendList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <div className="root">
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </div>
  );
};

export default App;
