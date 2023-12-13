import React from "react";
import { SEARCH_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useVideosData from "../hooks/useVideosData";
import { useSelector } from "react-redux";
import VideoItems from "./VideoItems";
import PageItemsError from "./PageItemsError";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import { FaUserCircle } from "react-icons/fa";
import Loading from "./Loading";

const VideosContainer = () => {
  const videoData = useSelector((store) => store.video.videos);
  const data = useSelector((store) => store.search?.searchData);
  const authuser = useSelector((store) => store?.users);

  useVideosData();

  if (!videoData.videos) return <Loading />;
  return (
    <div className="z-10 w-full mx-2 my-2">
      {authuser && (
        <div>
          <Banner
            title={authuser?.displayName}
            icons={<FaUserCircle size={25} className="text-[#ff0b37]" />}
          />
        </div>
      )}
      <div>
        <div className="relative z-10 top-0 h-20">
          <SearchBar />
        </div>
      </div>
      {data?.videos?.length !== 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-10 pb-10 w-full">
          {data?.videos?.map((items) => (
            <Link to={`/${items.id}`} key={items.id}>
              <VideoItems data={items} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="pt-2 flex justify-center items-center">
          <PageItemsError
            title={"No Search Results Found"}
            image={SEARCH_IMAGE_URL}
            altText="no videos"
            desc="Try different key words or remove search filter"
          />
        </div>
      )}
    </div>
  );
};

export default VideosContainer;
