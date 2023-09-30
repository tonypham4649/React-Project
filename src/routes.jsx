// pages
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

const routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];

export default routes;
