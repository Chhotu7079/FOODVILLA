import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Container = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-y-scroll">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Container;
