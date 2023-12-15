import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <div className="w-full">
      <div
        className={`flex justify-center items-center p-2 ${
          theme ? "bg-[#f2f2f2]" : "bg-[#444]"
        }`}
      >
        <h1 className={`flex gap-2 ${theme ? "text-black" : "text-white"}`}>
          created by &copy; <span className="text-[#ff0b37]"> Hariharen</span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
