// src/layout/Layout.tsx
import React from "react";
import HomeHeader from "@/components/headers/HomeHeader";
import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
