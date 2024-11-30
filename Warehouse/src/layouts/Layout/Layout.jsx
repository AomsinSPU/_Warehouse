import { Outlet } from "react-router";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Layout.css";

function layout({ role, name, setToken }) {
  return (
    <div className="layout-container">
      <div className="navbar">
        <Navbar role={role} name={name} setToken={setToken} />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default layout;
