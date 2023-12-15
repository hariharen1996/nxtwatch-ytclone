import React from "react";
import useVideosDetails from "../hooks/useVideosDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoDetailsCard from "./VideoDetailsCard";
import { addSavedVideos } from "../redux/savedVideosSlice";
import Loading from "./Loading";
import LiveChat from "./LiveChat";
import ScrollTop from "./ScrollTop";

const VideoDetails = () => {
  const { id } = useParams();
  const specificVideos = useSelector((store) => store?.video?.specificVideos);
  const savedVideos = useSelector((store) => store?.saved?.savedVideos);
  const dispatch = useDispatch();

  useVideosDetails(id);

  const isSaved = () => {
    dispatch(addSavedVideos(specificVideos));
  };
  const isVideosPresent = savedVideos.some((item) => item.id === id);

  const isUnSaved = () => {
    const unSavedVideos = savedVideos.filter((item) => item.id !== id);
    dispatch(addSavedVideos(unSavedVideos));
  };

  return !specificVideos ? (
    <Loading />
  ) : (
    <div className="w-screen flex flex-col gap-2 lg:flex-row lg:py-10 lg:mx-10">
      <div className="w-full lg:w-6/12">
        {specificVideos?.map((item) => (
          <VideoDetailsCard
            key={item.id}
            data={item}
            isVideosPresent={isVideosPresent}
            isSaved={isSaved}
            isUnSaved={isUnSaved}
          />
        ))}
      </div>
      <div className="w-full pl-2 pr-2 lg:pl-0 lg:pr-0 pb-10 lg:pb-0 lg:w-6/12 pt-10 lg:pt-0">
        <LiveChat />
      </div>
      <div>
        <ScrollTop />
      </div>
    </div>
  );
};

export default VideoDetails;
