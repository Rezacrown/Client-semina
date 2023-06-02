import { Route, Routes } from "react-router-dom";

import Admins from "../pages/admins";
import Create from "../pages/admins/create";
// import Edit from "../pages/categories/edit";

export function AdminsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Admins />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}
