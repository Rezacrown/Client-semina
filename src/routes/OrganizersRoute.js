import { Route, Routes } from "react-router-dom";

import OrganizersPage from './../pages/organizers/index';
import CreateOrganizer from "../pages/organizers/create";

export function OrganizersRoute() {
  return (
    <Routes>
      <Route path="/" element={<OrganizersPage />} />
      <Route path="/create" element={<CreateOrganizer />} />
    </Routes>
  );
}
