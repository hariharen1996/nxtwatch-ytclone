import { useSelector } from "react-redux";
import Banner from "./Banner";
import { HiSave } from "react-icons/hi";
import SavedVideosItems from "./SavedVideosItems";
import { Link } from "react-router-dom";
import PageItemsError from "./PageItemsError";
import { SAVEDERROR_IMAGE_URL } from "../utils/constants";
import Loading from "./Loading";
import ScrollTop from "./ScrollTop";

const SavedVideosContainer = () => {
  const savedVideosData = useSelector((store) => store.saved?.savedVideos);

  return !savedVideosData ? (
    <Loading />
  ) : (
    <div className="w-full font-serif">
      <Banner
        icons={<HiSave size={25} className="text-[#ff0b37]" />}
        title={"Saved Videos"}
      />
      {savedVideosData.length !== 0 ? (
        <div className="flex flex-col flex-wrap gap-3 pb-10 w-full pl-2 pr-2 w-full">
          {savedVideosData.map((item) => (
            <Link to={`/${item.id}`} key={item.id}>
              {" "}
              <SavedVideosItems data={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center pt-10">
          <PageItemsError
            title={"No saved videos found"}
            image={SAVEDERROR_IMAGE_URL}
            altText={"No Saved Videos"}
            desc={" You can save your videos while watching them"}
          />
        </div>
      )}
      <ScrollTop />
    </div>
  );
};

export default SavedVideosContainer;
