import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage.jsx";
import { About } from "./pages/About/About.jsx";
import { Gallery } from "./components/Gallery/Gallery.jsx";

export const pages = [
  { path: "/", element: <LandingPage /> },
  { path: "/om-mig", element: <About /> },
  { path: "/galleri", element: <Gallery /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
