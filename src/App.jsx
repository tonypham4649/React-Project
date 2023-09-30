import React from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";

import MainHeader from "./components/header/MainHeader";
import HeaderTop from "./components/header/HeaderTop";
import Footer from "./components/footer/Footer";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { DataProvider } from "./context/DataContext";
import useDataFetcher from "./api/DataFetcher";
import Preloader from "./utils/Preloader";
import ErrorPage from "./utils/ErrorPage";

function App() {
  const { data, loading, error } = useDataFetcher();

  if (loading) return <Preloader />;
  if (error) return <ErrorPage />;

  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} element={element} key={key} />
  ));
  return (
    <DataProvider value={data}>
      <ShoppingCartProvider>
        <HeaderTop />
        <MainHeader />
        <Routes>{routeComponents}</Routes>
        <Footer />
      </ShoppingCartProvider>
    </DataProvider>
  );
}

export default App;
