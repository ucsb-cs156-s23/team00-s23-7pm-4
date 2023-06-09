import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import IrvinePage from "main/pages/IrvinePage";
import OceansidePage from "main/pages/OceansidePage";
import SeattlePage from "main/pages/SeattlePage";
import SanJosePage from "main/pages/SanJosePage";
import FremontPage from "main/pages/FremontPage";
import CupertinoPage from "main/pages/CupertinoPage";

import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="team00-s23-7pm-4">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/Irvine" element={<IrvinePage />} />
        <Route exact path="/towns/Oceanside" element={<OceansidePage />} />
        <Route exact path="/towns/Seattle" element={<SeattlePage />} />
        <Route exact path="/towns/SanJose"  element={<SanJosePage />} />
        <Route exact path="/towns/Fremont" element={<FremontPage />} />
        <Route exact path="/towns/Cupertino" element={<CupertinoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
