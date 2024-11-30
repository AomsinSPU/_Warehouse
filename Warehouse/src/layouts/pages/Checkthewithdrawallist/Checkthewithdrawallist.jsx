import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./Checkthewithdrawallist.css";

// Mock data สำหรับตัวอย่าง
const mockWithdrawals = [
  {
    withdrawalId: "66057370",
    requestDate: "2024-11-25T10:30:00",
    status: "pending",
    requestBy: "เอกภพ พาที",
    items: [
      {
        productId: 10001,
        quantity: 1,
        productName: "ทีวี 65DU7700 สมาร์ททีวี 65 นิ้ว 4K Crystal UHD LED",
        productCode: 1234567000,
        withdrawalDate: "2024-11-25",
        row: 1,
        floor: 1,
        blog: 1,
      },
      {
        productId: 20001,
        quantity: 1,
        productName: "ตู้เย็น Samsung RT50K6000BS/ST 18.2 คิว",
        productCode: 2234567800,
        withdrawalDate: "2024-11-25",
        row: 2,
        floor: 1,
        blog: 2,
      },
    ],
    totalItems: 2,
  },
];

function Modal({ isOpen, onClose, onConfirm, selectedWithdrawal }) {
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState("");
  const handleModalClose = () => {
    setEmployeeId("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!employeeId.trim()) {
      setError("กรุณากรอกรหัสพนักงาน");
      return;
    }
    onConfirm(employeeId);
    setEmployeeId("");
    setError("");
  };

  return (
    <div className="withdrawal-modal-overlay">
      <div className="withdrawal-modal-content">
        <h3 className="withdrawal-modal-title">ยืนยันการส่งสินค้า</h3>

        <div className="withdrawal-modal-input-container">
          <div className="withdrawal-modal-table">
            <table className="table-auto">
              <thead>
                <tr>
                  <th>รหัส</th>
                  <th>ชื่อ</th>
                  <th>Serial Number</th>
                  <th>ที่จัดเก็บ</th>
                  <th>จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {selectedWithdrawal?.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.productCode}</td>
                    <td style={{ textAlign: "left" }}>{item.productName}</td>
                    <td>{item.productId}</td>
                    <td>แถว {item.row} ชั้น {item.floor} บล็อก {item.blog}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginTop: "20px",
          }}
        >
          <div className="withdrawal-modal-input-container">
            <label className="withdrawal-modal-label">
              รหัสพนักงานผู้รับสินค้า
            </label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => {
                setEmployeeId(e.target.value);
                setError("");
              }}
              placeholder="กรุณากรอกรหัสพนักงาน"
              className="withdrawal-modal-input"
            />
            {error && <p className="withdrawal-modal-error">{error}</p>}
          </div>

          <div className="withdrawal-modal-buttons">
            <button
              onClick={handleModalClose}
              className="withdrawal-modal-cancel-button"
            >
              ยกเลิก
            </button>
            <button
              onClick={handleConfirm}
              className="withdrawal-modal-confirm-button"
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Popup({ onClose, selectedWithdrawal, employeeId }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content1">
        <div className="Confirm__Header">
          <h1>จัดส่งสำเร็จ</h1>
        </div>
        <div className="popup-icon">
          <IoMdCheckmarkCircleOutline size={150} color="#5A9321" />
        </div>
        <div className="popup-message">
          <p>หมายเลขรายการเบิกสินค้า</p>
          <p>{selectedWithdrawal?.withdrawalId}</p>
          <p>รหัสพนักงานผู้รับสินค้า</p>
          <p>{employeeId}</p>
        </div>

        <button className="popup-button1" onClick={onClose}>
          ตกลง
        </button>
      </div>
    </div>
  );
}

function Checkthewithdrawallist() {
  const [query, setQuery] = useState("");
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const withdrawal = mockWithdrawals.find((w) => w.withdrawalId === query);
    setSelectedWithdrawal(withdrawal || null);
  };

  const handleConfirm = (employeeId) => {
    setEmployeeId(employeeId); // เก็บ employeeId ไว้ใน state
    setIsModalOpen(false);
    setShowPopup(true); // แสดง Popup
  };
  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedWithdrawal(null);
    setEmployeeId("");
    setQuery("");
  };

  return (
    <div className="Checkthewithdrawallist">
      <div className="Checkthewithdrawallist__Header">
        <p>จัดการคลัง</p>
        <p style={{ color: "#FD6E2B" }}>/</p>
        <p>เช็กรายการเบิกสินค้า</p>
      </div>

      <div className="Checkthewithdrawallist_search-bar">
        <form
          className="Checkthewithdrawallist_search-form"
          onSubmit={handleSearch}
        >
          <div
            className="relative"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              type="search"
              placeholder="หมายเลขรายการเบิกสินค้า"
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ paddingRight: "50px" }}
            />
            <button
              type="submit"
              className="search-button"
              style={{
                transform: "translateX(-40px)",
                backgroundColor: "#473366",
                color: "white",
                borderRadius: "12px",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoSearch />
            </button>
          </div>
        </form>
      </div>

      <div className="Checkthewithdrawallist_table">
        <table className="table-auto">
          <thead>
            <tr>
              <th>รหัส</th>
              <th>ชื่อ</th>
              <th>Serial Number</th>
              <th>ที่จัดเก็บ</th>
              <th>จำนวน</th>
            </tr>
          </thead>
          <tbody>
            {selectedWithdrawal?.items.map((item, index) => (
              <tr key={index}>
                <td>{item.productCode}</td>
                <td style={{ textAlign: "left" }}>{item.productName}</td>
                <td>{item.productId}</td>
                <td>แถว {item.row} ชั้น {item.floor} บล็อก {item.blog}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
            {!selectedWithdrawal && (
              <tr>
                <td colSpan={5} className="empty-message">
                  ไม่พบหมายเลขรายการเบิกสินค้า
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedWithdrawal && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="Checkthewithdrawallist_button">
            <button onClick={() => setIsModalOpen(true)}>
              ยืนยันการส่งสินค้า
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        selectedWithdrawal={selectedWithdrawal}
      />

      {/* Popup */}
      {showPopup && (
        <Popup
          onClose={handlePopupClose}
          selectedWithdrawal={selectedWithdrawal}
          employeeId={employeeId} // เพิ่มการส่ง employeeId
        />
      )}
    </div>
  );
}

export default Checkthewithdrawallist;
