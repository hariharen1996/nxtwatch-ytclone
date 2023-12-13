import { useSelector } from "react-redux";
import { NOTFOUND_DARKURL, NOTFOUND_LIGHTURL } from "../utils/constants";

const RouteError = () => {
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex items-center flex-col">
        <img
          src={theme ? NOTFOUND_LIGHTURL : NOTFOUND_DARKURL}
          alt="not found"
          className="w-64 mx-2 sm:w-96"
        />
        <h1 className={`text-lg my-2 ${!theme ? "text-white" : "text-black"}`}>
          Page Not Found
        </h1>
        <p className={`text-sm my-2 ${!theme ? "text-white" : "text-black"}`}>
          We are sorry, the page you requested cannot be found.
        </p>
      </div>
    </div>
  );
};

export default RouteError;
