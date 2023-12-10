import { useEffect } from "react";
import { GAMING_API_URL, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGamingVideos } from "../redux/videoSlice";

const useGamingVideos = () => {
  const dispatch = useDispatch();
  const getGamingVideos = async () => {
    const response = await fetch(GAMING_API_URL, options);
    const data = await response.json();
    dispatch(addGamingVideos(data));
  };

  useEffect(() => {
    getGamingVideos();
  }, []);
};

export default useGamingVideos;
