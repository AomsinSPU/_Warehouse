import React, { useState } from "react";
import "./Receive.css";

function Receive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearches, setLastSearches] = useState([]);
  const [products, setProducts] = useState([
    {
      id: "200011",
      name: "กล่องดินสอ",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 5 บล็อก 4",
      quantity: 1,
    },
    {
      id: "200012",
      name: "ปากกา",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 4 บล็อก 8",
      quantity: 1,
    },
    {
      id: "200013",
      name: "กระดาษ A4",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 6 บล็อก 2",
      quantity: 1,
    },
    {
      id: "200014",
      name: "กระดาษ A3",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 7 บล็อก 6",
      quantity: 1,
    },
    {
      id: "200015",
      name: "กระดาษ A2",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 8 บล็อก 10",
      quantity: 1,
    },
    {
      id: "200016",
      name: "กระดาษ A1",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 9 บล็อก 14",
      quantity: 1,
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);

  const handleIncrease = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrease = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    lastSearches.some((searchTerm) => product.id.includes(searchTerm.trim()))
  );

  const handleConfirm = () => {
    setShowPopup(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      setLastSearches((prev) => [...prev, searchTerm.trim()]);
      setSearchTerm("");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setLastSearches([]); // เคลียร์การค้นหา
    setProducts([]); // เคลียร์รายการสินค้า
  };

  return (
    <div className="receive-container-ing" style={{ paddingTop: "50px", paddingLeft: "128px", paddingRight: "128px" }}>
      <p className="header-ing" style={{fontSize: "20px"}}>
        จัดการคลัง <span style={{ color: "#f28444"}}> / </span> รับสินค้า
      </p>

      <div className="search-bar-ing">
        <input
          type="text"
          placeholder="ค้นหารหัสสินค้า"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          className="search-input-ing"
        />
      </div>

      <div className="table-container-ing">
        <table className="product-table-ing">
          <thead>
            <tr>
              <th style={{ borderTopLeftRadius: "8px" }}>รหัส</th>
              <th>รายการ</th>
              <th>หมวดหมู่</th>
              <th>ตำแหน่งจัดเก็บ</th>
              <th>จำนวน</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lastSearches.length > 0 ? (
              filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.location}</td>
                    <td>
                      <div className="quantity-control-ingv">
                        <button onClick={() => handleDecrease(product.id)}>
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button onClick={() => handleIncrease(product.id)}>
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="delete-button-ingv"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    style={{ textAlign: "center", padding: "10px" }}
                  >
                    ไม่พบข้อมูลที่ค้นหาตรงกับรหัส
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  กรุณากรอกรหัสสินค้า
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filteredProducts.length > 0 && (
        <div className="confirm-container-ing" style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={handleConfirm} className="confirm-button-ing">
            ยืนยัน
          </button>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay-ing">
          <div className="popup-ing">
            <div className="popup-content-ing">
              <span className="popup-checkmark">✔</span>
              <h2>เพิ่มสินค้าใหม่เสร็จสิ้น</h2>
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

export default Receive;
