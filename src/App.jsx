import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AdsPage from "./pages/adsPage/AdsPage";
import Navbar from "./components/nav/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/loginPage/Login";
import Signup from "./pages/auth/signupPage/signup";

function App() {
  const location = useLocation();
  const currentPage = location.pathname;

  if(currentPage == '/Login' || currentPage == '/Signup') {
    return (
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Routes>
    );
  }
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="request-ads" element={<AdsPage />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="signup" element={<Signup />} /> */}
        </Routes>
        <Footer />
  </>
  );
}

export default App;
