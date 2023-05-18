import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/Layout/MainLayout.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import SingUp from "./components/Pages/SingUp";
import AuthProvider from "./AuthProvider/AuthProvider";
import SingIn from "./components/Pages/SingIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "sing-up",
        element: <SingUp></SingUp>,
      },
      {
        path: "sing-in",
        element: <SingIn></SingIn>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
