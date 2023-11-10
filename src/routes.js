import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import PageDefault from "components/PageDefault";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

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

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
