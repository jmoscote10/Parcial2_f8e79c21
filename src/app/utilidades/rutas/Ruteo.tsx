import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Revista_Registrar } from "../../componentes/Revistas/Revista_Registrar";
import { Revista_Listar } from "../../componentes/Revistas/Revista_Listar";
import { Revista_Admin } from "../../componentes/Revistas/Revista_Admin";
import { QuienesSomos } from "../../componentes/otros/QuienesSomos";
import { No_encontrado } from "../../componentes/contenedor/No_encontrado";


export const Ruteo = () => {
    return (
      <Routes>
        <Route path="/" element={<Inicio />} />
  
        <Route path="/Revreg" element={<Revista_Registrar />} />
        <Route path="/Revlis" element={<Revista_Listar />} />
        <Route path="/Revadm" element={<Revista_Admin />} />
  
        <Route path="/Quienes" element={<QuienesSomos />} />
  
        <Route path="*" element={<No_encontrado />} />
      </Routes>
    );
  };