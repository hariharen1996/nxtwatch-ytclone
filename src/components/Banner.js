import React from "react";
import { useSelector } from "react-redux";

const Banner = ({ icons, title }) => {
  const theme = useSelector((store) => store.config.isTheme);
  const headerBg = theme ? "bg-[#d7dfe9]" : "bg-[#212121]";
  const radiusBg = theme ? "bg-[#e2e8f0]" : "bg-[#181818]";

  return (
    <div>
      <div className={`flex items-center gap-2 ${headerBg} p-2`}>
        <div className={` ${radiusBg}  p-3 rounded-full`}>
          <p>{icons}</p>
        </div>
        <h1
          className={`${theme ? "text-black" : "text-white"} font-bold text-md`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
