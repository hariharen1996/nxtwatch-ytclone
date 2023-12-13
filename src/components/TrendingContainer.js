import React from "react";
import { AiFillFire } from "react-icons/ai";
import { useSelector } from "react-redux";
import useTrendingVideos from "../hooks/useTrendingVideos";
import VideoItems from "./VideoItems";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Loading from "./Loading";

const TrendingContainer = () => {
  const videoData = useSelector((store) => store.video.trendingVideos);

  useTrendingVideos();

  return !videoData.videos ? (
    <Loading />
  ) : (
    <div className="w-full">
      <Banner
        icons={<AiFillFire size={25} className="text-[#ff0b37]" />}
        title={"Trending"}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-10 w-full pl-2 pr-2">
        {videoData?.videos?.map((items) => (
          <Link to={`/${items.id}`} key={items.id}>
            <VideoItems data={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingContainer;
