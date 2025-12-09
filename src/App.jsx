import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, RouteScroller } from "./components";
import useFancybox from "./hooks/useFancybox";

const App = () => {
  // custom hook to initialize Fancybox globally
  useFancybox();
  
  return (
    <>
      <RouteScroller />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
