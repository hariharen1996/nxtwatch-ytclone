import React from "react";
import { useSelector } from "react-redux";
import { IoTime } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";

const VideoItems = ({ data }) => {
  const theme = useSelector((store) => store.config.isTheme);
  const {
    channel: { name, profile_image_url },
    title,
    published_at,
    thumbnail_url,
    view_count,
  } = data;

  return (
    <div>
      <div
        className={`my-5 ${
          theme ? "text-black" : "text-white"
        } font-serif text-xs sm:text-sm`}
      >
        <img src={thumbnail_url} alt={title} className="w-full" />
        <p className="my-2 font-bold">{title}</p>

        <div className="flex items-start gap-2">
          <div>
            <img src={profile_image_url} alt={title} className="w-10" />
          </div>
          <div>
            <p className="my-1">{name}</p>
            <div className="flex  gap-1">
              <div className="flex items-center gap-2">
                <span>{<AiOutlineLike size={20} />}</span>
                <span>{view_count}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{<IoTime size={20} />}</span>
                {published_at}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItems;
