import { Route, Routes } from "react-router-dom";

import { Plantilla } from "./shared/plantilla";
import { CabeceraVenta } from "./components/cabecera_venta";
import { PageCliente } from "./components/page_cliente/pageCliente";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Plantilla />}></Route>
      <Route path="/ventas" element={<CabeceraVenta />}></Route>
      <Route path="/cliente" element={<PageCliente />}></Route>
    </Routes>
  );
};
