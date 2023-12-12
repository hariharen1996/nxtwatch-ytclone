import React from "react";
import { SEARCH_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useVideosData from "../hooks/useVideosData";
import { useSelector } from "react-redux";
import VideoItems from "./VideoItems";
import PageItemsError from "./PageItemsError";
import SearchBar from "./SearchBar";

const VideosContainer = () => {
  const videoData = useSelector((store) => store.video.videos);
  const data = useSelector((store) => store.search?.searchData);

  useVideosData();

  if (!videoData.videos) return null;
  return (
    <div className="z-10 w-full mx-2 my-2">
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
