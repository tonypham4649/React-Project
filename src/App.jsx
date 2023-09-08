import React from "react";
import { Route, Routes } from "react-router-dom";

import HeaderTop from "./components/header/HeaderTop";
import MainHeader from "./components/header/MainHeader";
import Footer from "./components/footer/Footer";
import routes from "./routes";

function App() {
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} element={element} key={key} />
  ));

  return (
    <>
      <HeaderTop />
      <MainHeader />
      <Routes>{routeComponents}</Routes>
      <Footer />
    </>
  );
}

export default App;
