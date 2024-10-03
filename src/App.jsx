import Footer from "./Components/Uitily/Footer";
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Page/Auth/LoginPage";
// import RegisterPage from "./Page/Auth/RigesterPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
