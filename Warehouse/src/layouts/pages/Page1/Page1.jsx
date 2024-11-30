import React, { useState } from "react";
import "./Page1.css";

function Page1() {
  // กำหนด state สำหรับ role
  const [role, setRole] = useState({
    "000001": "user", // กำหนดค่า default
    "000002": "user",
    "000003": "user",
  });

  // กำหนด state สำหรับ pop-up
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // เก็บค่า role ก่อนการเปลี่ยนแปลง
  const [previousRole, setPreviousRole] = useState({
    "000001": "user",
    "000002": "user",
    "000003": "user",
  });

  // ฟังก์ชันเปลี่ยนค่าของ dropdown
  const handleRoleChange = (id, event) => {
    // เก็บค่าของ role ก่อนการเปลี่ยนแปลง
    setPreviousRole({
      ...previousRole,
      [id]: role[id],
    });

    // เปลี่ยนค่าของ role ใหม่
    setRole({
      ...role,
      [id]: event.target.value,
    });
  };

  // ฟังก์ชันเมื่อกดปุ่มยืนยัน
  const handleConfirm = () => {
    let message = "";
    let updated = false;

    // ตรวจสอบการเปลี่ยนแปลง role ของพนักงานแต่ละคน
    for (const id in role) {
      const prevRole = previousRole[id]; // ค่า role ก่อนการเปลี่ยนแปลง
      const currentRole = role[id]; // ค่า role ปัจจุบัน

      if (prevRole !== currentRole) {
        // สร้างข้อความแจ้งเตือนกรณีการเปลี่ยนแปลง
        message += `พนักงานรหัส ${id} เปลี่ยนจาก '${prevRole}' เป็น '${currentRole}'\n`;
        updated = true;
      }
    }

    // ถ้ามีการเปลี่ยนแปลง, แสดง pop-up
    if (updated) {
      setPopupMessage(message);
      setIsPopupVisible(true);
    } else {
      alert("ไม่มีการเปลี่ยนแปลง");
    }
  };

  // ฟังก์ชันปิด Pop-up และยืนยันการเปลี่ยนแปลง
  const closePopup = (confirm) => {
    if (confirm) {
      // เมื่อยืนยัน, บันทึกการเปลี่ยนแปลง
      setPreviousRole(role); // อัปเดต role ก่อนหน้านี้
    } else {
      // รีเซ็ตค่ากลับไปยังค่าเดิมหากยกเลิก
      setRole(previousRole);
    }
    setIsPopupVisible(false); // ปิด Pop-up
  };

  return (
    <div className="nine1-container0">
      <div className="nine1page-container">
        <div className="nine1header-container">
          <h1 className="nine1header" style={{ fontSize: "64px" }}>
            จัดการสิทธิ์การใช้งาน
          </h1>
        </div>
        <br />

        {/* ตาราง 3x3 */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <table className="nine1table" >
            <thead>
              <tr>
                <th>รหัส</th>
                <th>ชื่อ</th>
                <th>ตำแหน่ง</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>000001</td>
                <td>คิรากร สุวรรณโกสุม</td>
                <td>
                  <select
                    value={role["000001"]}
                    onChange={(event) => handleRoleChange("000001", event)}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "8px",
                      fontSize: "14px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>000002</td>
                <td>สรัล นิธิสมบัติสกุล</td>
                <td>
                  <select
                    value={role["000002"]}
                    onChange={(event) => handleRoleChange("000002", event)}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "8px",
                      fontSize: "14px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>000003</td>
                <td>วศิน คำสวัสดิ์</td>
                <td>
                  <select
                    value={role["000003"]}
                    onChange={(event) => handleRoleChange("000003", event)}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      padding: "8px",
                      fontSize: "14px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ปุ่มยืนยัน */}
        <div className="nine1button-container">
          <button1
            onClick={handleConfirm}
            className="nine1button"
            style={{
              marginTop: "20px",
              backgroundColor: "#ff631b",
              color: "white",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ยืนยัน
          </button1>
        </div>

        {/* Pop-up เมื่อคลิกยืนยัน */}
        {isPopupVisible && (
          <div className="nine1popup-overlay">
            <div className="nine1popup-container">
              <h2>การเปลี่ยนแปลงสิทธิ์การใช้งาน</h2>
              <pre style={{ fontFamily: "Noto Sans Thai" }}>
                {popupMessage}
              </pre>{" "}
              {/* แสดงข้อความที่จัดเตรียมใน Pop-up */}
              <button
                className="nine1popup-button"
                onClick={() => closePopup(false)}
                style={{
                  marginTop: "20px",
                  marginRight: "20px",
                  backgroundColor: "white",
                  color: "#ff631b",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "18px",
                  border: "1px solid #ff631b",
                }}
              >
                ยกเลิก
              </button>
              <button
                className="nine1popup-button"
                onClick={() => closePopup(true)}
                style={{
                  marginTop: "20px",
                  backgroundColor: "#ff631b",
                  color: "white",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page1;
