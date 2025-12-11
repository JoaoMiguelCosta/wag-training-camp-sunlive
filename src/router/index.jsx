// src/router/index.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/Home.jsx";
import MaltaPage from "../pages/malta/Malta.jsx";
import AnadiaPage from "../pages/anadia/Anadia.jsx";
import { ROUTES } from "../config/routes.config.js";
import { ScrollToTop } from "../shared/components/ScrollToTop.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.MALTA} element={<MaltaPage />} />
        <Route path={ROUTES.ANADIA} element={<AnadiaPage />} />
      </Routes>
    </BrowserRouter>
  );
}
