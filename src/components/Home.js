import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex font-serif">
        <Sidebar />
        <div className={`${theme ? "bg-white" : "bg-black"} w-full h-screen`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
