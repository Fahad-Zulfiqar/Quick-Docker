import { ChevronDown, ChevronLeft, Link, Search } from "lucide-react";
import React, { useState } from "react";
import {
  lungs,
  brain,
  psychiatrists,
  liver,
  heart,
  dentist,
  kidney,
  stomach,
} from "@/assets/icons/categories-icons";
import generalPractitionerIcon from "@/assets/Medicine.svg";
import { useLocation, useNavigate } from "react-router-dom";

const MobileService = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const slug = state?.slug;
  const heading = state?.heading;

  const otherNavigation = () => {
    const routes =
      slug === "Video Call"
        ? "video-call"
        : slug === "Call"
          ? "call"
          : slug === "Chat"
            ? "chat"
            : "clinic-visit";
    navigate(`/services/${routes}`);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);
  const categories = [
    { icon: lungs, label: "Lung", route: "/services/home-health-care" },
    { icon: brain, label: "Brain", route: "/services/home-health-care" },
    {
      icon: psychiatrists,
      label: "Mental",
      route: "/services/home-health-care",
    },
    { icon: liver, label: "Liver", route: "/services/home-health-care" },
    { icon: heart, label: "Heart", route: "/services/home-health-care" },
    { icon: dentist, label: "Dental", route: "/services/home-health-care" },
    { icon: kidney, label: "Kidney", route: "/services/home-health-care" },
    { icon: stomach, label: "Stomach", route: "/services/home-health-care" },
    { icon: lungs, label: "Lung", route: "/services/home-health-care" },
    { icon: brain, label: "Brain", route: "/services/home-health-care" },
    {
      icon: psychiatrists,
      label: "Mental",
      route: "/services/home-health-care",
    },
    { icon: liver, label: "Liver", route: "/services/home-health-care" },
    { icon: heart, label: "Heart", route: "/services/home-health-care" },
    { icon: dentist, label: "Dental", route: "/services/home-health-care" },
    { icon: kidney, label: "Kidney", route: "/services/home-health-care" },
    { icon: stomach, label: "Stomach", route: "/services/home-health-care" },
    { icon: lungs, label: "Lung", route: "/services/home-health-care" },
    { icon: brain, label: "Brain", route: "/services/home-health-care" },
    {
      icon: psychiatrists,
      label: "Mental",
      route: "/services/home-health-care",
    },
    { icon: liver, label: "Liver", route: "/services/home-health-care" },
    { icon: heart, label: "Heart", route: "/services/home-health-care" },
    { icon: dentist, label: "Dental", route: "/services/home-health-care" },
    { icon: kidney, label: "Kidney", route: "/services/home-health-care" },
    { icon: stomach, label: "Stomach", route: "/services/home-health-care" },
  ];

  const doubleCheck = categories.length > 0 && categories.length < 9;
  return (
    <div>
      {/* Mobile Header - Only visible on mobile */}
      <div
        onClick={() => window.history.back()}
        className="md:hidden flex  justify-start items-center p-4 bg-white  "
      >
        <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2  text-base font-bold text-primaryColor ">
          {slug}
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
            className="w-full h-[46px] rounded-[10px]  bg-[#F0F0F0] border-gray-200 py-3 pl-9 pr-4 text-sm text-[#677294] focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
        </div>
      </div>

      {slug === "Home Health care" ? (
        <div className="lg:hidden px-4 pb-4 bg-[#F2F2F2] min-h-screen">
          {/* --- Select Doctor's specialty Section --- */}
          <h2 className="text-[16px] font-semibold text-[#05141F] mb-3 pt-4">
            Select Doctor's specialty
          </h2>
          <div className="bg-white shadow-md h-[160px]  p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm mb-6">
            <img
              src={generalPractitionerIcon}
              alt="General Practitioner"
              className="w-[127px] h-[126px] object-contain"
            />
            <span className="text-[14px] font-medium text-[#333]">
              General Practitioner
            </span>
          </div>

          {/* --- More specialty Section --- */}
          <div
            className="flex gap-3 items-center mb-3"
            onClick={() => setExpanded(!expanded)}
          >
            <h2 className="text-base font-semibold text-primaryColor">
              More specialty
            </h2>
            <button>
              <ChevronDown
                className={`w-6 h-6 transition-transform text-primaryColor   ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {expanded && (
            <div className="space-y-3 ">
              {categories.length > 0 ? (
                categories.map((specialty, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg py-2 flex items-center gap-4 cursor-pointer"
                    onClick={() => navigate("/services/home-health-care")}
                  >
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <img
                        src={specialty.icon}
                        alt={specialty.label}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-sm font-medium text-[#7D8A95]">
                      {specialty.label}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No specialties found
                </p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="lg:hidden px-4 pb-4 bg-[#F2F2F2] min-h-screen">
          <h3 className="text-[16px] md:text-lg font-medium text-[#05141F] mb-4 pt-4">
            {heading}
          </h3>

          <div className="space-y-3">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[10px] md:rounded-xl md:p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    slug === "Clinic Visit"
                      ? navigate("/services/clinic-visit")
                      : otherNavigation();
                  }}
                >
                  <div className="w-12 h-12 md:bg-[#F0F4FC]  rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src={category.icon}
                      alt={category.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="md:text-base text-[14px] font-medium text-[#7D8A95]">
                    {category.label}
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
      )}

      {/* Mobile Categories List */}
    </div>
  );
};

export default MobileService;
