import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Landing from "./pages/Landing";
import RegistrationForm from "./pages/RegistrationForm";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./pages/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
