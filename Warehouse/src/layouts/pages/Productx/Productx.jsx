import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaBox,
  FaBarcode,
  FaRegClock,
  FaBoxes,
} from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

import "./Productx.css";

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

const ProductDetailsx = ({ products }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id.toString() === productId);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [cartItemCount, setCartItemCount] = useState(
    cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  if (!product) {
    return (
      <div className="error-container">
        <p className="error-message">ไม่พบสินค้าที่ตรงกับรหัส {productId}</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart;
    if (existingItemIndex > -1) {
      updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity }];
    }

    setCartItems(updatedCart);
    setCartItemCount(
      updatedCart.reduce((total, item) => total + item.quantity, 0)
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, product.quantity));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="product-layout">
      <button className="back-button" onClick={() => window.history.back()}>
        <FaArrowLeft />
        <span>ย้อนกลับ</span>
      </button>

      <div className="cart-header" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="cart-countx">{cartItemCount}</span>
      </div>

      <div className="productx-header-ing">
        <div className="product-container">
          <div className="product-media">
            <div className="product-image-wrapper">
              <img
                src={product.picture}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="quantityy-control">
              <div>
                <p>จำนวนที่ต้องการ</p>
              </div>
              <button onClick={decrementQuantity} disabled={quantity === 1}>
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={incrementQuantity}
                disabled={quantity === product.quantity}
              >
                +
              </button>
              <div id="stock-indicator-ing">
                <div className="stockx-section">
                  <div className="stockx-badge">คงเหลือ</div>
                  <span className="stock-number">{product.quantity}</span>
                  <span className="stock-unit">ชิ้น</span>
                </div>
              </div>
            </div>
          </div>

          <div className="productx-info">
            <div className="productx-header-ing">
              <h1 className="productx-name-ing">{product.name}</h1>
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

              <button
                className="add-to-cart-button-ing"
                onClick={handleAddToCart}
              >
                เพิ่มลงรถเข็น
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsx;
