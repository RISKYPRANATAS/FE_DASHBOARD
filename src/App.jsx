import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LayoutLogin from "./pages/Auth/LayoutLogin";
import LayoutDashboard from "./pages/Dashboard/LayoutDashboard";
import DashboardSection from "./pages/Dashboard/DashboardSection";
import AccountSection from "./pages/Dashboard/AccountSection";
import PortfolioSection from "./pages/Dashboard/PortfolioSection";
import RequestSection from "./pages/Dashboard/RequestSection";
import { HSStaticMethods } from "preline";
import UploadSection from "./pages/Dashboard/UploadSection";

function App() {
  const location = useLocation();

  React.useEffect(() => {
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="/auth/login" element={<LayoutLogin />} />
      <Route path="/dashboard" element={<LayoutDashboard />}>
        <Route index element={<DashboardSection />} />
        <Route path="akun" element={<AccountSection />} />
        <Route path="portofolio" element={<PortfolioSection />} />
        <Route path="permintaan" element={<RequestSection />} />
        <Route path="unggah" element={<UploadSection />} />
      </Route>
    </Routes>
  );
}

export default App;
