import { Route, Routes } from "react-router-dom";

import Talent from "../pages/talents";
import TalentCreate from "../pages/talents/create";
import TalentEdit from "../pages/talents/edit";

export function TalentRoute() {
  return (
    <Routes>
      <Route path="/" element={<Talent />} />
      <Route path="/create" element={<TalentCreate />} />
      <Route path="/edit/:talentId" element={<TalentEdit />} />
    </Routes>
  );
}
