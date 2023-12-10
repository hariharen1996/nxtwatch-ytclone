import React from "react";
import { navItems } from "../utils/constants";
import { NavLink } from "react-router-dom";

const VideosContainer = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center justify-center pt-5 w-full gap-2 cursor-pointer">
        {navItems.map((nav) => (
          <NavLink
            key={nav.id}
            to={nav.navLink}
            className={({ isActive }) => {
              return isActive
                ? "bg-red-700 text-white p-2 rounded-md"
                : "bg-[#f1f1f1] text-black p-2 rounded-md";
            }}
          >
            <button className="mx-2 text-sm sm:text-md">{nav.navName}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
