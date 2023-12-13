import React from "react";
import { FaEye } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

const GamingItems = ({ gamingData }) => {
  const theme = useSelector((store) => store.config.isTheme);
  const { thumbnail_url, title, view_count } = gamingData;
  return (
    <div>
      <div
        className={`my-5 ${
          theme ? "text-black" : "text-white"
        } font-serif text-xs sm:text-sm`}
      >
        <LazyLoadImage
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          effect="blur"
          src={thumbnail_url}
          alt={title}
          className="w-32 sm:w-64"
        />
        <p className="my-2 font-bold">{title}</p>
        <div className="flex items-center gap-2">
          <span>{<FaEye size={20} />}</span>
          <span>{view_count}</span>
        </div>
      </div>
    </div>
  );
};

export default GamingItems;
