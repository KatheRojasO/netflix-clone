import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { removeUserSession } from "../scripts/userSessionHandler";
import { useUser } from "../state/User/UserContextProvider";
import logo from "../assets/images/netflix-logo.png";
import userLogo from "../assets/images/user-logo.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import data from "../JSONFiles/navbar.json";
import SearchBar from "./SearchBar";

export default function Header() {
  const { user, dispatch } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = data.map((item) => (
    <div className="link-container" key={item.id}>
      <Link to={item.href}>{item.text}</Link>
    </div>
  ));

  function logout() {
    removeUserSession();
    dispatch({ type: "remove" });
    navigate("/");
  }

  return (
    <header className={`netflix-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="nav-left">
          <Link to="/browse">
            <img src={logo} alt="netflix-logo" className="logo"></img>
          </Link>
          <nav className="dropdown">
            <button className="dropbtn">
              Browse <ArrowDropDownIcon />
            </button>
            <div className="dropdown-content">{navItems}</div>
          </nav>
        </div>

        <div className="nav-right">
          <SearchBar />
          <div className="dropdown-su">
            <img
              src={userLogo}
              alt="user-logo"
              className="user-logo-drop"
            ></img>
            <div className="dropdown-content-su">
              {user.isAdmin && (
                <button className="dropbtn-su" onClick={() => navigate('/admin')}>
                  Admin Dashboard
                </button>
              )}
              <button className="dropbtn-su" onClick={() => logout()}>
                Sign out of Netflix
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
