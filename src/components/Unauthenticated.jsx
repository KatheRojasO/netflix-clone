import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../state/User/UserContextProvider";

// good
export default function Unauthenticated() {
  const { user } = useUser();

  return user ? (
    user.isAdmin ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/browse" />
    )
  ) : (
    <Outlet />
  );
}
