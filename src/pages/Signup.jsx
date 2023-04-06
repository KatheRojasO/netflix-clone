import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/netflix-logo.svg";

export default function Signup() {
  const location = useLocation();

  return (
    <div className="signup-page">
      <div className="signup-header">
        <img src={logo} alt="netflix-logo" className="netflix-logo" />
        <button>Sign in</button>
      </div>
      <div className="container">
        <div className="signup-content">
          <h1>Create a password to start your membership</h1>
          <p>Just a few more steps and you're finished!</p>
          <p>We hate paperwork, too.</p>
          <form className="auth-container">
            <input
              type="email"
              placeholder="Email address"
              value={location.state.email}
              required
            />
            <input
              type="password"
              placeholder="Add a password"
              required
            />
            <button className="start-btn">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
}
