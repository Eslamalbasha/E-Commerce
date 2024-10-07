import Footer from "./Components/Uitily/Footer";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RigesterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrand from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "../src/Page/Products/ShopeProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetailsPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          {/* <Route path="" element={}/> */}
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
