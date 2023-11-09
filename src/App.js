import AboutMe from "./pages/about-me";
import Home from "./pages/home";

const page = window.location.pathname === "/" ? <Home /> : <AboutMe />;

function App() {
  return page;
}

export default App;
