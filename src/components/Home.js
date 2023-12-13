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
      <div
        className={`flex font-serif ${
          theme ? "bg-white" : "bg-black"
        } w-full min-h-screen`}
      >
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
