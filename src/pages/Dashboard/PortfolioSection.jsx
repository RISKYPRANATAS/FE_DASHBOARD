import React from "react";
import { useSelector } from "react-redux";
import CardUser from "../../components/Portfolio/CardUser";
import { useLocation } from "react-router-dom";
import { HSStaticMethods } from "preline";
import Card from "../../components/Portfolio/Card";

const PortfolioSection = () => {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  React.useEffect(() => {
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="w-full lg:ps-64">
      <div>
        {user && user.data.role === "kaprodi" ? (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h1 className="text-4xl font-bold">Data Portofolio</h1>
            <Card />
          </div>
        ) : (
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <h1 className="text-4xl font-bold">Portofolio Ku</h1>
            <CardUser />
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioSection;
