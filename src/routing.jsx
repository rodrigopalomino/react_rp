import { Route, Routes } from "react-router-dom";

import { C2 } from "./components/c2";
import { C1 } from "./components/c1";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/c2" element={<C2></C2>}></Route>
      <Route path="/c1" element={<C1></C1>}></Route>
    </Routes>
  );
};
