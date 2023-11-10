import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PageDefault from "components/PageDefault";
import Post from "pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PageDefault />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        {/* 
          Na rota '/',, a estrutura a ser renderizada é: 

          <PageDefault>
          <Home/>
          </PageDefault>

          ////////////////////

          Na rota '/AboutMe',, a estrurua a ser renderizada é: 

          <PageDefault>
          <AboutMe/>
          </PageDefault>



         */}

        <Route path="*" element={<div>404 pagina nao encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
