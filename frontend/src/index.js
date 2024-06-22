import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css"
import LoginForm from "./pages/LoginForm";
import Landing from "./pages/Landing";
import RegistrationForm from "./pages/RegistrationForm";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./pages/AuthContext";
import AddQuestions from "./pages/AddQuestions";
import AddTest from "./pages/AddTest";
import AppearTest from "./pages/AppearTest";
import EvaluateResults from "./pages/EvaluateResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
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
  {
    path: "/addquestions",
    element: <AddQuestions/>
  },
  {
    path: "/addtest",
    element: <AddTest/>
  },
  {
    path: "/appeartest",
    element: <AppearTest/>
  },
  {
    path: "/evaluatetest",
    element: <EvaluateResults/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
