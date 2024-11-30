import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosPin, IoIosList } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Pagination from "@mui/material/Pagination";
import "./Categoryx.css";

function Categoryx({ products, categorys }) {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0); // จำนวนสินค้าในตะกร้า
  const itemsPerPage = 24;

  useEffect(() => {
    // ดึงจำนวนสินค้าจาก localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  }, []);

  const handleCardClick = (productId) => {
    navigate(`/productx/${productId}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
    setCurrentPage(1);
  };

  const filteredTypes = Array.from(
    new Set(
      products
        .filter((product) => !categoryId || product.category === categoryId)
        .map((product) => product.type)
    )
  );

  const filteredProducts = products
    .filter((product) => !categoryId || product.category === categoryId)
    .filter((product) =>
      selectedTypes.length > 0 ? selectedTypes.includes(product.type) : true
    )
    .filter((product) => {
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.id.toString().includes(query)
      );
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const categoriesToShow = showAllCategories
    ? categorys
    : categorys.slice(0, 6);
  const toggleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="category-container1">
      <div className="sidebar1">
        <h2 style={{ display: "flex", alignItems: "center" }}>
          <IoIosList /> &nbsp;หมวดหมู่
        </h2>
        <hr className="divider1" />
        <div className="category-list1">
          <p
            onClick={() => navigate("/picking")}
            className={!categoryId ? "on-category" : ""}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              {!categoryId && <MdOutlineKeyboardArrowRight />}
              ทั้งหมด
            </span>
          </p>
          {categoriesToShow.map((category) => (
            <p
              key={category.category}
              onClick={() => navigate(`/picking/${category.category}`)}
              className={categoryId === category.category ? "on-category" : ""}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                {categoryId === category.category && (
                  <MdOutlineKeyboardArrowRight />
                )}
                {category.category}
              </span>
            </p>
          ))}
          {categorys.length > 6 && (
            <p
              onClick={toggleShowAllCategories}
              style={{ color: "#FD6E2B", cursor: "pointer" }}
            >
              {showAllCategories ? "ย่อรายการ" : "ดูเพิ่มเติม"}
            </p>
          )}
        </div>
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

      <div className="product-list1">
        <div className="header-with-cart">
          <div className="search-bar1">
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="ค้นหาด้วยชื่อหรือรหัสสินค้า"
              className="search-input1"
            />
            {/* Cart Icon with Item Count */}
            <div className="cart-icon-ing" onClick={() => navigate("/cart")}>
              <FaShoppingCart />
              <span className="cart-count-ing">{cartItemCount}</span>
            </div>
          </div>
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
                  &nbsp;แถว {product.row} ชั้น {product.floor} บล็อก{" "}
                  {product.blog}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>ไม่พบสินค้าที่ตรงกับคำค้นหา</p>
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

export default Categoryx;
