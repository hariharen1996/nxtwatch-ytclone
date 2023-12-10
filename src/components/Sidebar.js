import { NavLink } from "react-router-dom";
import { navItems } from "../utils/constants";

const Sidebar = () => {
  return (
    <>
      <aside className="flex hidden sm:block">
        <div className="shadow-xl bg-[#f1f1f1] h-screen p-5 pt-8 duration-300 w-16">
          <ul className="pt-2">
            {navItems.map((item) => (
              <NavLink
                to={item.navLink}
                key={item.id}
                className={({ isActive }) => {
                  return isActive ? "text-red-700" : "text-gray-500";
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
