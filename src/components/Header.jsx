import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/netflix-logo.png";
import userLogo from "../assets/images/user-logo.jpg";
import data from "../JSONFiles/navbar.json";
import SearchBar from "./SearchBar";

export default function Header() {
  const navItems = data.map((item) => (
    <li className="nav-item" key={item.id}>
      <Link to={item.href}>{item.text}</Link>
    </li>
  ));

  return (
    <header className="netflix-header">
      <div className="header-container">
        <div className="nav-left">
          <Link to="/browse">
            <img src={logo} alt="netflix-logo" className="logo"></img>
          </Link>
          <nav>
            <ul className="menu">{navItems}</ul>
          </nav>
        </div>
        <div className="nav-right">
          <SearchBar />
          <img src={userLogo} alt="netflix-logo" className="user-logo"></img>
        </div>
      </div>
    </header>
  );
}
