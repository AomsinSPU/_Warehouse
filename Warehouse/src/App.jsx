import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./layouts/pages/Login/Login";
import Forgotpassword from "./layouts/pages/Forgotpassword/Forgotpassword";

import Layout from "./layouts/Layout/Layout";

import Search from "./layouts/pages/Search/Search";
import Category from "./layouts/pages/Category/Category";
import Product from "./layouts/pages/Product/product";
import EditProduct from "./layouts/pages/EditProduct/EditProduct";
import Location from "./layouts/pages/Location/Location";
import Checkthewithdrawallist from "./layouts/pages/Checkthewithdrawallist/Checkthewithdrawallist";

import Registration from "./layouts/pages/Registration/Registration";
import Receive from "./layouts/pages/Receive/Receive";
import Categoryx from "./layouts/pages/Picking/Categoryx";
import Productx from "./layouts/pages/Productx/Productx";
import CartPage from "./layouts/pages/CartPage/CartPage";

import Return from "./layouts/pages/Return/Return";
import CheckReturn from "./layouts/pages/CheckReturn/CheckReturn";

import Historyuser from "./layouts/pages/User/historyuser";
import History from "./layouts/pages/admin/history";

//นาย
import Report from "./layouts/pages/Report/Report";
import Report2 from "./layouts/pages/Report2/Report2";
import Page1 from "./layouts/pages/Page1/Page1";
import Page2 from "./layouts/pages/Page2/Page2";
//นาย

import { fetchProducts } from "./data/products";
import { fetchCategorys } from "./data/categorys";
//นาย
import { fetchReportdata } from "./data/reportdata"; // นำเข้า fetchReportdata
import { fetchReportdata2 } from "./data/reportdata2";
//นาย

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

function App() {
  //ออม
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  //ออม

  //นาย
  const [reportdata, setReportdata] = useState([]);
  const [reportdata2, setReportdata2] = useState([]);
  //นาย

  // login
  const [token, setToken] = useState(""); //login
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  //
  useEffect(() => {
    const fetchData = async () => {
      //ออม
      const productsData = fetchProducts();
      const categorysData = fetchCategorys();
      //ออม

      //นาย
      const reportdataData = fetchReportdata(); // ดึงข้อมูลจากฟังก์ชัน fetchReportdata
      const reportdata2Data = fetchReportdata2();
      //นาย

      //ออม
      setProducts(productsData);
      setCategorys(categorysData);
      //ออม

      //นาย
      setReportdata(reportdataData); // ตั้งค่า reportdata
      setReportdata2(reportdata2Data);
      //นาย
    };

    fetchData();
  }, []);

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <Routes>
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route
        path="/login"
        element={
          <Login setToken={setToken} setRole={setRole} setName={setName} />
        }
      />

      {token ? (
        <Route element={<Layout role={role} name={name} setToken={setToken} />}>
          <Route
            path="/"
            element={<Search products={products} categorys={categorys} />}
          />
          <Route
            path="/search"
            element={<Search products={products} categorys={categorys} />}
          />
          <Route
            path="/category/:categoryId"
            element={<Category products={products} categorys={categorys} />}
          />
          <Route
            path="/category"
            element={<Category products={products} categorys={categorys} />}
          />
          <Route
            path="/product/:productId"
            element={<Product products={products} />}
          />
          <Route
            path="/editproduct/:productId"
            element={
              <EditProduct
                products={products}
                onUpdateProduct={handleUpdateProduct}
              />
            }
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/picking" element={<Categoryx />} />
          <Route
            path="/picking/"
            element={<Categoryx products={products} categorys={categorys} />}
          />
          <Route
            path="/picking/:categoryId"
            element={<Categoryx products={products} categorys={categorys} />}
          />
          <Route
            path="/productx/:productId"
            element={<Productx products={products} />}
          />
          <Route path="/cart" element={<CartPage />} />

          <Route
            path="/checkthewithdrawallist"
            element={<Checkthewithdrawallist />}
          />
          <Route path="/return" element={<Return />} />
          <Route path="/CheckReturn" element={<CheckReturn />} />

          <Route
            path="/report"
            element={<Report products={products} reportdata={reportdata} />}
          />
          <Route
            path="/report2"
            element={<Report2 products={products} reportdata2={reportdata2} />}
          />
          <Route path="/historyuser" element={<Historyuser />} />
          <Route path="/history" element={<History />} />
          <Route path="/location" element={<Location />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Route>
      ) : (
        <Route
          path="*"
          element={
            <Login setToken={setToken} setRole={setRole} setName={setName} />
          }
        />
      )}
    </Routes>
  );
}

export default App;
