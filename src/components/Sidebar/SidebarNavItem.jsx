import React from "react";
import { LuHome, LuUsers, LuFilePlus, LuFileText } from "react-icons/lu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SidebarNavItem = () => {
  const { user } = useSelector((state) => state.auth);

  const navItems = [
    {
      id: 1,
      title: "Beranda",
      icon: <LuHome size={18} className="text-gray-400" />,
      link: "/dashboard",
      end: true,
    },
    ...(user?.data?.role === "kaprodi"
      ? [
          {
            id: 2,
            title: "Akun",
            icon: <LuUsers size={18} className="text-gray-400" />,
            link: "/dashboard/akun",
          },
        ]
      : []),
    {
      id: 3,
      title: "Portofolio",
      icon: <LuFileText size={18} className="text-gray-400" />,
      link: "/dashboard/portofolio",
    },
    {
      id: 4,
      title: user?.data?.role === "dosen" ? "Unggah Portofolio" : "Permintaan",
      icon: <LuFilePlus size={18} className="text-gray-400" />,
      link:
        user?.data?.role === "kaprodi"
          ? "/dashboard/permintaan"
          : "/dashboard/unggah",
    },
  ];

  return (
    <ul className="flex flex-col space-y-1">
      {navItems.map((navItem) => (
        <React.Fragment key={navItem.id}>
          <li>
            <NavLink
              to={navItem.link}
              end={navItem.end || false}
              className={({ isActive }) =>
                `flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-lg hover:bg-[#f5f5f9] focus:outline-none ${
                  isActive ? "bg-[#f5f5f9]" : ""
                }`
              }
            >
              {navItem.icon}
              <span>{navItem.title}</span>
            </NavLink>
          </li>
          {user && user.data.role === "kaprodi" ? (
            <div>
              {navItem.id === 2 && (
                <div className="flex items-center">
                  <div className="border-l h-10 rotate-90 origin-left border-gray-400 pr-7"></div>
                  <div className="uppercase text-xs font-light text-gray-400">
                    Pages
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {navItem.id === 1 && (
                <div className="flex items-center">
                  <div className="border-l h-10 rotate-90 origin-left border-gray-400 pr-7"></div>
                  <div className="uppercase text-xs font-light text-gray-400">
                    Pages
                  </div>
                </div>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default SidebarNavItem;
