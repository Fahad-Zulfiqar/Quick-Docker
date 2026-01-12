import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronUp, Search } from "lucide-react";
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

// --- ACTION REQUIRED: Update these icon paths ---
import generalPractitionerIcon from "@/assets/Medicine.svg"; // Example path
// import heartIcon from "@/assets/icons/specialties/heart.svg";
// import dentalIcon from "@/assets/icons/specialties/dental.svg";
// import kidneyIcon from "@/assets/icons/specialties/kidney.svg";
// import stomachIcon from "@/assets/icons/specialties/stomach.svg";
// import lungIcon from "@/assets/icons/specialties/lung.svg";
// import brainIcon from "@/assets/icons/specialties/brain.svg";
// import mentalIcon from "@/assets/icons/specialties/mental.svg";
// import liverIcon from "@/assets/icons/specialties/liver.svg";

// This is the data for the "More specialty" section
const specialties = [
  {
    label: "Heart",
    icon: heart,
    slug: "heart",
    route: "/services/home-health-care",
  },
  {
    label: "Dental",
    icon: dentist,
    slug: "dental",
    route: "/services/home-health-care",
  },
  {
    label: "Kidney",
    icon: kidney,
    slug: "kidney",
    route: "/services/home-health-care",
  },
  {
    label: "Stomach",
    icon: stomach,
    slug: "stomach",
    route: "/services/home-health-care",
  },
  {
    label: "Lung",
    icon: lungs,
    slug: "lung",
    route: "/services/home-health-care",
  },
  {
    label: "Brain",
    icon: brain,
    slug: "brain",
    route: "/services/home-health-care",
  },
];

const HomeCare = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // This function will handle clicks on any specialty
  const handleSpecialtyClick = (specialty) => {
    // Navigate to the MobileService page, passing slug and label as state
    navigate("/mobileService", {
      state: {
        slug: specialty.slug,
        heading: specialty.label,
      },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- Mobile Header --- */}
      <div className="md:hidden flex justify-start items-center p-4 bg-white pt-10 sticky top-0 z-10 shadow-sm">
        <button
          onClick={() => window.history.back()}
          className="bg-[#EBEBEB99] w-[45px] h-[45px] flex items-center justify-center rounded-[15px] flex-shrink-0"
        >
          <ChevronLeft className="text-primaryColor" />
        </button>
        <h1 className="flex-grow text-center text-base font-bold text-primaryColor pr-10">
          Home Health Care
        </h1>
      </div>

      {/* --- Mobile Search Bar --- */}
      <div className="lg:hidden px-4 py-4 bg-white">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border bg-[#F7F7F7] border-gray-200 py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primaryColor"
          />
        </div>
      </div>

      <div className="lg:hidden px-4 pb-4">
        {/* --- Select Doctor's specialty Section --- */}
        <h2 className="text-[16px] font-semibold text-[#05141F] mb-3 pt-4">
          Select Doctor's specialty
        </h2>
        <div className="bg-white p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm mb-6">
          <img
            src={generalPractitionerIcon}
            alt="General Practitioner"
            className="w-16 h-16 object-contain"
          />
          <span className="text-base font-medium text-[#333]">
            General Practitioner
          </span>
        </div>

        {/* --- More specialty Section --- */}
        <div className="flex items-center mb-3">
          <h2 className="text-[16px] font-semibold text-[#05141F]">
            More specialty
          </h2>
          <button onClick={() => setExpanded(!expanded)}>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {expanded && (
          <div className="space-y-3">
            {specialties.length > 0 ? (
              specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition-colors border border-gray-100"
                  onClick={() => handleSpecialtyClick(specialty)}
                >
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={specialty.icon}
                      alt={specialty.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm font-medium text-[#555]">
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
    </div>
  );
};

export default HomeCare;
