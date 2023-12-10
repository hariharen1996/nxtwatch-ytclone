import { NavLink } from "react-router-dom";
import { navItems } from "../utils/constants";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <>
      <aside className="flex hidden sm:block">
        <div
          className={`shadow-xl ${
            theme ? "bg-[#f1f1f1]" : "bg-[#333]"
          }  h-screen p-5 pt-8 duration-300 w-16`}
        >
          <ul className="pt-2">
            {navItems.map((item) => (
              <NavLink
                to={item.navLink}
                key={item.id}
                className={({ isActive }) => {
                  return isActive ? "text-[#ff0b37]" : "text-gray-500";
                }}
              >
                <li className="flex items-center gap-2 cursor-pointer my-5">
                  <span>{item.navIcon}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
