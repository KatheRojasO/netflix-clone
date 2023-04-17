import { Navigate, Outlet } from "react-router-dom";

import { useUser } from "../state/User/UserContextProvider";

import React from "react";

// good
export default function Protected() {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/login" />;
}
