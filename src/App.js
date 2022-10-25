import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./Pages/PaginaPrincipal";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Auth/Login";
import './app.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />          
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
