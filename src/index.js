import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import the new methods
import reportWebVitals from "./reportWebVitals";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import CategoryList from "./components/CategoryList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeItem from "./components/RecipeItem";
import RecipeList from "./components/RecipeList";
import User from "./components/User";
import RecipeDetailTest from "./components/RecipeDetailTest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />,
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Navbar />
        <Register />,
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Login />,
      </div>
    ),
  },
  {
    path: "/categories",
    element: (
      <div>
        <Navbar />
        <CategoryList />
      </div>
    ),
  },
  {
    path: "/recipes",
    element: (
      <div>
        <Navbar />
        <RecipeList />
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <Navbar />
        <User />
      </div>
    ),
  },
  {
    path: "/details/:recipeName",
    element: (
      <div>
        <Navbar />
        <RecipeDetailTest />
      </div>
    ),
  },
]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
