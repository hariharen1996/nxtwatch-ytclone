import { AiFillHome, AiFillFire } from "react-icons/ai";
import { HiSave } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";

export const navItems = [
  {
    id: 1,
    navName: "Home",
    navLink: "/",
    navIcon: <AiFillHome size={25} />,
  },
  {
    id: 2,
    navName: "Trending",
    navLink: "/trending",
    navIcon: <AiFillFire size={25} />,
  },
  {
    id: 3,
    navName: "Gaming",
    navLink: "gaming",
    navIcon: <SiYoutubegaming size={25} />,
  },
  {
    id: 4,
    navName: "Saved Videos",
    navLink: "/savedvideos",
    navIcon: <HiSave size={25} />,
  },
];