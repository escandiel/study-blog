const pagina =
  window.location.pathname === "/" ? (
    <div>Hello World</div>
  ) : (
    <div>Ola mundo</div>
  );

function App() {
  return pagina;
}

export default App;
