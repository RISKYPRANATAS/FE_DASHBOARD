import React from "react";
import LogoSection from "../../components/Login/LogoSection";
import TitleSection from "../../components/Login/TitleSection";
import InputSection from "../../components/Login/InputSection";
import CardLogin from "../../components/Login/CardLogin";
import PatternSection from "../../components/Login/PatternSection";

const AdminPages = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <PatternSection />
      <CardLogin
        children={
          <>
            <LogoSection src="/Logo.svg" alt="Logo" />
            <div className="p-4 sm:p-7">
              <TitleSection
                Title="Selamat Datang Di Sistem Informasi Pengelolaan portofolio Dosen di
              Telkom University"
                SubTitle="Silahkan Login"
              />
              <InputSection
                label="EMAIl"
                htmlFor="email"
                type="email"
                id="email"
                name="email"
              />
            </div>
          </>
        }
      />
    </div>
  );
};

export default AdminPages;
