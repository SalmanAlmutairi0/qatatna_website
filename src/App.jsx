import { Route, Routes } from "react-router-dom"
import LabdingPage from "./pages/LandingPage/LabdingPage"
import AdsPage from "./pages/adsPage/AdsPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LabdingPage />} />
      <Route path="request-ads" element={<AdsPage />} />
    </Routes>
  )
}

export default App
