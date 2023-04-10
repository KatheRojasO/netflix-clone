import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../scripts/auth";
import { useUser } from "../state/User/UserContextProvider";
import { getUser } from "../scripts/usersCollection";
import { setUserSession } from "../scripts/userSessionHandler";
import logo from "../assets/images/netflix-logo.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useUser();
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await login(email, password);

    if (result.status === true) {
      const userDocument = await getUser(email);
      dispatch({ type: "initialise", payload: userDocument });
      setUserSession(userDocument);

      const isAdmin = userDocument.isAdmin;
      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/browse");
      }
    } else {
      alert(`Login has failed, ${result.message}!`);
    }
  }
  return (
    <div className="login-page">
      <div className="login-header">
        <img src={logo} alt="netflix-logo" className="netflix-logo" onClick={()=> navigate("/")} />
      </div>
      <div className="container">
        <div className="login-content">
          <h1>Sign In</h1>
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
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button className="start-btn" type="submit">
              Sign In
            </button>
          </form>
          <button className="btn-help" onClick={() => navigate("/LoginHelp")}>
            Need help?
          </button>
          <div className="btn-signup-container">
            <p className="p-signup"> New to Netflix?</p>
            <button className="btn-signup" onClick={() => navigate("/")}>Sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
