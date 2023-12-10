import React from "react";
import { AiFillFire } from "react-icons/ai";
import { useSelector } from "react-redux";
import useTrendingVideos from "../hooks/useTrendingVideos";
import VideoItems from "./VideoItems";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const TrendingContainer = () => {
  const theme = useSelector((store) => store.config.isTheme);
  const videoData = useSelector((store) => store.video.trendingVideos);
  const headerBg = theme ? "bg-[#d7dfe9]" : "bg-[#212121]";
  const radiusBg = theme ? "bg-[#e2e8f0]" : "bg-[#181818]";

  useTrendingVideos();

  return (
    <div className="w-full">
      <Banner
        icons={<AiFillFire size={25} className="text-[#ff0b37]" />}
        title={"Trending"}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-10 w-full pl-2 pr-2">
        {videoData?.videos?.map((items) => (
          <Link to={`video-details/${items.id}`} key={items.id}>
            <VideoItems data={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingContainer;
