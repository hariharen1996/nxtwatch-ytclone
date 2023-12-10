import React from "react";
import { navItems } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useVideosData from "../hooks/useVideosData";
import { useSelector } from "react-redux";
import VideoItems from "./VideoItems";

const VideosContainer = () => {
  const videoData = useSelector((store) => store.video.videos);
  useVideosData();
  console.log(videoData);

  if (!videoData.videos) return null;

  return (
    <div className="w-full mx-2 my-2">
      <div className="flex flex-wrap items-center justify-center pt-5 w-full gap-2 cursor-pointer">
        {navItems.map((nav) => (
          <NavLink
            key={nav.id}
            to={nav.navLink}
            className={({ isActive }) => {
              return isActive
                ? "bg-[#ff0b37] text-white p-2 rounded-md"
                : "bg-[#f1f1f1] text-black p-2 rounded-md";
            }}
          >
            <button className="mx-2 text-sm sm:text-md">{nav.navName}</button>
          </NavLink>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-10 pb-10 w-full">
        {videoData?.videos?.map((items) => (
          <Link to={`video-details/${items.id}`} key={items.id}>
            <VideoItems data={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
