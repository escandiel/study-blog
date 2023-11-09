import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/about-me";
import Home from "./pages/home";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="*" element={<div>404 pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
