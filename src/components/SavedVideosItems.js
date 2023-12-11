import { useSelector } from "react-redux"


const SavedVideosItems = ({data}) => {
    const { channel,thumbnail_url,view_count, description,title } = data
    const theme = useSelector((store) => store.config.isTheme)
    console.log(typeof data.id)
   return(
      <div className={`flex flex-col sm:flex-row gap-2 pt-5 ${theme ? "text-black" : "text-white"}`}>
        <img src={thumbnail_url} alt={title} className="w-full sm:w-64" />
         <div>
            <h1 className="my-2 font-bold text-md">{channel?.name}</h1>
            <p>@{channel?.name}</p>
            <div className="flex gap-2 my-2">
                <p>{channel?.subscriber_count} subscribers</p>
                <p>{view_count} views</p> 
            </div>
            <p className="my-2">{description}</p>
         </div>
      </div>
   )
}

export default SavedVideosItems