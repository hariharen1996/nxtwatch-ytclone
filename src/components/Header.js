import { MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showTheme, showMenu } from "../redux/configSlice";
import { LOGO_DARKTHEME, LOGO_LIGHTTHEME } from "../utils/constants";

const Header = () => {
  const theme = useSelector((store) => store.config.isTheme);
  const menu = useSelector((store) => store.config.isMenu);
  const dispatch = useDispatch();

  return (
    <>
      <header
        className={` shadow-2xl ${
          theme ? "bg-[#f1f1f1]" : "bg-[#333]"
        } w-full p-2`}
      >
        <div className="flex justify-between items-center">
          <img
            src={theme ? LOGO_LIGHTTHEME : LOGO_DARKTHEME}
            alt="logo"
            className="w-32"
          />
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(showTheme())}
              className={` ${
                theme ? "text-black" : "text-white"
              } cursor-pointer`}
            >
              <MdLightMode size={20} />
            </button>
            <button
              onClick={() => dispatch(showMenu())}
              className={`${
                theme ? "text-black" : "text-white"
              } cursor-pointer hidden sm:block`}
            >
              {menu ? (
                <GiHamburgerMenu size={20} />
              ) : (
                <AiFillCloseSquare size={20} />
              )}
            </button>
            <button
              className={` ${
                theme ? "text-black" : "text-white"
              } cursor-pointer`}
            >
              <BsFillPersonLinesFill size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
