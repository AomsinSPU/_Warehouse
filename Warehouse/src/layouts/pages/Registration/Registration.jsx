import { FaBoxes, FaBox, FaBarcode, FaRegClock } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";

import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [quantity, setQuantity] = useState(0); // จำนวนสินค้า
  const [productImage, setProductImage] = useState(null); // เก็บภาพสินค้า
  const [productName, setProductName] = useState(""); // ชื่อสินค้า
  const [description, setDescription] = useState(""); // รายละเอียดสินค้า
  const [category, setCategory] = useState(""); // หมวดหมู่
  const [type, setType] = useState(""); // ประเภท
  const [serialNumber, setSerialNumber] = useState(""); // Serial Number
  const [barcode, setBarcode] = useState(""); // รหัสบาร์โค้ด
  const [productCode, setProductCode] = useState(""); // รหัสสินค้า
  const [warranty, setWarranty] = useState(""); // การรับประกัน
  const [locationRow, setLocationRow] = useState(""); // แถว
  const [locationShelf, setLocationShelf] = useState(""); // ชั้น
  const [locationBlock, setLocationBlock] = useState(""); // บล็อก
  const [showPopup, setShowPopup] = useState(false); // แสดง Popup

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProductImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    const productData = {
      quantity,
      productImage,
      productName,
      description,
      category,
      type,
      serialNumber,
      barcode,
      productCode,
      warranty,
      locationRow,
      locationShelf,
      locationBlock,
    };
    localStorage.setItem("productData", JSON.stringify(productData));
    resetForm();
  };

  const resetForm = () => {
    setQuantity(0);
    setProductImage(null);
    setProductName("");
    setDescription("");
    setCategory("");
    setType("");
    setSerialNumber("");
    setBarcode("");
    setProductCode("");
    setWarranty("");
    setLocationRow("");
    setLocationShelf("");
    setLocationBlock("");
    setShowPopup(false);
  };

  const isFormValid =
    productName &&
    description &&
    category &&
    type &&
    serialNumber &&
    barcode &&
    productCode &&
    warranty &&
    locationRow &&
    locationShelf &&
    locationBlock;

  return (
    <div style={{ paddingTop: "50px", paddingLeft: "128px" }}>
      <p className="header-ing" style={{ fontSize: "20px" }}>
        จัดการคลัง <span style={{ color: "#f28444" }}>/ </span>ลงทะเบียนสินค้า
      </p>
      <div className="registration-container-ing">
        <div className="form-container-ing">
          {/* Image and Quantity Section */}
          <div className="image-box-ing">
            <div className="image-placeholder-ing">
              <img
                src={productImage || "https://via.placeholder.com/250"}
                alt="Product"
                className="placeholder-image"
              />
            </div>
            <div className="upload-button-ing">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="image-upload-input"
              />
            </div>
            <div className="quantity-control-ing">
              <span className="quantity-label-ing">จำนวน</span>

              <button onClick={handleDecrease} className="quantity-btn-ing">
                -
              </button>
              <span className="quantity-value-ing">{quantity}</span>
              <span className="quantity-unit-ing">ชิ้น</span>
              <button onClick={handleIncrease} className="quantity-btn-ing">
                +
              </button>
            </div>
          </div>

          {/* Product Information Section */}
          <div className="product-info-form-ing">
            <input
              type="text"
              placeholder="ชื่อสินค้า"
              className="form-input-ingc"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <textarea
              placeholder="รายละเอียดสินค้า"
              className="form-textarea-ing"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div className="form-grid-ing">
              <div className="form-row-ing">
                <div className="form-field-up-ing">
                  <span className="form-label-gis-ing"> หมวดหมู่</span>
                  <span className="form-icon-up-ing">
                    <FaBoxes />
                  </span>
                  <input
                    type="text"
                    placeholder="หมวดหมู่"
                    className="form-input-down-ing"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    list="category-options"
                  />
                  <datalist id="category-options">
                    <option value="หมวดหมู่ 1" />
                    <option value="หมวดหมู่ 2" />
                  </datalist>
                </div>
                <div className="form-field-up-ing">
                  <span className="form-label-gis-ing"> ประเภท</span>
                  <span className="form-icon-up-ing">
                    {" "}
                    <FaBoxesPacking />{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="ประเภท"
                    className="form-input-down-ing"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    list="type-options"
                  />
                  <datalist id="type-options">
                    <option value="ประเภท 1" />
                    <option value="ประเภท 2" />
                  </datalist>
                </div>
                <div className="form-field-up-ing">
                  <span className="form-label-gis-ing"> การรับประกัน</span>
                  <span className="form-icon-up-ing">
                    <FaRegClock />{" "}
                  </span>
                  <input
                    type="text"
                    placeholder="การรับประกัน"
                    className="form-input-down-ing"
                    value={warranty}
                    onChange={(e) => setWarranty(e.target.value)}
                    list="warranty-options"
                  />
                  <datalist id="warranty-options">
                    <option value="1 ปี" />
                    <option value="2 ปี" />
                    <option value="3 ปี" />
                  </datalist>
                </div>
              </div>
              <div className="form-row">
                <div className="form-field-down-ing">
                  <span className="form-label-gis-ing"> รหัสบาร์โค้ด</span>
                  <span className="form-icon-down-ing">
                    <FaBarcode />
                  </span>
                  <input
                    type="text"
                    placeholder="รหัสบาร์โค้ด"
                    className="form-input-down-ing"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                  />
                </div>
                <div className="form-field-down-ing">
                  <span className="form-label-gis-ing"> รหัสสินค้า</span>
                  <span className="form-icon-down-ing">
                    {" "}
                    <FaBox />
                  </span>
                  <input
                    type="text"
                    placeholder="รหัสสินค้า"
                    className="form-input-down-ing"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                  />
                </div>
                <div className="form-field-down-ing">
                  <span className="form-label-gis-ing"> Serial Number</span>
                  <span className="form-icon-down-ing">
                    <BiSearchAlt />
                  </span>
                  <input
                    type="text"
                    placeholder="Serial Number"
                    className="form-input-down-ing"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="location-section-ing">
              <h3>ที่จัดเก็บ</h3>
              <div className="location-grid-ing">
                <div className="location-item-ing">
                  <label htmlFor="location-row" className="location-label-ing">
                    แถว
                  </label>
                  <input
                    id="location-row"
                    type="text"
                    placeholder="-"
                    className="form-input-ing location-input-ing"
                    value={locationRow}
                    onChange={(e) => setLocationRow(e.target.value)}
                  />
                </div>
                <div className="location-item-ing">
                  <label
                    htmlFor="location-shelf"
                    className="location-label-ing"
                  >
                    ชั้น
                  </label>
                  <input
                    id="location-shelf"
                    type="text"
                    placeholder="-"
                    className="form-input-ing location-input-ing"
                    value={locationShelf}
                    onChange={(e) => setLocationShelf(e.target.value)}
                  />
                </div>
                <div className="location-item-ing">
                  <label
                    htmlFor="location-block"
                    className="location-label-ing"
                  >
                    บล็อก
                  </label>
                  <input
                    id="location-block"
                    type="text"
                    placeholder="-"
                    className="form-input-ing location-input-ing"
                    value={locationBlock}
                    onChange={(e) => setLocationBlock(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons-ing">
              <button onClick={resetForm} className="cancel-btnz-ing">
                ยกเลิก
              </button>
              <button
                onClick={handleSubmit}
                className="confirm-btnz-ing"
                disabled={!isFormValid}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-sc-ing">
          <div className="popup-content-sc-ing">
            <span className="popup-checkmark">✔</span>
            <h3>การลงทะเบียนสำเร็จ</h3>
            <button onClick={closePopup} className="popup-close-btn-sc-ing">
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
