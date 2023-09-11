// pages
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ContactUs from "./pages/ContactUs/ContactUs";
// import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
];

export default routes;
