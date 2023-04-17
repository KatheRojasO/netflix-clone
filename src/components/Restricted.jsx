import { Navigate, Outlet } from "react-router-dom";

import { useUser } from "../state/User/UserContextProvider";

import React from "react";

// good
export default function Restricted() {
  const { user } = useUser();

  return user.isAdmin ? <Outlet /> : <Navigate to="/browse" />;
}
