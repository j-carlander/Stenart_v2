import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage.jsx";
import { About } from "./pages/About/About.jsx";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { AdminImage } from "./components/AdminImage/AdminImage.jsx";
import { AdminPage } from "./pages/Admin/AdminPage.jsx";
import { AdminExhibitions } from "./components/AdminExhibitions/AdminExhibitions.jsx";
import { ExhibitionPage } from "./pages/ExhibitionPage/ExhibitionPage.jsx";
import { Login } from "./components/Login/Login.jsx";

export const pages = [
  { path: "/", element: <LandingPage /> },
  { path: "/om-mig", element: <About /> },
  { path: "/galleri", element: <Gallery /> },
  { path: "/utstallningar", element: <ExhibitionPage /> },
];

export const adminPages = [
  { path: "/admin", element: <AdminImage /> },
  { path: "/admin/login", element: <Login /> },
  { path: "/admin/utstallningar", element: <AdminExhibitions /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: adminPages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
