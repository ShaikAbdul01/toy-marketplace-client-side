import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/Layout/MainLayout.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import SingUp from "./components/Pages/SingUp";
import AuthProvider from "./AuthProvider/AuthProvider";
import SingIn from "./components/Pages/SingIn";
import AllToys from "./components/Pages/AllToys/AllToys";
import CarDetails from "./components/Pages/AllToys/CarDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddToys from "./components/Pages/AddToys/AddToys";
import Blog from "./components/Pages/Blog";
import MyToys from "./components/Pages/AddToys/MyToys";
import ErrorPage from "./components/Pages/ErrorPage";
import Updates from "./components/Pages/Updates/Updates";
import CategoryDetails from "./components/Pages/CategoryDetails";
// import MyToys from "./components/Pages/AddToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "add-toys",
        element: <AddToys></AddToys>,
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "my-toys/updates/:id",
        element: <Updates></Updates>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addToys/id/${params.id}`),
      },
      {
        path:"/categoryDetails/:categoryName/:subCategoryName/:toyName/:toyId",
        element:<PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute> ,
        loader:({ params }) =>
        fetch(
          `http://localhost:5000/carsToy/${params.categoryName}/${params.subCategoryName}/${params.toyName}`
        ).then((res) => res.json())
      },
      ,
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
