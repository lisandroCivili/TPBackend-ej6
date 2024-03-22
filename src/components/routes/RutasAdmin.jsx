import { Routes, Route } from "react-router-dom";
import Administrador from "../pages/Administrador";
import FormularioRecetas from "../pages/recetas/FormularioRecetas";

const RutasAdmin = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Administrador/>}/>
            <Route exact path="/crear" element={<FormularioRecetas editando={false} titulo='Nueva receta'/>}/>
            <Route exact path="/editar/:id" element={<FormularioRecetas editando={true} titulo='Editar receta'/>}/>
        </Routes>
    );
};

export default RutasAdmin;