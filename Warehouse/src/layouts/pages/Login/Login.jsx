import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyUser } from "../../../data/users";

import { Form } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";

import Logo from "../../../../public/Image/Masterlogo.png";
import "./Login.css";

function Login({ setToken, setRole, setName }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // ใช้ useNavigate


  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage("กรุณาใส่ชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    const userInfo = verifyUser(username.trim(), password.trim());
    if (userInfo === null) {
      setErrorMessage("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    } else {
      setToken(userInfo.token);
      setRole(userInfo.role); 
      setName(userInfo.name);

      // กำหนดเส้นทางตาม role
      if (userInfo.role === "admin" || userInfo.role === "superadmin") {
        navigate(""); // เส้นทางสำหรับ admin
      } else if (userInfo.role === "user") {
        navigate("/picking"); // เส้นทางสำหรับ user
      }
    }
  };

  return (
    <div
      className="login-page"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      <div style={{ display: "flex" }}>
        <div className="login-form">
          <img src={Logo} alt="Logo" className="logo" />

          <div className="form-container">
            <div className="input-box">
              <Form.Label
                htmlFor="username"
                style={{ fontWeight: "bold", marginBottom: "20px" }}
              >
                เข้าสู่ระบบ
              </Form.Label>
              <div className="input-wrapper">
                <FaUser className="icon" />
                <Form.Control
                  type="text"
                  id="username"
                  placeholder="ชื่อผู้ใช้"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="input-box">
              <Form.Label htmlFor="password"></Form.Label>
              <div className="input-wrapper">
                <FaLock className="icon" />
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="input-box remember-me">
              <Form.Check type="checkbox" label="จำชื่อผู้ใช้" />
              <Link to="/forgotpassword">ลืมรหัสผ่าน</Link>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <button className="login-button" onClick={handleLogin}>
              เข้าสู่ระบบ
            </button>

            <div className="condition">
              <Link to="/terms">ข้อกำหนดและเงื่อนไข</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
