import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdsPage from "./pages/adsPage/AdsPage";
import Navbar from "./components/nav/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="request-ads" element={<AdsPage />} />
        </Routes>
        <Footer />
  </>
  );
}

export default App;
