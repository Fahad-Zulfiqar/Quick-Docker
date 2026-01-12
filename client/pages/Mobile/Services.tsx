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
import { ChevronLeft, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate =useNavigate();
  return (
    <div>
      <div
        onClick={() => window.history.back()}
        className="md:hidden flex  justify-start items-center p-4 bg-white  "
      >
        <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2  text-base font-bold text-primaryColor ">
          Heart
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden px-4 py-4 bg-white">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[46px] rounded-[10px]  bg-[#FAFBFE] py-3 pl-9 pr-4 text-sm text-[#677294] focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
        </div>
      </div>

      {/* Mobile Services List */}
      <div className="lg:hidden px-4 pb-4 bg-[#F2F2F2] min-h-screen">
        <h3 className="text-[16px] md:text-lg font-medium text-[#05141F] mb-4 pt-4">
          Select Service
        </h3>

        <div className="space-y-3">
          {servicesTab.length > 0 ? (
            servicesTab.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[10px] md:rounded-xl md:p-4 flex items-center gap-4 cursor-pointer  transition-colors  "
                onClick={() => {
                  // Handle navigation to service
                  navigate(service.routePath)
                  console.log(`Selected ${service.tabName}`);
                }}
              >
                <div className="w-12 h-12 md:bg-[#F0F4FC]  rounded-xl flex items-center justify-center flex-shrink-0">
                  <img
                    src={service.activeIcon}
                    alt={service.tabName}
                    className="w-6 h-6"
                  />
                </div>
                <span className="md:text-base text-[14px] font-medium text-[#000]">
                  {service.tabName}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">
              No categories found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
