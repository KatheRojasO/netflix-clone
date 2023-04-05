import { Navigate, Outlet } from "react-router-dom";

import { useUser } from "../state/UserContextProvider";

import React from "react";

export default function Protected() {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to="/" />;
}