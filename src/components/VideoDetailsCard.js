import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/lazy";
import { ICONS_LISTS } from "../utils/constants";

const VideoDetailsCard = ({ data, isSaved, isUnSaved, isVideosPresent }) => {
  const { channel, description, published_at, video_url, view_count, title } =
    data;
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <>
      <div className="w-full lg:border border-gray-700 rounded-lg">
        <ReactPlayer
          url={video_url}
          width="100%"
          origin="http://localhost:3000/"
          controls
        />
      </div>
      <div className="pt-2">
        <div
          className={`rounded-lg ${
            theme ? "text-black bg-[#f1f1f1]" : "text-white bg-[#333]"
          }`}
        >
          <div className="p-5">
            <h1 className="font-bold mx-2 my-3">{title}</h1>
            <div className="flex flex-col mx-2 pt-3">
              <div className="pb-2 flex items-center gap-2">
                <img
                  src={channel?.profile_image_url}
                  alt={channel?.name}
                  className="w-12 rounded-full"
                />

                <div>
                  <p>{channel?.name}</p>

                  <p>{channel?.subscriber_count}</p>
                </div>
                <div className="flex items-center bg-black text-white rounded-lg cursor-pointer">
                  <button
                    onClick={!isVideosPresent ? isSaved : isUnSaved}
                    disabled={isVideosPresent}
                    className="p-2"
                  >
                    {isVideosPresent ? "Saved" : "Save"}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                {ICONS_LISTS.map((items) => (
                  <button
                    key={items.id}
                    className="flex items-center rounded-md cursor-pointer p-2 gap-2 bg-black text-white "
                  >
                    {items.icons} {items.name}
                  </button>
                ))}
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
