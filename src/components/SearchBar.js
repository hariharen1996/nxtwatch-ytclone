import { useSelector } from "react-redux";
import useSearch from "../hooks/useSearch";

const SearchBar = () => {
  const [search, setSearch] = useSearch();
  const theme = useSelector((store) => store.config.isTheme);

  return (
    <div>
      <div className="search pt-10 flex justify-center items-center">
        <input
          type="text"
          className={` ${
            theme ? "bg-[#f1f1f1] text-black" : "bg-[#333] text-white"
          } w-full lg:w-6/12 p-1 border border-gray-400 rounded-md`}
          placeholder="search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
