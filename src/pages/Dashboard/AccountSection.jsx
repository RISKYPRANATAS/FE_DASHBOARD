import React from "react";
import Card from "../../components/Account/Card";

const AccountSection = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <h1 className="text-4xl font-bold">Data Akun</h1>
        <Card />
      </div>
    </div>
  );
};

export default AccountSection;
