import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer"; 
import Inicio from "./components/pages/Inicio"
import DetalleReceta from "./components/pages/DetalleReceta"
import Login from "./components/pages/Login"
import Error404 from "./components/pages/Error404"
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const usuario = JSON.parse(sessionStorage.getItem('loginRC')) || "";
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  return <BrowserRouter>
  <Menu usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado} />
  <Routes>
    <Route exact path="/" element={<Inicio />} />
    <Route
      exact
      path="/detallereceta/:id"
      element={<DetalleReceta />}
    />
    <Route exact path="/login" element={<Login setUsuarioLogeado={setUsuarioLogeado} />} />
    <Route
      exact
      path="/administrador/*"
      element={
        <RutasProtegidas>
          <RutasAdmin></RutasAdmin>
        </RutasProtegidas>
      }
    />
    <Route exact path="*" element={<Error404 />} />
  </Routes>
  <Footer />
</BrowserRouter>
}
export default App;