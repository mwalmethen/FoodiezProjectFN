import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import "../css/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/RegistrationForm.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1 className="headline">Login Form </h1>
      <div className="form-container">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error-message">{formik.errors.password}</div>
            ) : null}
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
      </div>
    </>
  );
};

export default Login;
