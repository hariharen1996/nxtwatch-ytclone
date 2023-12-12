import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageItemsError = ({ image, title, desc, btnText, altText }) => {
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <div
      className={` ${
        theme ? "text-black" : "text-white"
      } font-serif text-center`}
    >
      <img src={image} alt={altText} className="w-64 sm:w-96 pl-5 mx-2" />
      <h1 className="text-xl sm:text-3xl my-3">{title}</h1>
      <p className="text-sm my-2">{desc}</p>
      {btnText && (
        <Link to="/" className="my-2">
          <button className="bg-[#f1f1f1]  text-black mx-3 p-2 rounded-md">
            {btnText}
          </button>
        </Link>
      )}
    </div>
  );
};

export default PageItemsError;
