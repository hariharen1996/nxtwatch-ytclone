import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/lazy";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";

const VideoDetailsCard = ({ data, isSaved, isUnSaved, isVideosPresent }) => {
  const { channel, description, published_at, video_url, view_count, title } =
    data;
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <>
      <div className="w-full">
        <ReactPlayer
          url={video_url}
          width="100%"
          origin="http://localhost:3000/"
          controls
        />
      </div>
      <div className="pt-2">
        <div
          className={`${
            theme ? "text-black bg-[#f1f1f1]" : "text-white bg-[#333]"
          }`}
        >
          <div className="p-5">
            <h1 className="font-bold mx-2 my-3">{title}</h1>
            <div className="flex flex-col sm:flex-row justify-between mx-2 sm:items-center pt-3">
              <div className="flex items-center gap-2">
                <img
                  src={channel?.profile_image_url}
                  alt={channel?.name}
                  className="w-12 rounded-full"
                />

                <div>
                  <p>{channel?.name}</p>

                  <p>{channel?.subscriber_count}</p>
                </div>
                <button
                  onClick={!isVideosPresent ? isSaved : isUnSaved}
                  disabled={isVideosPresent}
                  className="bg-black text-white p-2 rounded-lg text-xs cursor-pointer"
                >
                  {isVideosPresent ? "Saved" : "Save"}
                </button>
              </div>
              <div className="flex gap-2 pt-4 sm:pt-0 my-2 text-sm">
                <div className="flex p-2 bg-black text-white rounded-md items-center gap-2 cursor-pointer">
                  <AiFillLike /> like
                </div>
                <div className="flex p-2 bg-black text-white rounded-md items-center gap-2 cursor-pointer">
                  <AiFillDislike /> Dislike
                </div>
                <div className="flex p-2 bg-black text-white rounded-md items-center gap-2 cursor-pointer">
                  <FaShare /> Share
                </div>
              </div>
            </div>
            <div className="p-2 w-full pl-2 pr-2">
              <div className="flex gap-2">
                <p>{view_count} views</p>
                <p>{published_at}</p>
              </div>
              <p className="my-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailsCard;
