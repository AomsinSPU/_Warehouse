import { useState, useEffect } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { BsBell, BsX, BsFillBoxFill } from "react-icons/bs";
import {
  FaRedoAlt,
  FaCheckCircle,
  FaUserFriends,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoBagAddSharp, IoLocation } from "react-icons/io5";
import Logo from "../../../public/Logo/metthier logo without tg-01.png";
import Avatar from "../../../public/Image/avatar.png";
import "./Navbar.css";

function Navbar({ role, name, setToken }) {
  // ของนาย
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // ฟังก์ชันเพื่อปิด dropdown เมื่อคลิกลิงก์
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // ของนาย

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const isMatch = (pattern) =>
    matchPath(
      {
        path: pattern,
        end: true,
      },
      location.pathname
    );

  // State สำหรับการแจ้งเตือน
  const [notifications, setNotifications] = useState([]);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Mock ข้อมูลแจ้งเตือน
  useEffect(() => {
    const sampleNotifications = [
      {
        id: 1,
        type: "รับเข้า",
        message: "รายการรับสินค้า 20 รายการ",
        number: "หมายเลขรายการ #0123",
        date: "วันจันทร์, 21 ตุลาคม 2024",
        time: "18:00",
        check: <FaCheckCircle />,
        icon: <IoBagAddSharp />,
      },
      {
        id: 2,
        type: "เบิกออก",
        message: "รายการเบิกสินค้า 20 รายการ",
        number: "หมายเลขรายการ #0123",
        date: "วันจันทร์, 21 ตุลาคม 2024",
        time: "18:00",
        check: <FaCheckCircle />,
        icon: <BsFillBoxFill />,
      },
      {
        id: 3,
        type: "ส่งคืน",
        message: "รายการคืนสินค้า 20 รายการ",
        number: "หมายเลขรายการ #0123",
        date: "วันจันทร์, 21 ตุลาคม 2024",
        time: "18:00",
        check: <FaCheckCircle />,
        icon: <FaRedoAlt />,
      },
    ];
    setNotifications(sampleNotifications);
  }, []);

  // Toggle เปิด/ปิด Notification Popup
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo ด้านซ้าย */}
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} alt="Metthier Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* เมนูตรงกลาง */}
        <div className="navbar-center">
          {role === "user" && (
            <>
              <Link
                to="/picking"
                className={`nav-link ${
                  isActive("/picking") ||
                  isActive("/picking/") ||
                  isActive("/cart") ||
                  isActive("/registration") ||
                  isMatch("/productx/:productId") ||
                  isMatch("/picking/:categoryId") ||
                  isMatch("/category/:categoryId")
                    ? "active"
                    : ""
                }`}
              >
                เบิกสินค้า
              </Link>
              <Link
                to="/historyuser"
                className={`nav-link ${
                  isActive("/historyuser") ? "active" : ""
                }`}
              >
                ประวัติการเบิก
              </Link>
              <Link
                to="/location"
                className={`nav-link ${isActive("/location") ? "active" : ""}`}
              >
                สถานที่
              </Link>
            </>
          )}

          {(role === "admin" || role === "superadmin") && (
            <>
              <Link
                to="/search"
                className={`nav-link ${
                  isActive("/") ||
                  isActive("/search") ||
                  isActive("/category") ||
                  isActive("/category/") ||
                  isMatch("/category/:categoryId") ||
                  isMatch("/product/:productId") ||
                  isMatch("/editproduct/:productId")
                    ? "active"
                    : ""
                }`}
              >
                ค้นหาสินค้า
              </Link>
              <div className="dropdown">
                <Link
                  to="#"
                  className={`nav-link ${
                    isActive("/checkthewithdrawallist") ||
                    isActive("/receive") ||
                    isActive("/picking") ||
                    isActive("/picking/") ||
                    isActive("/cart") ||
                    isActive("/registration") ||
                    isActive("/return") ||
                    isActive("/CheckReturn") ||
                    isMatch("/productx/:productId") ||
                    isMatch("/picking/:categoryId") ||
                    isMatch("/category/:categoryId")
                      ? "active"
                      : ""
                  }`}
                >
                  จัดการคลัง ▾
                </Link>
                <div className="dropdown-content">
                  <Link to="/registration">ลงทะเบียนสินค้า</Link>
                  <Link to="/receive">รับสินค้า</Link>
                  <Link to="/picking">เบิกสินค้า</Link>
                  <Link to="/return">คืนสินค้า</Link>
                  <Link to="/checkthewithdrawallist">ตรวจสอบรายการเบิก</Link>
                </div>
              </div>

              <Link
                to="/report"
                className={`nav-link ${
                  isActive("/report") || isActive("/report2") ? "active" : ""
                }`}
              >
                สรุปรายงาน
              </Link>
              <Link
                to="/history"
                className={`nav-link ${isActive("/history") ? "active" : ""}`}
              >
                ประวัติรายการ
              </Link>
              <Link
                to="/location"
                className={`nav-link ${isActive("/location") ? "active" : ""}`}
              >
                สถานที่
              </Link>
            </>
          )}
        </div>

        {/* ไอคอนด้านขวา */}
        <div className="navbar-right">
          <button className="icon-button"></button>

          {/* Notification Bell */}
          <div className="notification-wrapper">
            {(role === "admin" || role === "superadmin") && (
              <>
                <button className="icon-button" onClick={toggleNotification}>
                  <BsBell />
                  {notifications.length > 0 && (
                    <span className="notification-count">
                      {notifications.length}
                    </span>
                  )}
                </button>
                {isNotificationOpen && (
                  <div className="notification-popup">
                    <div className="popup-header">
                      <h4>ข้อความแจ้งเตือน</h4>
                      <button
                        className="close-button"
                        onClick={toggleNotification}
                      >
                        <BsX />
                      </button>
                    </div>
                    <ul>
                      {notifications.map((note) => (
                        <li key={note.id}>
                          <div className="notification-icon">{note.icon}</div>
                          <div className="notification-content">
                            <span className="notification-date">
                              {note.date}
                            </span>
                            <span className="notification-message">
                              {note.message}
                            </span>
                            <span className="notification-number">
                              {note.number}
                            </span>
                          </div>
                          <div className="notification-time">
                            {note.time}
                            <div className="notification-check">
                              {note.check}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          {/* User Profile */}
          <div className="user-profile">
            <img src={Avatar} alt="Profile" className="profile-pic" />
            <div className="user-info">
              <div className="username">
                คุณธารา บัณฑิตย์&nbsp;
                <button className="icon-button1" onClick={toggleDropdown}>
                  <i className="bi bi-chevron-down"></i>
                </button>
              </div>
              <div className="rank">
                ตำแหน่ง:&nbsp;
                {role === "superadmin"
                  ? "ผู้ดูแลระบบสูงสุด"
                  : role === "admin"
                  ? "ผู้จัดการคลัง"
                  : "ผู้ใช้งาน"}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ของนาย */}
      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="dropdown-new-card">
          <NewCard
            closeDropdown={closeDropdown}
            role={role}
            setToken={setToken}
          />
        </div>
      )}
      {/* ของนาย */}
    </nav>
  );
}
function NewCard({ closeDropdown, role, setToken }) {
  return (
    <div className="new-card" style={{ position: "relative" }}>
      <img
        src={Avatar}
        alt="Profile"
        className="profile-pic"
        style={{ marginTop: "10px" }}
      />
      <br />
      <h2>คุณธารา บัณฑิตย์</h2>
      <span style={{ fontSize: "12px", color: "#555" }}>
        {role === "superadmin"
          ? "ผู้ดูแลระบบสูงสุด"
          : role === "admin"
          ? "ผู้จัดการคลัง"
          : "ผู้ใช้งาน"}
      </span>
      <br />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{ height: "1px", backgroundColor: "#ccc", width: "100%" }}
        ></div>
        {role === "superadmin" && (
          <>
            <Link
              to="/Page1"
              className="link"
              style={{ display: "flex", alignItems: "center" }}
              onClick={closeDropdown} // ปิด dropdown เมื่อคลิก
            >
              <FaUserFriends style={{ marginRight: "8px" }} />{" "}
              {/* ไอคอนข้างหน้า */}
              จัดการสิทธ์การใช้งาน
            </Link>
            <Link
              to="/Page2"
              className="link"
              style={{ display: "flex", alignItems: "center" }}
              onClick={closeDropdown} // ปิด dropdown เมื่อคลิก
            >
              <IoLocation style={{ marginRight: "8px" }} />{" "}
              {/* ไอคอนข้างหน้า */}
              เพิ่มสถานที่การจัดการ
            </Link>
          </>
        )}
      </div>

      <br />
      <br />
      {/* ปุ่มออกจากระบบ พร้อมไอคอน */}
      <button
        className="red-border-button"
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => setToken("")}
        // ปิด dropdown เมื่อคลิก
      >
        <FaSignOutAlt style={{ marginRight: "8px" }} />
        &nbsp;
        {/* ไอคอนออกจากระบบ */}
        ออกจากระบบ
      </button>
    </div>
  );
}

export default Navbar;
