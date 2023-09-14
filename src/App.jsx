import React from "react";
import { Route, Routes } from "react-router-dom";

import HeaderTop from "./components/header/HeaderTop";
import MainHeader from "./components/header/MainHeader";
import Footer from "./components/footer/Footer";
import routes from "./routes";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} element={element} key={key} />
  ));

  return (
    <ShoppingCartProvider>
      <HeaderTop />
      <MainHeader />
      <Routes>{routeComponents}</Routes>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
