import React from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import "../css/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/RegistrationForm.css";
import { register } from "../api/auth";

const Register = () => {
  const [name, setname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords must match");
      return;
    }

    try {
      const data = await register(name, password);
      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        window.location.href = "/recipes";
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during registration");
    }
  };

  return (
    <>
      <h1 className="headline">Registration Form </h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
          </div>

          {/* <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div> */}

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

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="Formik-button">
            <button type="submit">Register</button>
            <h3>
              already have an account?{" "}
              <Link className="color-link" to="/login">
                sign in
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

// import React from "react";
// import { Navbar } from "./Navbar";
// import { Link } from "react-router-dom";
// import "../css/style.css";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import "../css/RegistrationForm.css";

// const Register = () => {
//   const [name, SetName] = React.useState("");

//   const [password, setPassword] = React.useState("");
//   const [confirmPassword, setConfirmPassword] = React.useState("");
//   const [error, setError] = React.useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords must match");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://192.168.2.108:3000/foodiez/api/auth/signup",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, password }),
//         }
//       );
//       const data = await response.json();
//       console.log("data", data);
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setError(null);
//         localStorage.setItem("token", data.token);
//         window.location.href = "/recipes";
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <h1 className="headline">Registration Form </h1>
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="name">Username</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               onChange={(event) => SetName(event.target.value)}
//             />
//           </div>

//           {/* <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </div> */}

//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>

//           <div>
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={(event) => setConfirmPassword(event.target.value)}
//             />
//           </div>

//           {error && <div className="error-message">{error}</div>}

//           <div className="Formik-button">
//             <button type="submit">Register</button>
//             <h3>
//               already have an account?{" "}
//               <Link className="color-link" to="/login">
//                 sign in
//               </Link>
//             </h3>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;
