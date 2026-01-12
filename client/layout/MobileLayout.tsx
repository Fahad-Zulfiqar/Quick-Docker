import React, { useEffect } from "react";
import HomeHeader from "@/components/headers/HomeHeader";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";
import MobileNavigation from "@/components/footer/MobileNavigation";
import { useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MobileLayout = () => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const hideNavPrefixes = [
    "/details/",
    "/doctor-profile",
    "/clinic-details",
    "/categories",
    "/doctor-chat",
    "/doctor-call",
    "/detail",
    "/my-profile",
    '/add-family-member',

  ];
  useEffect(() => {
    if (!user) {
      navigate("/splash");
    }
  }, []);
  if (user === null) {
    return null;
  }
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Mobile-specific header with simplified navigation */}
      {/* <HomeHeader className="bg-primaryColor text-white p-4" /> */}
      <main className="flex-grow ">
        <Outlet /> {/* Render child routes */}
      </main>
      {/* Mobile-specific footer with minimal links */}
      {/* <Footer className="bg-primaryColor text-white p-4 text-center text-sm" /> */}
      <div className="sticky bottom-0 z-10 bg-white">
        {!hideNavPrefixes.some((prefix) =>
          location.pathname.startsWith(prefix),
        ) && <MobileNavigation />}
      </div>
    </div>
  );
};

export default MobileLayout;
