import { useEffect } from "react";
import { TRENDING_API_URL, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingVideos } from "../redux/videoSlice";

const useTrendingVideos = () => {
  const dispatch = useDispatch();
  const getTrendingVideos = async () => {
    const response = await fetch(TRENDING_API_URL, options);
    const data = await response.json();
    dispatch(addTrendingVideos(data));
  };

  useEffect(() => {
    getTrendingVideos();
  }, []);
};

export default useTrendingVideos;
