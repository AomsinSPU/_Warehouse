import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "./Location.css";




function Location() {
    const [showPopup, setShowPopup] = useState(false); // กำหนด state สำหรับ Popup
    const navigate = useNavigate();

    const handleConfirm = () => {
        setShowPopup(true); // แสดง Popup เมื่อกดปุ่มยืนยัน
    };

    const handleClosePopup = () => {
        setShowPopup(false); // ซ่อน Popup เมื่อกดปุ่มตกลง
        navigate("/Search");
    };

    return (
        <div className="locationx-container-ing">
            <h1 className="locationx-header-ing">เลือกสถานที่ในการจัดการ</h1>
            <select className="locationx-dropdown-ing">
                <option value="">เลือกสถานที่</option>
                <option value="location1">โกดัง A</option>
                <option value="location2">โกดัง B</option>
                <option value="location3">โกดัง C</option>
                <option value="location1">โกดัง D</option>
                <option value="location2">โกดัง X</option>
                <option value="location3">โกดัง Z</option>
            </select>
            <button className="locationx-button-ing" onClick={handleConfirm}>
                ยืนยัน
            </button>

            {/* Popup */}
            {showPopup && (
                <div className="popup-overlay-ing">
                    <div className="popup-ing">
                        <div className="popup-content-ing">
                            <span className="popup-checkmark">✔</span>
                            <h2>เลือกสถานที่ใหม่แล้ว</h2>
                            <button onClick={handleClosePopup} className="popup-button-ing">
                                ตกลง
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Location;
