import React from "react";
import useGamingVideos from "../hooks/useGamingVideos";
import { useSelector } from "react-redux";
import GamingItems from "./GamingItems";
import Banner from "./Banner";
import { SiYoutubegaming } from "react-icons/si";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

const GamingContainer = () => {
  const data = useSelector((store) => store.video.gamingVideos);
  useGamingVideos();

  return !data.videos ? (
    <Loading />
  ) : (
    <div className="w-full">
      <Banner
        icons={<SiYoutubegaming size={25} className="text-[#ff0b37]" />}
        title={"Gaming"}
      />
      <div className="flex justify-center items-center flex-wrap gap-3 pl-1 pr-1 pt-10 pb-10 w-full">
        {data?.videos?.map((items) => (
          <Link to={`/${items.id}`} key={items.id}>
            <GamingItems gamingData={items} />
          </Link>
        ))}
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default GamingContainer;
