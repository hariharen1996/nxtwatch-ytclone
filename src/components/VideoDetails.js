import React from "react";
import useVideosDetails from "../hooks/useVideosDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoDetailsCard from "./VideoDetailsCard";
import { addSavedVideos } from "../redux/savedVideosSlice";
import Loading from "./Loading";

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
    <div className="w-screen">
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
  );
};

export default VideoDetails;
