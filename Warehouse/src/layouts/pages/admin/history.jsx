import React, { useState, useEffect } from "react";
import "./history.css";

function History() {
  const [data] = useState([
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "รับสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "เบิกสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "คืนสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0456 หม้อหุงข้าว",
        quantity: 2,
        remaining: 5,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "รับสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "เบิกสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "คืนสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "รับสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "เบิกสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "คืนสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-20"), end: new Date("2024-10-25") },
      item: "คืนสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    // วันที่25
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "คืนสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0456 หม้อหุงข้าว",
        quantity: 2,
        remaining: 5,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "รับสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "เบิกสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "คืนสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0456 หม้อหุงข้าว",
        quantity: 2,
        remaining: 5,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "รับสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "เบิกสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "เบิกสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "คืนสินค้า",
      details: {
        category: "เครื่องใช้ไฟฟ้า",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
    {
      date: { start: new Date("2024-10-26"), end: new Date("2024-10-31") },
      item: "คืนสินค้า",
      details: {
        category: "อิเล็กทรอนิกส์",
        product: "#0123 คีย์บอร์ด",
        quantity: 1,
        remaining: 3,
      },
    },
  ]);

  const [currentDateRange, setCurrentDateRange] = useState({
    start: new Date("2024-10-20"),
    end: new Date("2024-10-25"),
  });

  const [filteredData, setFilteredData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [selectedItem, setSelectedItem] = useState("ทั้งหมด");

  useEffect(() => {
    // Filter data based on the current date range, selected category, and selected item
    const filtered = data.filter((entry) => {
      const isInDateRange =
        entry.date.start <= currentDateRange.end &&
        entry.date.end >= currentDateRange.start;
      const isCategoryMatch =
        selectedCategory === "ทั้งหมด" ||
        entry.details.category === selectedCategory;
      const isItemMatch =
        selectedItem === "ทั้งหมด" || entry.item === selectedItem;

      return isInDateRange && isCategoryMatch && isItemMatch;
    });

    setFilteredData(filtered);
  }, [currentDateRange, selectedCategory, selectedItem, data]);

  const adjustDateRange = (direction) => {
    const newStart = new Date(currentDateRange.start);
    const newEnd = new Date(currentDateRange.end);

    if (direction === "prev") {
      newStart.setDate(newStart.getDate() - 6);
      newEnd.setDate(newEnd.getDate() - 6);
    } else if (direction === "next") {
      newStart.setDate(newStart.getDate() + 6);
      newEnd.setDate(newEnd.getDate() + 6);
    }

    setCurrentDateRange({ start: newStart, end: newEnd });
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="history-containerg">
      <h2 className="headerg">ประวัติรายการ</h2>

      <div className="sial">
        {/* Navigation buttons */}
        <div className="navigationg">
          <button
            className="nav-buttong"
            onClick={() => adjustDateRange("prev")}
          >
            &lt;
          </button>

          <div className="date-rangeg">
            <span>
              {formatDate(currentDateRange.start)} -{" "}
              {formatDate(currentDateRange.end)}
            </span>
          </div>

          <button
            className="nav-buttong"
            onClick={() => adjustDateRange("next")}
          >
            &gt;
          </button>

          {/* Category dropdown */}
          <div className="filters-containerg">
            <div className="category-filtersiag">
              <label htmlFor="categorysiag"></label>
              <select
                id="categorysiag"
                className="category-dropdowng"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="ทั้งหมด">ทั้งหมด</option>
                <option value="อิเล็กทรอนิกส์">อิเล็กทรอนิกส์</option>
                <option value="เครื่องใช้ไฟฟ้า">เครื่องใช้ไฟฟ้า</option>
              </select>
            </div>

            {/* Item dropdown */}
            <div className="item-filtersiag">
              <label htmlFor="itemsiag"></label>
              <select
                id="itemsiag"
                className="item-dropdowng"
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.target.value)}
              >
                <option value="ทั้งหมด">ทั้งหมด</option>
                <option value="รับสินค้า">รับสินค้า</option>
                <option value="เบิกสินค้า">เบิกสินค้า</option>
                <option value="คืนสินค้า">คืนสินค้า</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <table className="tableg">
          <thead>
            <tr>
              <th colSpan="3">
                <div className="table-headerg">
                  <span className="siajm">วันที่</span>
                  <span className="menug">รายการ</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <React.Fragment key={index}>
                  {/* Main row */}
                  <tr>
                    <td colSpan="2" className="table-rowg">
                      <div className="row-contentg">
                        <span>
                          {formatDate(row.date.start)} -{" "}
                          {formatDate(row.date.end)}
                        </span>
                        <span className="itemg">{row.item}</span>
                      </div>
                    </td>
                    <td className="toggle-buttong">
                      <button
                        className="toggle-btng"
                        onClick={() =>
                          setExpandedRows((prev) =>
                            prev.includes(index)
                              ? prev.filter((row) => row !== index)
                              : [...prev, index]
                          )
                        }
                      >
                        {expandedRows.includes(index) ? "-" : "+"}
                      </button>
                    </td>
                  </tr>

                  {/* Expanded row */}
                  {expandedRows.includes(index) && (
                    <tr>
                      <td colSpan="3" className="expanded-rowg">
                        <div className="expanded-detailsg">
                          <span className="categoryx">
                            หมวดหมู่{" "}
                            <h5 className="categoryg-g">
                              {row.details.category}
                            </h5>
                          </span>
                          <span className="categoryc">
                            สินค้า{" "}
                            <h5 className="categoryh-h">
                              {row.details.product}
                            </h5>
                          </span>
                          <span className="categoryv">
                            จำนวน{" "}
                            <h5 className="categoryj-j">
                              {row.details.quantity}
                            </h5>
                          </span>
                          <span className="categoryb">
                            สินค้าคงเหลือ{" "}
                            <h5 className="categoryk-k">
                              {row.details.remaining}
                            </h5>
                          </span>
                          {/* โชว์ qr แค่หลังเบิกสินค้า */}
                          {/* Only show QR code for "เบิกสินค้า" */}
                          {row.item === "เบิกสินค้า" && (
                            <span className="qrsiag">
                              <img
                                src="/_Warehouse/Image/Spuqr.png"
                                alt="QR Codeg"
                                className="qr-codeg"
                              />
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="3">ไม่พบข้อมูล</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
