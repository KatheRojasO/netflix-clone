import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Browse from "../pages/Browse";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import LoginHelp from "../pages/LoginHelp";
import Movies from "../pages/Movies";
import Player from "../pages/Player";
import Series from "../pages/Series";
import Signup from "../pages/Signup";
import Protected from "./Protected";
import Unauthenticated from "./Unauthenticated";
import Restricted from "./Restricted";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route element={<Unauthenticated />}>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/LoginHelp" element={<LoginHelp />} />
        </Route>

        <Route element={<Protected />}>
          <Route path="/browse" element={<Browse />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/watch/:id" element={<Player />} />
          <Route path="/watch/:id/:season/:episode" element={<Player />} />
          <Route element={<Restricted/>}>
            <Route path="/admin" element={<Admin/>}></Route>
          </Route>
          
        </Route>
      </Routes>
    </div>
  );
}
