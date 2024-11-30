import React from "react";
import { useParams , useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaRegEdit,
  FaBox,
  FaBarcode,
  FaRegClock,
  FaBoxes,
} from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

import "./Product.css";

const StatBox = ({ icon, label, value }) => (
  <div className="stat-box">
    <div className="stat-box__icon">{icon}</div>
    <div className="stat-box__content">
      <span className="stat-box__label">{label}</span>
      <span className="stat-box__value">{value || "-"}</span>
    </div>
  </div>
);

const LocationPill = ({ label, value }) => (
  <div className="location-pill">
    <span className="location-pill__label">{label}</span>
    <span className="location-pill__value">{value}</span>
  </div>
);

const ProductDetails = ({ products }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = products.find((item) => item.id.toString() === productId);

  if (!product) {
    return (
      <div className="error-container">
        <p className="error-message">ไม่พบสินค้าที่ตรงกับรหัส {productId}</p>
      </div>
    );
  }

  return (
    <div className="product-layout">
      <button className="back-button" onClick={() => navigate(`/category/`)}>
        <FaArrowLeft />
        <span>ย้อนกลับ</span>
      </button>

      <div className="product-container">
        <div className="product-media">
          <div className="product-image-wrapper">
            <img
              src={product.picture}
              alt={product.name}
              className="product-image"
            />
          </div>

          <div className="stock-indicator">
            <div className="stock-badge">คงเหลือ</div>
            <span className="stock-number">{product.quantity}</span>
            <span className="stock-unit">ชิ้น</span>
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1 className="product-name">{product.name}</h1>
            <div className="edit-actions">
              <button
                className="edit-button"
                onClick={() => navigate(`/editproduct/${product.id}`)}
              >
                <FaRegEdit />
                <span>แก้ไขข้อมูล</span>
              </button>
            </div>
          </div>

          <p className="product-description">{product.details}</p>

          <div className="info-group">
            <StatBox
              icon={<FaBoxes />}
              label="หมวดหมู่"
              value={product.category}
            />
            <StatBox
              icon={<FaBoxesPacking />}
              label="ประเภทสินค้า"
              value={product.type}
            />
            <StatBox
              icon={<FaRegClock />}
              label="การรับประกัน"
              value={product.warranty}
            />
            <StatBox
              icon={<BiSearchAlt />}
              label="Serial Number"
              value={product.serialnumber || "-"}
            />
            <StatBox
              icon={<FaBarcode />}
              label="รหัสบาร์โค้ด"
              value={product.code}
            />
            <StatBox icon={<FaBox />} label="รหัสสินค้า" value={product.id} />
          </div>

          <div className="divider" />

          <div className="location-section">
            <div className="location-header">
              <IoLocationOutline />
              <h2>ตำแหน่งจัดเก็บ</h2>
            </div>

            <div className="location-grid">
              <LocationPill label="แถว" value={product.row} />
              <LocationPill label="ชั้น" value={product.floor} />
              <LocationPill label="บล็อก" value={product.blog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
