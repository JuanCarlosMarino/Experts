import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./Pages/PaginaPrincipal";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Auth/Login";
import "./app.css";
import CrearCuenta from "./Pages/Auth/CrearCuenta";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/principal" element={<PaginaPrincipal />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<CrearCuenta />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
