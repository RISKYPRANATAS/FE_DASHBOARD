import axios from "axios";
import React from "react";
import { LuFileText } from "react-icons/lu";
import useSWR from "swr";

const CardUser = () => {
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/api/portfolios");
    return response.data;
  };

  const { data } = useSWR("allPortfolio", fetcher, {
    refreshInterval: 2000,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateOnReconnect: true,
  });

  if (!data) return <div>Loading...</div>;

  const totalPortfolios = data.data.length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[1920px]:grid-cols-7 gap-3">
      <div className="p-5 border border-gray-200 bg-[#558CF6] rounded-lg flex flex-col gap-y-5 lg:gap-y-10 2xl:gap-y-7">
        <h1 className="mb-1 text-lg font-semibold text-white">
          Jumlah Portofolio
        </h1>
        <div className="flex items-center">
          <LuFileText size={36} color="#F8F9FA" />
          <span className="ml-16 text-4xl font-semibold text-white">
            {totalPortfolios}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
