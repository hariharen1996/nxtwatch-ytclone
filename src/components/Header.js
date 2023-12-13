import { MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showTheme, showMenu } from "../redux/configSlice";
import { LOGO_DARKTHEME, LOGO_LIGHTTHEME, navItems } from "../utils/constants";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUserInfo, removeUser } from "../redux/userSlice";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const theme = useSelector((store) => store.config.isTheme);
  const menu = useSelector((store) => store.config.isMenu);
  const authuser = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUserInfo({ uid, displayName, email, photoURL }));
      } else {
        dispatch(removeUser());
      }
    });

    return () => unSubscribe();
  }, []);

  return (
    <>
      <header
        className={`shadow-2xl ${
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
          <div className="flex items-center gap-4 sm:gap-3">
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
            {!authuser && (
              <button
                className={` ${
                  theme ? "text-black" : "text-white"
                } cursor-pointer`}
              >
                <Link to="/login">
                  <BsFillPersonLinesFill size={20} />
                </Link>
              </button>
            )}
            {authuser && (
              <button
                className="text-[#ff0b37] cursor-pointer"
                onClick={handleSignout}
              >
                <Link to="/login">
                  <FaSignOutAlt size={20} />
                </Link>
              </button>
            )}
          </div>
        </div>
      </header>
      {menu && (
        <div
          className={`block sm:hidden transition-all duration-300 ${
            theme ? "bg-[#f1f1f1]" : "bg-[#333]"
          } w-full pt-3 p-2 h-25 xs:h-16`}
        >
          <div className="flex flex-wrap gap-4">
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
