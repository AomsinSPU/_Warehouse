import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosPin, IoIosList } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Pagination from "@mui/material/Pagination";
import useScanDetection from "use-scan-detection";
import "./Category.css";

function Category({ products, categorys }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const itemsPerPage = 24;

  // ฟังก์ชันเมื่อคลิกที่การ์ดสินค้า
  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // ฟังก์ชันเมื่อพิมพ์ค้นหา
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  // ฟังก์ชันค้นหาด้วยบาร์โค้ด
  const handleBarcodeSearch = (barcode) => {
    setSearchQuery(barcode);
    setCurrentPage(1);
  };

  // ฟังก์ชันเมื่อเลือกประเภทสินค้า
  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
    setCurrentPage(1);
  };

  // กรองประเภทตามหมวดหมู่ที่เลือก
  const filteredTypes = Array.from(
    new Set(
      products
        .filter((product) => !categoryId || product.category === categoryId)
        .map((product) => product.type)
    )
  );

  // การกรองสินค้าตามหมวดหมู่, ประเภท และคำค้นหา
  const filteredProducts = products
    .filter((product) => !categoryId || product.category === categoryId)
    .filter((product) =>
      selectedTypes.length > 0 ? selectedTypes.includes(product.type) : true
    )
    .filter((product) => {
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.id.toString().includes(query) ||
        (product.code && product.code.toString().toLowerCase().includes(query))
      );
    });

  // คำนวณจำนวนหน้าทั้งหมด
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // การแบ่งสินค้าออกตามหน้า
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // ฟังก์ชันสำหรับเปลี่ยนหน้า
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const categoriesToShow = showAllCategories ? categorys : categorys.slice(0, 6);

  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  // ฟังก์ชันค้นหาด้วยการสแกนบาร์โค้ด
  useScanDetection({
    onComplete: (barcode) => handleBarcodeSearch(barcode),
  });

  return (
    <div className="category-container1">
      {/* Sidebar หมวดหมู่ */}
      <div className="sidebar1">
        <h2 style={{ display: "flex", alignItems: "center" }}>
          <IoIosList /> &nbsp;หมวดหมู่
        </h2>
        <hr className="divider1" />
        <div className="category-list1">
          {/* หมวดหมู่ทั้งหมด */}
          <p
            onClick={() => navigate("/category")}
            className={!categoryId ? "on-category" : ""}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              {!categoryId && <MdOutlineKeyboardArrowRight />}
              ทั้งหมด
            </span>
          </p>

          {/* หมวดหมู่ที่มีใน categoriesToShow */}
          {categoriesToShow.map((category) => (
            <p
              key={category.category}
              onClick={() => navigate(`/category/${category.category}`)}
              className={categoryId === category.category ? "on-category" : ""}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                {categoryId === category.category && <MdOutlineKeyboardArrowRight />}
                {category.category}
              </span>
            </p>
          ))}

          {/* ดูเพิ่มเติม/ย่อรายการ */}
          {categorys.length > 6 && (
            <p
              onClick={toggleShowAllCategories}
              style={{ color: "#FD6E2B", cursor: "pointer" }}
            >
              {showAllCategories ? "ย่อรายการ" : "ดูเพิ่มเติม"}
            </p>
          )}
        </div>

        {/* แสดงประเภทสินค้าที่กรองตามหมวดหมู่ */}
        <h2>ประเภท</h2>
        <hr className="divider1" />
        {filteredTypes.map((type) => (
          <Form.Check
            key={type}
            type="checkbox"
            label={type}
            checked={selectedTypes.includes(type)}
            onChange={() => handleTypeChange(type)}
          />
        ))}
      </div>

      {/* รายการสินค้า */}
      <div className="product-list1">
        <div className="search-bar1">
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="ค้นหาด้วยชื่อ, รหัสสินค้า หรือบาร์โค้ด"
            className="search-input1"
            style={{ width: "780px" }}
          />
        </div>

        {displayedProducts.length > 0 ? (
          <div className="card-container1">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="card1"
                onClick={() => handleCardClick(product.id)}
              >
                <img
                  src={product.picture}
                  alt={`Product ${product.id}`}
                  className="product-image1"
                />
                <h2 className="card-title1">{product.name}</h2>
                <p className="card-id1">รหัสสินค้า: {product.id}</p>
                <p className="card-value1">จำนวน {product.quantity} ชิ้น</p>
                <p className="card-location1">
                  <IoIosPin />
                  &nbsp;แถว {product.row} ชั้น {product.floor} บล็อก {product.blog}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              transform: "translate( 235px,235px)",
            }}
          >
            ไม่พบสินค้าที่ตรงกับคำค้นหา
          </p>
        )}

        {displayedProducts.length > 0 && (
          <div className="pagination1">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              shape="rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
