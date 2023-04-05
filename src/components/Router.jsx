import React from "react";
import { Route, Routes } from "react-router-dom";
import Browse from "../pages/Browse";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Protected from "./Protected";
import Unauthenticated from "./Unauthenticated";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route element={<Unauthenticated />}>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<Protected />}>
          <Route path="/instructor-page" element={<Browse />} />
        </Route>
      </Routes>
    </div>
  );
}
