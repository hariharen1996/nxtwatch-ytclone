import { useEffect } from "react";
import { options } from "../utils/constants";
import { addVideoDetails } from "../redux/videoSlice";
import { useDispatch } from "react-redux";

const useVideosDetails = (id) => {
  const dispatch = useDispatch();
  const getVideoDetails = async () => {
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options);
    const data = await response.json();
    dispatch(addVideoDetails([data.video_details]));
  };

  useEffect(() => {
    getVideoDetails();
  }, []);
};

export default useVideosDetails;
