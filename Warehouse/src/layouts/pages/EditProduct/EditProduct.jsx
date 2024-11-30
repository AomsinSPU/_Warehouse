import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSave, FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "./EditProduct.css";

const EditProduct = ({ products, onUpdateProduct }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [showPopup, setShowPopup] = useState(false);

  // แยกการหา product ให้อยู่ก่อน render
  const product = products.find((item) => item.id.toString() === productId);

  // สร้าง useState โดยไม่พึ่งการตรวจสอบเงื่อนไข
  const [formData, setFormData] = useState(
    product
      ? {
          name: product.name || "",
          details: product.details || "",
          category: product.category || "",
          type: product.type || "",
          quantity: product.quantity || 0,
          warranty: product.warranty || "",
          serialnumber: product.serialnumber || "",
          code: product.code || "",
          row: product.row || "",
          floor: product.floor || "",
          blog: product.blog || "",
          picture: product.picture || "",
        }
      : {}
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          picture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      onUpdateProduct({
        ...product,
        ...formData,
      });
      setShowPopup(true);
    }
  };

  const handleCancel = () => {
    if (product) {
      setFormData({
        name: product.name || "",
        details: product.details || "",
        category: product.category || "",
        type: product.type || "",
        quantity: product.quantity || 0,
        warranty: product.warranty || "",
        serialnumber: product.serialnumber || "",
        code: product.code || "",
        row: product.row || "",
        floor: product.floor || "",
        blog: product.blog || "",
        picture: product.picture || "",
      });
    }
    navigate(`/product/${productId}`);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate(`/product/${productId}`);
  };

  if (!product) {
    return <div>ไม่พบสินค้า</div>;
  }

  return (
    <div className="edit-product-container">
      <button className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft /> ย้อนกลับ
      </button>

      <form
        onSubmit={handleSubmit}
        onCanncel={handleCancel}
        className="edit-product-form grid-form"
      >
        <div className="form-group image-upload-group">
          <label>แก้ไขรูปภาพสินค้า</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {formData.picture && (
            <img
              src={formData.picture}
              alt="Product"
              className="preview-image"
            />
          )}
        </div>
        <div className="form-section product-details-section">
          <h2>ข้อมูลสินค้า</h2>

          <div className="form-group input-group">
            <label>ชื่อสินค้า</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="กรอกชื่อสินค้า"
            />
          </div>

          <div className="form-group">
            <label>รายละเอียด</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="กรอกรายละเอียดสินค้า"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>หมวดหมู่</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="กรอกหมวดหมู่สินค้า"
              />
            </div>

            <div className="form-group">
              <label>ประเภทสินค้า</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="กรอกประเภทสินค้า"
              />
            </div>
            <div className="form-group">
              <label>การรับประกัน</label>
              <input
                type="text"
                name="warranty"
                value={formData.warranty}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>จำนวน</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Serial Number</label>
              <input
                type="text"
                name="serialnumber"
                value={formData.serialnumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>รหัสบาร์โค้ด</label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-section location-section">
            <h2>ตำแหน่งจัดเก็บ</h2>
            <div className="form-row">
              <div className="form-group">
                <label>แถว</label>
                <input
                  type="text"
                  name="row"
                  value={formData.row}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>ชั้น</label>
                <input
                  type="text"
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>บล็อก</label>
                <input
                  type="text"
                  name="blog"
                  value={formData.blog}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <span
            style={{ display: "flex", justifyContent: "flex-end", gap: "16px" }}
          >
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              <FaTrashAlt /> ยกเลิก
            </button>

            <button type="submit" className="save-button edit-button">
              <FaSave /> บันทึกการเปลี่ยนแปลง
            </button>
          </span>
        </div>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content-aom">
            <div className="popup-icon">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
            </div>
            <p className="popup-message">ยืนยันการแก้ไข</p>
            <button className="popup-button" onClick={handlePopupClose}>
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
