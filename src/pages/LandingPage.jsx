import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../scripts/usersCollection";
import logo from "../assets/images/netflix-logo.svg";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await getUser(email);

    if (result === null) {
      navigate("/signup", { state: { email: email } });
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="landing-page">
      <div className="container">
        <div className="landing-header">
          <img src={logo} alt="netflix-logo" className="netflix-logo" />
          <button>Sign in</button>
        </div>
        <div className="landing-content">
          <h1>Unlimited films, TV programmes and more.</h1>
          <p>Watch anywhere. Cancel at any time.</p>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form
            className="auth-container"
            onSubmit={(event) => onSubmit(event)}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <button className="start-btn">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
}
