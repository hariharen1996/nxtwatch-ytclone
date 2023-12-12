import { useDispatch } from "react-redux";
import { addSearchData } from "../redux/searchSlice";
import { options } from "../utils/constants";
import { useEffect, useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      getSearchQuery();
    }, 200);
    return () => clearTimeout(searchTimer);
  }, [search]);

  const getSearchQuery = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${search.toLowerCase()}`,
      options
    );
    const json = await response.json();

    dispatch(addSearchData(json));
  };

  return [search, setSearch];
};

export default useSearch;
