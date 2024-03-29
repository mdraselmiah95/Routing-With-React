import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      <div
        className={` ${
          pathname === "/" ? "max-w-[1600px] px-5" : "max-w-7xl"
        } max-w-[1600px] mx-auto`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
