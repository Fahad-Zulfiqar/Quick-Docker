import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const Layout = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Layout;
