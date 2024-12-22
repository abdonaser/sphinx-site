import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/Public/ErrorPage";
const Layout = lazy(() => import("./Pages/Layout"));
const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Projects = lazy(() => import("./Pages/Projects"));
const Services = lazy(() => import("./Pages/Services"));
const WhyUs = lazy(() => import("./Pages/WhyUs"));
const routes = [
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "aboutUS", element: <AboutUs /> },
      { path: "contactUS", element: <ContactUs /> },
      { path: "whyUs", element: <WhyUs /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
