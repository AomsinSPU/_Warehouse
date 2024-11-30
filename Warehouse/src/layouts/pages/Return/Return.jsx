import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./Return.css";

function Return() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validCode = "all";

  const handleSearch = (e) => {
    e.preventDefault();
    if (code === validCode) {
      // หากรหัสถูกต้อง ให้ไปยังหน้าถัดไป
      navigate("/CheckReturn");
    } else {
      // หากรหัสไม่ถูกต้อง แสดงข้อผิดพลาด
      setError("สินค้าไม่ถูกต้อง");
    }
  };
  // ************************************
  function Returns() {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const validCode = "66057378";

    const handleSearch = (e) => {
      e.preventDefault();
      if (code === validCode) {
        // รหัสถูกต้อง ให้ไปยังหน้าถัดไป
        navigate("/CheckReturns");
      } else {
        // หัสไม่ถูกต้อง แสดงข้อผิดพลาด
        setError("สินค้าไม่ถูกต้อง");
      }
    };
  }

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingLeft: "128px",
        paddingRight: "128px",
      }}
    >
      <h1 className="header">
        จัดการคลัง <span className="slash">/</span>{" "}
        <span className="slash"></span> คืนสินค้า
      </h1>

      <div className="search-bar">
        <form className="w-[630px] h-[60px] relative" onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="search"
              placeholder="ค้นหาสินค้า"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setError("");
              }}
              style={{ paddingRight: "50px" }}
              className="search-input"
            />
            <button type="submit" className="iconsearch" style={{ top: 12 }}>
              <AiOutlineSearch />
            </button>
          </div>
          {error && <p className="error-message text-red-500 mt-2">{error}</p>}
        </form>
      </div>

      {/* <main className="main">
                <table>
                    <thead>
                        <tr className="trss">
                            <th>รหัส</th>
                            <th>รายการ</th>
                            <th>หมวดหมู่</th>
                            <th>ตำแหน่งจัดเก็บ</th>
                            <th>จำนวน</th>
                        </tr>
                   

                    </thead>
                </table>
            </main> */}
    </div>
  );
}

export default Return;
