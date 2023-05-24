import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function NeedLoginRoute({ children }) {
  let { token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return children || <Outlet />;
}


export function GuestOnlyRoute({ children }) {
    let { token } = useSelector((state) => state.auth);

    if (token) return <Navigate to='/' replace={true} />;
  return children || <Outlet />;
}
