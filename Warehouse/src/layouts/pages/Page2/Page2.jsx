import React, { useEffect, useState } from "react";
import "./Page2.css";
import { CgOverflow } from "react-icons/cg";

function Page2() {
  const [provinces, setProvinces] = useState([]); // State สำหรับจังหวัด
  const [amphoes, setAmphoes] = useState([]); // State สำหรับเขต/อำเภอ
  const [tambons, setTambons] = useState([]); // State สำหรับตำบล
  const [zipcode, setZipcode] = useState(""); // State สำหรับรหัสไปรษณีย์
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State สำหรับการแสดง Pop-up

  // ดึงข้อมูลจังหวัด
  useEffect(() => {
    fetch("https://ckartisan.com/api/provinces")
      .then((response) => response.json())
      .then((result) => {
        setProvinces(result); // เก็บข้อมูลจังหวัด
      })
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  // ฟังก์ชันสำหรับดึงข้อมูลเขต/อำเภอ
  const showAmphoes = (province) => {
    if (!province) return;

    fetch(`https://ckartisan.com/api/amphoes?province=${province}`)
      .then((response) => response.json())
      .then((result) => {
        setAmphoes(result); // เก็บข้อมูลเขต/อำเภอ
      })
      .catch((error) => console.error("Error fetching amphoes:", error));
  };

  // ฟังก์ชันสำหรับดึงข้อมูลตำบล
  const showTambons = (province, amphoe) => {
    if (!province || !amphoe) return;

    fetch(
      `https://ckartisan.com/api/tambons?province=${province}&amphoe=${amphoe}`
    )
      .then((response) => response.json())
      .then((result) => {
        setTambons(result); // เก็บข้อมูลตำบล
      })
      .catch((error) => console.error("Error fetching tambons:", error));
  };

  // ฟังก์ชันสำหรับดึงข้อมูลรหัสไปรษณีย์
  const showZipcode = (province, amphoe, tambon) => {
    if (!province || !amphoe || !tambon) return;

    fetch(
      `https://ckartisan.com/api/zipcodes?province=${province}&amphoe=${amphoe}&tambon=${tambon}`
    )
      .then((response) => response.json())
      .then((result) => {
        setZipcode(result[0]?.zipcode || ""); // แสดงรหัสไปรษณีย์
      })
      .catch((error) => console.error("Error fetching zipcodes:", error));
  };

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setAmphoes([]); // รีเซ็ตเขต/อำเภอเมื่อเลือกจังหวัดใหม่
    setTambons([]); // รีเซ็ตตำบลเมื่อเลือกจังหวัดใหม่
    setZipcode(""); // รีเซ็ตรหัสไปรษณีย์เมื่อเลือกจังหวัดใหม่
    showAmphoes(selectedProvince); // เรียกฟังก์ชันดึงข้อมูลเขต/อำเภอ
  };

  const handleAmphoeChange = (event) => {
    const selectedAmphoe = event.target.value;
    const selectedProvince = document.getElementById("input_province").value; // เข้าถึงค่าจังหวัด
    setTambons([]); // รีเซ็ตตำบลเมื่อเลือกเขต/อำเภอใหม่
    setZipcode(""); // รีเซ็ตรหัสไปรษณีย์เมื่อเลือกเขต/อำเภอใหม่
    showTambons(selectedProvince, selectedAmphoe); // เรียกฟังก์ชันดึงข้อมูลตำบล
  };

  const handleTambonChange = (event) => {
    const selectedTambon = event.target.value;
    const selectedProvince = document.getElementById("input_province").value; // เข้าถึงค่าจังหวัด
    const selectedAmphoe = document.getElementById("input_amphoe").value; // เข้าถึงค่าเขต/อำเภอ
    setZipcode(""); // รีเซ็ตรหัสไปรษณีย์เมื่อเลือกตำบลใหม่
    showZipcode(selectedProvince, selectedAmphoe, selectedTambon); // เรียกฟังก์ชันดึงข้อมูลรหัสไปรษณีย์
  };

  // ฟังก์ชันเมื่อกดปุ่มยืนยัน
  const handleConfirm = () => {
    setIsPopupVisible(true); // แสดง Pop-up เมื่อกดปุ่มยืนยัน

    // รีเซ็ตค่าที่เลือกและ text box โดยไม่ล้างข้อมูล options
    document.getElementById("input_province").value = ""; // รีเซ็ตค่า select จังหวัด
    document.getElementById("input_amphoe").value = ""; // รีเซ็ตค่า select เขต/อำเภอ
    document.getElementById("input_tambon").value = ""; // รีเซ็ตค่า select แขวง/ตำบล
    setZipcode(""); // รีเซ็ตรหัสไปรษณีย์
    document.getElementById("input_details").value = ""; // รีเซ็ต textarea
  };

  // ฟังก์ชันเพื่อปิด Pop-up
  const closePopup = () => {
    setIsPopupVisible(false); // ปิด Pop-up เมื่อกดปุ่มยืนยันใน Pop-up
  };

  // ฟังก์ชันยกเลิกการกรอกข้อมูล
  const handleCancel = () => {
    // รีเซ็ตข้อมูลในฟอร์ม
    document.getElementById("input_province").value = "";
    document.getElementById("input_amphoe").value = "";
    document.getElementById("input_tambon").value = "";
    document.getElementById("input_details").value = "";
    setZipcode("");

    // ดึงข้อมูลจังหวัดใหม่
    fetch("https://ckartisan.com/api/provinces")
      .then((response) => response.json())
      .then((result) => {
        setProvinces(result); // โหลดข้อมูลจังหวัดใหม่
        setAmphoes([]); // รีเซ็ตเขต/อำเภอ
        setTambons([]); // รีเซ็ตตำบล
      })
      .catch((error) => console.error("Error fetching provinces:", error));
  };

  return (
    <div className="nine2container">
      <div className="nine2header-container">
        <h1 className="nine2header" style={{fontSize: "64px"}}>เพิ่มสถานที่ใหม่</h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <select
          id="input_province"
          onChange={handleProvinceChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ffffff",
            borderRadius: "5px",
            background: "#ffffff",
            color: "#a3a3a3",
            marginBottom: "10px",
            transition: "border 0.3s ease, background-color 0.3s ease",
          }}
        >
          <option value="">กรุณาเลือกจังหวัด</option>
          {provinces.map((province, index) => (
            <option key={index} value={province.province}>
              {province.province}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <select
          id="input_amphoe"
          onChange={handleAmphoeChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ffffff",
            borderRadius: "5px",
            background: "#ffffff",
            color: "#a3a3a3",
            marginBottom: "10px",
            transition: "border 0.3s ease, background-color 0.3s ease",
          }}
        >
          <option value="">กรุณาเลือกเขต/อำเภอ</option>
          {amphoes.map((amphoe, index) => (
            <option key={index} value={amphoe.amphoe}>
              {amphoe.amphoe}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div>
        <select
          id="input_tambon"
          onChange={handleTambonChange}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ffffff",
            borderRadius: "5px",
            background: "#ffffff",
            color: "#a3a3a3",
            marginBottom: "10px",
            transition: "border 0.3s ease, background-color 0.3s ease",
          }}
        >
          <option value="">กรุณาเลือกแขวง/ตำบล</option>
          {tambons.map((tambon, index) => (
            <option key={index} value={tambon.tambon}>
              {tambon.tambon}
            </option>
          ))}
        </select>
      </div>
      <div>
        <br />

        <input
          id="input_zipcode"
          value={zipcode}
          placeholder="    รหัสไปรษณีย์"
          readOnly
        />
      </div>
      <br></br>
      <br></br>
      <br></br>

      {/* ช่องกรอกข้อมูลรายละเอียด */}
      <div>
        <textarea
          id="input_details"
          placeholder="กรอกรายละเอียดเพิ่มเติม"
          rows="4"
          cols="50"
        />
      </div>
      <br></br>

      {/* ปุ่มยืนยันและยกเลิก */}
      <div className="nine2button-group">
        <button
          onClick={handleCancel}
          style={{
            backgroundColor: "white",
            color: "#ff631b",
            padding: "12px 20px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            border: "1px solid #ff631b",
          }}
        >
          ยกเลิก
        </button>
        <button
          onClick={handleConfirm}
          style={{
            backgroundColor: "#ff631b",
            color: "white",
            padding: "12px 20px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            border: "1px solid #ff631b",
          }}
        >
          ยืนยัน
        </button>
      </div>

      {/* Pop-up เมื่อคลิกยืนยัน */}
      {isPopupVisible && (
        <div className="nine2popup-overlay">
          <div className="nine2popup-container">
            <h2>สำเร็จ!</h2>
            <p>การเพิ่มสถานที่ใหม่เสร็จสมบูรณ์</p>
            <button className="nine2popup-button" onClick={closePopup}>
              ยืนยัน
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page2;
