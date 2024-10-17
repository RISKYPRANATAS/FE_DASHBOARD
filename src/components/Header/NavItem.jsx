import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser, reset } from "../../features/authSlice";

const NavItem = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(LogoutUser()).then(() => {
      dispatch(reset());
      window.location.href = "http://localhost:5173/";
    });
  };

  return (
    <div className="w-full flex items-center justify-end ms-auto gap-x-1 md:gap-x-3">
      <div className="flex flex-row items-center justify-end gap-1">
        <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
          <button
            id="hs-dropdown-account"
            type="button"
            className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <img
              className="shrink-0 size-[38px] rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </button>

          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-account"
          >
            <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
              <p className="text-sm text-gray-500">Login sebagai</p>
              <p className="text-sm font-medium text-gray-800 capitalize">
                {user?.data?.role}
              </p>
            </div>
            <div
              className="p-1.5 space-y-0.5 cursor-pointer"
              onClick={handleLogout}
            >
              <span className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                <IoIosLogOut size={18} color="#000" />
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
