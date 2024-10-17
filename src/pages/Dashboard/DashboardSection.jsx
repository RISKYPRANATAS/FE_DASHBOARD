import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Dashboard/Card";
import CardUser from "../../components/Dashboard/CardUser";

const DashboardSection = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full lg:ps-64">
      <div>
        {user && user.data.role === "kaprodi" ? (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <Card />
          </div>
        ) : (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <CardUser />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSection;
