import React, { useState } from "react";
import logo from "../assets/images/netflix-logo.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  return (
    <div className="signup-page">
      <div className="container">
        <div className="signup-header">
          <img src={logo} alt="netflix-logo" className="netflix-logo" />
          <button>Sign in</button>
        </div>
        <div className="signup-content">
          <h1>Unlimited films, TV programmes and more.</h1>
          <p>Watch anywhere. Cancel at any time.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="auth-container">
            <input type="email" placeholder="Email address" required />
            <button className="start-btn">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}
