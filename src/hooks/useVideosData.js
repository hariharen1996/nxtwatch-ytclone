import { useEffect } from "react";
import { VIDEO_API_URL, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../redux/videoSlice";

const useVideosData = () => {
  const dispatch = useDispatch();

  const getVideosData = async () => {
    const response = await fetch(VIDEO_API_URL, options);
    const data = await response.json();
    dispatch(addVideos(data));
  };

  useEffect(() => {
    getVideosData();
  }, []);
};

export default useVideosData;
