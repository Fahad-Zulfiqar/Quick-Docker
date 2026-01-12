import { Outlet, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import HomeHeader from "@/components/headers/HomeHeader";
import Footer from "@/components/footer/Footer";
import { ChevronLeft } from "lucide-react";
import vector from "@/assets/images/Texture.svg";
import ServicesSidebar from "@/components/common/ServicesSidebar";
import homeHealthIcon from "@/assets/icons/services-icons/home-health.svg";
import homeHealthActiveIcon from "@/assets/icons/services-icons/home-health-active.svg";
import clinicVisit from "@/assets/icons/services-icons/clinic-visit.svg";
import clinicVisitActiveIcon from "@/assets/icons/services-icons/clinic-visit-active.svg";
import call from "@/assets/icons/services-icons/call.svg";
import callActiveIcon from "@/assets/icons/services-icons/call-active.svg";
import videoCall from "@/assets/icons/services-icons/video-call.svg";
import videoCallActiveIcon from "@/assets/icons/services-icons/video-call-active.svg";
import chat from "@/assets/icons/services-icons/chat.svg";
import chatActiveIcon from "@/assets/icons/services-icons/chat-active.svg";
import ProgressSidebar from "@/components/common/ProgressSidebar";

const servicesTab = [
  {
    tabName: "Home Health Care",
    icon: homeHealthIcon,
    activeIcon: homeHealthActiveIcon,
    routePath: "/services/home-health-care",
    sidebarType: "home-health",
  },
  {
    tabName: "Clinic Visit",
    icon: clinicVisit,
    activeIcon: clinicVisitActiveIcon,
    routePath: "/services/clinic-visit",
    sidebarType: "clinic",
  },
  {
    tabName: "Call",
    icon: call,
    activeIcon: callActiveIcon,
    routePath: "/services/call",
    sidebarType: "default",
  },
  {
    tabName: "Video Call",
    icon: videoCall,
    activeIcon: videoCallActiveIcon,
    routePath: "/services/video-call",
    sidebarType: "default",
  },
  {
    tabName: "Chat",
    icon: chat,
    activeIcon: chatActiveIcon,
    routePath: "/services/chat",
    sidebarType: "default",
  },
];

const validServiceRoutes = [
  "/services/home-health-care",
  "/services/call",
  "/services/video-call",
  "/services/chat",
  "/services/clinic-visit",
];

const ServicesLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the current route is one of the exact valid parent routes
  const isValidServiceRoute = validServiceRoutes.includes(location.pathname);

  // services/home-health-care/book/331
  // services/clinic-visit/book/331
  // services/call/book/331
  // services/video-call/book/331
  // services/chat/book/331

  // const heading =
  //   location.pathname.split("/")[2] === "home-health-care"
  //     ? "Home Health Care"
  //     : location.pathname.split("/")[2] === "video-call"
  //       ? "Video Call"
  //       : location.pathname.split("/")[2] === "chat"
  //         ? "Chat"
  //         : "Call";

  const heading =
    location.pathname.split("/")[2] + "/" + location.pathname.split("/")[3] ===
    "home-health-care/book"
      ? "Home Care - Book Now "
      : location.pathname.split("/")[2] +
            "/" +
            location.pathname.split("/")[3] ===
          "video-call/book"
        ? "Video Call - Book Now"
        : location.pathname.split("/")[2] +
              "/" +
              location.pathname.split("/")[3] ===
            "chat/book"
          ? "Chat - Book Now"
          : location.pathname.split("/")[2] +
                "/" +
                location.pathname.split("/")[3] ===
              "call/book"
            ? "Call - Book Now"
            : location.pathname === "/history"
              ? "History"
              : "Our Services";

  console.log(heading);

  // Determine sidebar type
  const getSidebar = () => {
    const isChildRoute = location.pathname.includes("/book");

    if (isChildRoute) {
      // All child routes use the progress sidebar
      return <ProgressSidebar />;
    }

    // Find the matching service for parent routes
    const currentService = servicesTab.find((tab) =>
      location.pathname.startsWith(tab.routePath),
    );

    return currentService ? (
      <ServicesSidebar type={currentService.sidebarType} />
    ) : (
      <ServicesSidebar type="default" />
    );
  };

  return (
    <div className=" min-h-screen bg-[#F2F2F2] mx-auto">
      <div className="hidden lg:block">
        <HomeHeader />
      </div>

      {/* Sub header */}
      <div className="bg-primaryColor py-10 text-white relative hidden lg:block">
        <div className="max-w-[1160px]  mx-auto">
          <div
            className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>

          <p className="text-center text-5xl">{heading}</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>

      {/* Services tab - only shown on exact parent routes */}

      {isValidServiceRoute && (
        <div className="hidden md:grid max-w-[1160px] px-[147px] mx-auto grid-cols-1 md:px-0 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10">
          {servicesTab.map((tab, index) => {
            const isActive = location.pathname === tab.routePath;

            return (
              <div
                key={index}
                onClick={() => navigate(tab.routePath)}
                className={`pointer-events-auto rounded-lg cursor-pointer bg-white py-5 px-6 flex gap-2 w-auto items-center 
                  ${
                    isActive
                      ? "border-b-4 border-primaryColor text-primaryColor"
                      : "hover:border-b-4 hover:border-primaryColor"
                  }`}
              >
                <img
                  className="pointer-events-auto"
                  src={isActive ? tab.activeIcon : tab.icon}
                />
                <p className="max-w-28 text-xl font-medium">{tab.tabName}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* Main content */}
      <main className="max-w-[1160px] flex flex-col lg:py-6 lg:flex-row  mx-auto gap-[30px] bg-[#F2F2F2]">
        <div className="hidden   lg:block">{getSidebar()}</div>
        <div className="lg:flex-1 ">
          <Outlet />
        </div>
      </main>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default ServicesLayout;
