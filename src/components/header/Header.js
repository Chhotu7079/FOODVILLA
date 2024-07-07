import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/foodLogo.jpeg";
import SideNav from "./SideNav";

export const Title = () => (
  <Link to="/">
    <div className=" w-[100px] m-3">
      <img src={logo} alt="Logo Img " />
    </div>
  </Link>
);

const HeaderComponent = () => {
  return (
    <div className="flex flex-row shadow-2xl justify-between md:flex-col md:h-[100vh]">
      <Title />
      <div className="w-[50%] flex justify-center items-center md:h-[50%] md:w-full">
        <SideNav />
      </div>
      <div className="w-[20%]"></div>
    </div>
  );
};

export default HeaderComponent;
