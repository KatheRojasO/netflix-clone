import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAccount } from "../scripts/auth";
import { useUser } from "../state/UserContextProvider";
import { setUserSession } from "../scripts/userSessionHandler";
import { setUser } from "../scripts/usersCollection";
import logo from "../assets/images/netflix-logo.svg";

export default function Signup() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state.email);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useUser();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await createAccount(email, password);

    if (result.status === true) {
        const newUser = {
            email: email,
            isAdmin: false
        }
        const dbUserId = await setUser(newUser)
        dispatch({ type: "initialise", payload: newUser });
        setUserSession({id: dbUserId, ...newUser})
        navigate("/browse")
      
    } else {
      alert(`Cannot creat account, ${result.message}!`);
    }
  }

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
          <form
            className="auth-container"
            onSubmit={(event) => onSubmit(event)}
          >
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Add a password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button className="start-btn" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
