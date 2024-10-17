import React from "react";
import HeaderSection from "../../components/Header/HeaderSection";
import { Outlet, useNavigate } from "react-router-dom";
import SidebarSection from "../../components/Sidebar/SidebarSection";
import BreadcrumbMobile from "../../components/Sidebar/BreadcrumbMobile";
import SidebarMobile from "../../components/Sidebar/SidebarMobile";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/authSlice";

const LayoutDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  React.useEffect(() => {
    if (isError) {
      navigate("..");
    }
  }, [isError, navigate]);

  return (
    <div>
      <HeaderSection />

      <div className="-mt-px">
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden">
          <div className="flex items-center py-2">
            <SidebarMobile />

            <BreadcrumbMobile />
          </div>
        </div>
      </div>
      <SidebarSection />

      <Outlet />
    </div>
  );
};

export default LayoutDashboard;
