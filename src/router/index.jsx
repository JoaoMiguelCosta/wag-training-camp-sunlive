import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Malta from "../pages/malta/Malta.jsx";
import Anadia from "../pages/anadia/Anadia.jsx";
import { ROUTES } from "../config/routes.config.js";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.MALTA} element={<Malta />} />
        <Route path={ROUTES.ANADIA} element={<Anadia />} />
      </Routes>
    </BrowserRouter>
  );
}
