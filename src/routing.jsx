import { Route, Routes } from "react-router-dom";

import { Plantilla } from "./shared/plantilla";
import { CabeceraVenta } from "./components/cabecera_venta";
import { PageUsuario } from "./components/usuario/pageUsuario";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Plantilla />}></Route>
      <Route path="/ventas" element={<CabeceraVenta />}></Route>
      <Route path="/usuario" element={<PageUsuario />}></Route>
    </Routes>
  );
};
