import { MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showTheme, showMenu } from "../redux/configSlice";
import { LOGO_DARKTHEME, LOGO_LIGHTTHEME, navItems } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";

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
          <Link to="/">
            <img
              src={theme ? LOGO_LIGHTTHEME : LOGO_DARKTHEME}
              alt="logo"
              className="w-32"
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
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
              } cursor-pointer bloack sm:hidden transition-all duration-300`}
            >
              {!menu ? (
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
      {menu && (
        <div
          className={`block sm:hidden transition-all duration-300 ${
            theme ? "bg-[#f1f1f1]" : "bg-[#333]"
          } w-full pt-3 p-2 h-16`}
        >
          <div className="flex gap-2">
            {navItems.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.navLink}
                className={({ isActive }) => {
                  return isActive
                    ? "bg-[#ff0b37] p-1 text-white animate-bounce rounded-md"
                    : `${
                        theme ? "bg-white text-black" : "bg-black text-white"
                      } p-1 text-black rounded-md`;
                }}
              >
                <button className={`mx-1 text-xs`}>{nav.navName}</button>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
