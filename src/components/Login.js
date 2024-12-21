import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import "../css/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/RegistrationForm.css";
import { login } from "../api/auth";

const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === "") {
      setError("Password is required");
      return;
    }
    try {
      const data = await login(name, password);
      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        localStorage.setItem("token", data.token);
        window.location.href = "/recipes";
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during login");
    }
  };

  return (
    <>
      <h1 className="headline">Login Form </h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="Formik-button">
            <button type="submit">Login</button>
            <h3>
              You don't have an account?{" "}
              <Link className="color-link" to="/register">
                sign up
              </Link>
            </h3>
          </div>
        </form>
        {error && <div className="error-message">{error}</div>}
      </div>
    </>
  );
};

export default Login;
