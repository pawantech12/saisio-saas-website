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
import Feature from "./pages/Feature.jsx";
import About from "./pages/About.jsx";
import PasswordProtected from "./pages/PasswordProtected.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import SingleIntegration from "./pages/SingleIntegration.jsx";

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
    path: "/feature",
    element: <App element={<Feature />} />,
  },
  {
    path: "/about",
    element: <App element={<About />} />,
  },
  {
    path: "/single-blog",
    element: <App element={<SingleBlog />} />,
  },
  {
    path: "/single-integration",
    element: <App element={<SingleIntegration />} />,
  },
  {
    path: "*",
    element: <App element={<NotFound />} />,
  },
  {
    path: "/401",
    element: <PasswordProtected />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
