import { Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import MainPage from "../../pages/MainPage";
import AllProductsPage from "../../pages/AllProductsPage";
import AllSalesPage from "../../pages/AllSalesPage";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/slice/productSlice";
import { fetchCategories } from "../../store/slice/categoriesSlice";
import CategoryPage from "../../pages/CategoryPage";
import ProductsByCategoriesPage from "../../pages/ProductsByCategoriesPage";
import SingleProductPage from "../../pages/SingleProductPage";
import CartPage from "../../pages/CartPage";
import ErrorPage from "../../pages/ErrorPage";
import { ToastContainer } from 'react-toastify';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/all" element={<AllProductsPage />} />
        <Route path="/sales" element={<AllSalesPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/categoryProducts/:categoryId" element={<ProductsByCategoriesPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;