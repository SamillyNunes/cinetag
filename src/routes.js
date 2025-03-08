import Footer from "components/Footer";
import Header from "components/Header";
import Favorites from "pages/Favorites";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
