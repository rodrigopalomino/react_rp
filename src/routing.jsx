import { Route, Routes } from "react-router-dom";

import Cabeceraventa  from "./components/cabecera_venta.jsx";
import  Plantilla  from "./components/plantilla.jsx";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Plantilla/>}></Route>
      <Route path="/ventas" element={<Cabeceraventa/>}></Route>
    </Routes>
  );
};
