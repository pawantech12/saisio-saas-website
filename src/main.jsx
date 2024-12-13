import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Contact from "./pages/Contact.jsx";
import Integration from "./pages/Integration.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/pricing",
    element: <App element={<Pricing />} />,
  },
  {
    path: "/contact",
    element: <App element={<Contact />} />,
  },
  {
    path: "/integrations",
    element: <App element={<Integration />} />,
  },
  {
    path: "/sign-up",
    element: <App element={<Register />} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
