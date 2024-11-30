import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CheckReturn.css";
// import idaccount from "../../../data/idaccount.jsx";
// import Returns from "../../../data/return.jsx";

function CheckReturn() {
  const [products, setProducts] = useState([
    {
      id: "66057378",
      name: "กล่องดินสอ",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 5 บล็อก 4",
      quantity: 1,
    },
    {
      id: "66057379",
      name: "ปากกา",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 4 บล็อก 8",
      quantity: 5,
    },
    {
      id: "66057374",
      name: "กระดาษ A4",
      category: "อุปกรณ์สำนักงาน",
      location: "แถว 20 ชั้น 6 บล็อก 2",
      quantity: 9,
    },
  ]);

  // ลบข้อมูล
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const increaseQuantity = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    setProducts(newProducts);
  };

  const decreaseQuantity = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity -= 1;
    }
    setProducts(newProducts);
  };

  const handleConfirm = () => {
    console.log("ข้อมูลที่ยืนยัน:", products);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/Return"); //
  };

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingLeft: "128px",
        paddingRight: "128px",
      }}
    >
      <h1 className="header">
        จัดการคลัง <span className="slash"></span>{" "}
        <span className="slash">/</span> คืนสินค้า
      </h1>

      <div className="search-bar">
        <form className="w-[630px] h-[60px] relative">
          <div className="relative">
            <input
              type="search"
              placeholder="ค้นหาสินค้า"
              className="search-input"
              style={{ paddingRight: "50px" }}
            />
            <button className="iconsearch">
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
      <main className="main" style={{ marginTop: "20px", width: "100%" }}>
        <table style={{ width: "100%", padding: "10px" }}>
          <thead>
            <tr
              style={{
                background: "#473366",
                color: "white",
                padding: "10px",
              }}
            >
              <th style={{ padding: "10px", borderTopLeftRadius: "10px" }}>
                รหัส
              </th>
              <th>รายการ</th>
              <th>หมวดหมู่</th>
              <th>ตำแหน่งจัดเก็บ</th>
              <th>จำนวน</th>
              <th style={{ borderTopRightRadius: "10px" }}></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                style={{ background: "white", padding: "10px" }}
              >
                <td style={{ padding: "10px" }}>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.location}</td>

                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      onClick={() => decreaseQuantity(index)}
                      style={{
                        border: "0.5px solid gray",
                        background: "transparent",
                        color: "black",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        marginRight: "5px",
                        border: "none",
                      }}
                    >
                      -
                    </button>
                    <span style={{ margin: "0 10px", color: "#FD6E2B " }}>
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      style={{
                        border: "0.5px solid gray",
                        background: "transparent",
                        color: "black",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        marginLeft: "5px",
                        border: "none",
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="handleDelete">
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{
                      background: "white",
                      color: "red",
                      padding: "3px 12px",
                      borderRadius: "8px",
                      border: "0.5px solid red",
                      cursor: "pointer",
                    }}
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* Confirmation Button */}
      <div style={{ marginTop: "20px", textAlign: "end" }}>
        <button
          onClick={handleConfirm}
          className="con-button"
          style={{
            background: "#FD6E2B",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ยืนยัน
        </button>
      </div>

      {/* ******************************************************************** // */}
      {/* Modal for Confirmation */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="return-modal"
        overlayClassName="modal-overlay"
      >
        <div
          className="modal-content"
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <div className="modal-header">
            <h2>ยืนยันการคืนสินค้า</h2>
          </div>

          <div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                margin: "20px 0",
                fontSize: "16px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#473366",
                    color: "white",
                    padding: "10px",
                  }}
                >
                  <th style={{ padding: "10px", borderTopLeftRadius: "10px" }}>
                    รหัส
                  </th>
                  <th>รายการ</th>
                  <th>หมวดหมู่</th>
                  <th>ตำแหน่งจัดเก็บ</th>
                  <th style={{ padding: "10px", borderTopRightRadius: "10px" }}>
                    จำนวน
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id} style={{ padding: "10px" }}>
                    <td style={{ padding: "10px" }}>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.location}</td>
                    <td>
                      <div>
                        <span
                          style={{
                            margin: "10px 10px ",
                            color: "#FD6E2B",
                            border: "0.5px solid #D9D9D9",
                            background: "transparent",
                            padding: "4px 10px",
                            borderRadius: "8px",
                          }}
                        >
                          {product.quantity}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="idaccount">
            <input
              type="idaccount"
              placeholder="รหัสพนักงาน"
              className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div
            className="modal-footer"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <button
              className="confirm-button"
              onClick={() => setIsModalOpen(false)}
              style={{
                background: "white",
                color: "#FD6E2B",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "1px solid #FD6E2B",
                cursor: "pointer",
              }}
            >
              แก้ไข
            </button>
            <button
              className="confirm-button"
              onClick={() => {
                setIsModalOpen(false);
                setIsSuccessModalOpen(true);
              }}
              style={{
                background: "#FD6E2B",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal for Confirmation */}

      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={() => setIsSuccessModalOpen(false)}
        className="success-modal"
        overlayClassName="modal-overlay"
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <span className="popup-checkmark" style={{ color: "green" }}>
            ✔
          </span>
          <p className="confirmReturn">ยืนยันการคืนเสร็จสิ้น</p>

          <button
            className="confirm-button"
            onClick={() => setIsSuccessModalOpen(false)}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#FD6E2B",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ตกลง
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default CheckReturn;
