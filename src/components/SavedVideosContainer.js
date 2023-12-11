import { useSelector } from "react-redux"
import Banner from "./Banner"
import { HiSave } from "react-icons/hi"
import SavedVideosItems from "./SavedVideosItems"
import { Link } from "react-router-dom"
import PageItemsError from "./PageItemsError"
import { SAVEDERROR_IMAGE_URL } from "../utils/constants"


const SavedVideosContainer = () => {
    const savedVideosData = useSelector((store) => store.saved?.savedVideos)
    
    return(
       <div className="w-full font-serif">
        <Banner
          icons={<HiSave size={25} className="text-[#ff0b37]" />}
          title={"Saved Videos"}
        />
      {savedVideosData.length !== 0 ? (
        <div className="flex flex-col flex-wrap gap-3 pb-10 w-full pl-2 pr-2 w-full">
          {savedVideosData.map((item) => (
          <Link to={`/${item.id}`}> <SavedVideosItems key={item.id} data={item} /></Link>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-center items-center pt-10">
          <PageItemsError title={"No saved videos found"} image={SAVEDERROR_IMAGE_URL} altText={"No Saved Videos"} desc={" You can save your videos while watching them"} />
        </div>
      )}  
        
      </div>
    )
}


export default SavedVideosContainer