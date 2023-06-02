import { Navigate, Route, Routes } from "react-router-dom";
import { NeedLoginRoute, GuestOnlyRoute } from "../components/GuardRoute";
// import GuestOnlyRoute from "../components/GuestOnlyRoute";

import PageSignIn from "../pages/signin";
import { HomeRoute } from "./HomeRoute";
import { TalentRoute } from "./TalentRoute";
import { CategoriesRoute } from "./CategoriesRoute";
import { PaymentsRoute } from "./PaymentsRoute";
import SNavbar from "../components/Navbar";
import { EventsRoute } from "./EventsRoute";
import { OrdersRoute } from "./OrdersRoute";
import { OrganizersRoute } from "./OrganizersRoute";
import { AdminsRoute } from "./AdminsRoute";

export function AppRoutes() {
  return (
    <Routes>
      {/* guest Only Routes */}
      <Route
        path="signin"
        element={
          <GuestOnlyRoute>
            <PageSignIn />
          </GuestOnlyRoute>
        }
      />

      {/* need authentication Routes */}
      <Route
        path="/"
        element={
          <>
            <SNavbar />
            <NeedLoginRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentRoute />} />
        <Route path="payments/*" element={<PaymentsRoute />} />
        <Route path="events/*" element={<EventsRoute />} />
        <Route path="orders/*" element={<OrdersRoute />} />
        <Route path="organizers/*" element={<OrganizersRoute />} />
        <Route path="admins/*" element={<AdminsRoute />} />
        
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}





