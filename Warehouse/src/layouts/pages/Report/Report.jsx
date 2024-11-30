import React from "react";
import { useNavigate } from "react-router-dom"; // นำเข้า useNavigate

import "./Report.css";

function Report({ reportdata }) {
  const navigate = useNavigate(); // สร้างฟังก์ชัน navigate

  // ฟังก์ชันที่ใช้เปลี่ยนเส้นทางเมื่อคลิกที่ small icon
  const handleIconClick = () => {
    navigate("/report2"); // เปลี่ยนไปที่หน้าใหม่ (สามารถปรับเส้นทางให้เป็นหน้าอื่นๆ ได้)
  };

  return (

    <div className="nine0search">
      
      

      <div className="nine0product-search">
        <div className="nine0header-container">
        <h1 className="nine0header">สรุปรายงาน</h1>
      </div>
        <img
          src="https://i.imgur.com/br4sGIf.png" // เปลี่ยน URL ให้เป็น URL ของรูปที่ต้องการ
          alt="Small Icon"
          className="nine0small-icon"
          onClick={handleIconClick} // เมื่อคลิกที่รูปจะไปยังหน้าใหม่
          style={{ cursor: "pointer" }} // ทำให้เคอร์เซอร์เป็น pointer เมื่อเอามาชี้ที่รูป
        />
        <br />
        <br />
        <br />

        <div className="nine0card-container grid grid-cols-5 gap-4">
          {reportdata.map((category) => (
            <div
              key={category.id}
              className={`nine0card cursor-pointer ${
                category.id === 4 ? "nine0card-id-4" : category.id === 5 ? "nine0card-id-5" : ""
              }`}
            >
              <div className="nine0card-body">
                <img
                  src={category.picture}
                  alt={category.category}
                  className={`${
                    category.id === 4 ? "nine0img-id-4" : category.id === 5 ? "nine0img-id-5" : "nine0img-default"
                  }`}
                />
                <h2 className="nine0card-title mt-2">{category.category}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Report;