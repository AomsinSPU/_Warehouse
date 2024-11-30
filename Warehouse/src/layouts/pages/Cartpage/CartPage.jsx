import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode"; // Import ไลบรารีสำหรับสร้าง QR Code
import "./CartPage.css";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  ); // สินค้าในตะกร้า
  const [showPopup, setShowPopup] = useState(false); // Popup ยืนยันการเบิก
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Popup สำเร็จ
  const [qrCodeURL, setQRCodeURL] = useState(""); // สำหรับเก็บ URL ของ QR Code

  // ฟังก์ชันเปิด popup
  const openPopup = () => {
    if (cartItems.length > 0) {
      setShowPopup(true);
    } else {
      alert("ไม่มีสินค้าในตะกร้า");
    }
  };

  // ฟังก์ชันปิด popup
  const closePopup = () => setShowPopup(false);

  // ฟังก์ชันยืนยันการสั่งซื้อ
  const handleConfirmPurchase = async () => {
    try {
      const qrData = "Order ID: #123456789"; // ข้อมูลสำหรับ QR Code
      const qrCode = await QRCode.toDataURL(qrData); // สร้าง QR Code URL
      setQRCodeURL(qrCode); // อัปเดต state ด้วย QR Code URL
      setShowSuccessPopup(true); // แสดง popup สำเร็จ
      localStorage.removeItem("cartItems"); // ล้างสินค้าใน localStorage
      setCartItems([]); // ล้าง state ตะกร้าสินค้า
      setShowPopup(false); // ปิด popup
    } catch (error) {
      console.error("Failed to generate QR Code:", error);
    }
  };

  // ฟังก์ชันปิด popup สำเร็จ
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    navigate("/picking"); // ไปยังหน้าถัดไป
  };

  // ฟังก์ชันลบสินค้า
  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // ฟังก์ชันเพิ่มจำนวนสินค้า
  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  // ฟังก์ชันลดจำนวนสินค้า
  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    } else {
      alert("ไม่สามารถลดจำนวนสินค้าต่ำกว่า 1 ได้");
    }
  };

  return (
    <div style={{ paddingTop: "50px", paddingLeft: "128px", paddingRight: "128px" }}>
      {/* Breadcrumb */}
      <h1 className="headerc-ing">
        จัดการคลัง
        <h5 className="breadcrumb">/</h5>
        เบิกสินค้า
        <h5 className="breadcrumb">/</h5>
        รถเข็น
      </h1>

      {/* Table แสดงรายการสินค้า */}
      <div className="cart-page-ing">
        <table className="cart-table-ing">
          <thead>
            <tr>
              <th>รหัสสินค้า</th>
              <th>ชื่อสินค้า</th>
              <th>หมวดหมู่</th>
              <th>ประเภท</th>
              <th>จำนวน</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category || "ไม่ระบุหมวดหมู่"}</td>
                  <td>{item.type || "ไม่ระบุประเภท"}</td>
                  <td>
                    <div className="quantityv-control-ing">
                      <button
                        className="decrease-button"
                        onClick={() => handleDecreaseQuantity(index)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="increase-button"
                        onClick={() => handleIncreaseQuantity(index)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      className="remove-button-ing"
                      onClick={() => handleRemoveItem(index)}
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{textAlign:"center"}}>ไม่มีสินค้าในตะกร้า</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* ปุ่มยืนยัน */}
        {cartItems.length > 0 && (
          <div className="confirmc-section-ing">
            <button className="confirmc-button-ing" onClick={openPopup}>
              ยืนยัน
            </button>
          </div>
        )}

        {/* Popup ยืนยันการเบิก */}
        {showPopup && (
          <div className="popup-overlay-ingz">
            <div className="popup-content-ingz">
              <h2>ยืนยันการเบิกสินค้า</h2>
              <table className="popup-table-ingz">
                <thead>
                  <tr>
                    <th>รหัส</th>
                    <th>รายการ</th>
                    <th>หมวดหมู่</th>
                    <th>ประเภท</th>
                    <th>จำนวน</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.category || "ไม่ระบุหมวดหมู่"}</td>
                      <td>{item.type || "ไม่ระบุประเภท"}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Input ฟิลด์ */}
              <div className="inputx-section-ingz">
                <input
                  type="text"
                  className="employee-code-input-ingz"
                  placeholder="รหัสพนักงาน"
                />
                <input
                  type="text"
                  className="reason-input-ingz"
                  placeholder="เหตุผลการเบิก"
                />
                <select className="project-select-ingz">
                  <option value="">เลือกโครงการ</option>
                  <option value="project1">โครงการ 1</option>
                  <option value="project2">โครงการ 2</option>
                  <option value="project3">โครงการ 3</option>
                </select>
              </div>

              <div className="popup-footer-ingz">
                <button className="cancel-button-ingz" onClick={closePopup}>
                  ยกเลิก
                </button>
                <button
                  className="confirm-button-ingz"
                  onClick={handleConfirmPurchase}
                >
                  ยืนยัน
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup เสร็จสิ้น */}
        {showSuccessPopup && (
          <div className="popupx-overlay-ingx">
            <div className="popupx-content-ingx">
              <h2 style={{ fontSize: "18px", marginBottom: "15px" }}>
                สร้างรายการเบิกแล้วเรียบร้อย
              </h2>
              {/* QR Code Section */}
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                {qrCodeURL ? (
                  <img
                    src={qrCodeURL}
                    alt="QR Code"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                ) : (
                  <p>กำลังสร้าง QR Code...</p>
                )}
              </div>
              {/* Order Number Section */}
              <p
                style={{ fontSize: "14px", color: "#333", marginBottom: "5px" }}
              >
                หมายเลขรายการ
              </p>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#6a1b9a",
                  marginBottom: "10px",
                }}
              >
                #123456789
              </h3>
              {/* Instruction Section */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#333",
                  marginBottom: "20px",
                }}
              >
                ท่านสามารถนำ QR code หรือ หมายเลขรายการ
                ให้กับเจ้าหน้าที่คลังเพื่อขอรับสินคลังได้ทันที
              </p>
              {/* Button */}
              <button
                style={{
                  backgroundColor: "#ff6f00",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={closeSuccessPopup}
              >
                ตกลง
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
