import React from "react";
import { useNavigate } from "react-router-dom";

import "./Search.css";

function Search({ categorys }) {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState("");

  const handleCardClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const filteredCategories = categorys.filter((category) =>
    category.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <div className="header-container">
        <h1 className="header-aom">ค้นหา</h1>
      </div>

      <div className="search-bar-aom">
        <form className="search-form">
          <div className="relative">
            <input
              type="search"
              placeholder="ค้นหาหมวดหมู่"
              className="search-input"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="content">
        <h1>หมวดหมู่</h1>
      </div>

      <div className="product-search">
        <div className="card-container grid grid-cols-5 gap-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div
                key={category.category}
                className="card cursor-pointer"
                onClick={() => handleCardClick(category.category)}
              >
                <div className="card-body">
                  <img
                    src={category.picture}
                    alt={category.category}
                    className="card-img"
                  />
                  <h2 className="card-title">{category.category}</h2>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results"></p>
          )}
          <div
            className="card cursor-pointer"
            onClick={() => navigate("/category")}
          >
            <div className="card-body">
              <img
                src="/_Warehouse/categorys/ทั้งหมด.png"
                className="card-img"
                alt="ทั้งหมด"
              />
              <h2 className="card-title">ทั้งหมด</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
