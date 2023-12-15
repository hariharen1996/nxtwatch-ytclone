import {
  AiFillHome,
  AiFillFire,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { FaShare } from "react-icons/fa";
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
    navLink: "/saved-videos",
    navIcon: <HiSave size={25} />,
  },
];

export const LOGO_DARKTHEME =
  "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png";
export const LOGO_LIGHTTHEME =
  "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png";

export const JWT_TOKEN = process.env.REACT_APP_JWT_TOKEN;
export const VIDEO_API_URL = "https://apis.ccbp.in/videos";

export const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${JWT_TOKEN}`,
  },
};

export const TRENDING_API_URL = "https://apis.ccbp.in/videos/trending";
export const GAMING_API_URL = "https://apis.ccbp.in/videos/gaming";

export const SAVEDERROR_IMAGE_URL =
  "https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png";

export const SEARCH_IMAGE_URL =
  "https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png";

export const NOTFOUND_LIGHTURL =
  "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png";
export const NOTFOUND_DARKURL =
  "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png";

export const ICONS_LISTS = [
  {
    id: 1,
    name: "like",
    icons: <AiFillLike />,
  },
  {
    id: 2,
    name: "Dislike",
    icons: <AiFillDislike />,
  },
  {
    id: 3,
    name: "Share",
    icons: <FaShare />,
  },
];
