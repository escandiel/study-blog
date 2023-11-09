import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="*" element={<div>404 pagina nao encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
