import Favorites from "pages/Favorites";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/favoritos" element={<Favorites />}  />
            </Routes>
        </BrowserRouter>
    )
}