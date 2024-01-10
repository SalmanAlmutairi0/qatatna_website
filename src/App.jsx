import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdsPage from "./pages/adsPage/AdsPage";
import Navbar from "./components/nav/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="request-ads" element={<AdsPage />} />
        </Routes>
  </>
  );
}

export default App;
