import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseSquare } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {
  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  const changeShow = () => {
    setShow(!show);
  };
  return (
    <>
      <header className="bg-[#f1f1f1] w-full p-2">
        <div className="flex justify-between items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
            className="w-32"
          />

          <div className="flex items-center gap-4">
            <button onClick={changeShow} className="cursor-pointer">
              {show ? (
                <MdLightMode size={20} />
              ) : (
                <MdOutlineLightMode size={20} />
              )}
            </button>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="cursor-pointer hidden sm:block"
            >
              {showMenu ? (
                <GiHamburgerMenu size={20} />
              ) : (
                <AiFillCloseSquare size={20} />
              )}
            </button>
            <button className="cursor-pointer">
              <BsFillPersonLinesFill size={20} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
