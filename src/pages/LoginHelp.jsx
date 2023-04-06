import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { recoverAccount } from "../scripts/auth";
import logo from "../assets/images/netflix-logo.svg";

export default function LoginHelp() {
  const [email, setEmail] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    const result = await recoverAccount(email);

    if (result.status === true) {
      setFormSubmit(true);
    } else {
      alert(`Cannot recover account, ${result.message}!`);
    }
  }

  return (
    <div className="login-help">
      <div className="login-header">
        <img src={logo} alt="netflix-logo" className="netflix-logo" />
        <button>Sign in</button>
      </div>
      <div className="container">
        <h1 className="form-title">Forgot Password</h1>
        <p>
          We will send you an email with instructions on how to reset your
          password.
        </p>
        <form className="login-help-form" onSubmit={(event) => onSubmit(event)}>
          <input
            type="email"
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />
          {formSubmit && (
            <p className="submitted-message">An email with instructions on how to reset your password has been
              sent to {email}. Check your spam or junk folder if you don't see
              the email in your inbox.
            </p>
          )}
          <button className="submit-btn" type="submit">
            Email Me
          </button>
        </form>
      </div>
    </div>
  );
}
