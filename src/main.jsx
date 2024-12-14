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
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Faq from "./pages/Faq.jsx";
import BlogList from "./pages/BlogList.jsx";
import Author from "./pages/Author.jsx";
import NotFound from "./pages/NotFound.jsx";

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
  {
    path: "/login",
    element: <App element={<Login />} />,
  },
  {
    path: "/forgot-password",
    element: <App element={<ForgotPassword />} />,
  },
  {
    path: "/faq",
    element: <App element={<Faq />} />,
  },
  {
    path: "/blog",
    element: <App element={<BlogList />} />,
  },
  {
    path: "/author",
    element: <App element={<Author />} />,
  },
  {
    path: "*",
    element: <App element={<NotFound />} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
