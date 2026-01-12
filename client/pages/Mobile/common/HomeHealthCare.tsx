import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Search,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import dr from "@/assets/images/dummy-dr.jpg";

// --- ACTION REQUIRED: Update with your actual image paths ---
import doc1 from "@/assets/images/doc1.jpg";
import doc2 from "@/assets/images/doc2.jpg";
import doc3 from "@/assets/images/doc3.jpg";
import { Button } from "@/components/ui/button";
import { DualRange } from "@/components/misc/Range";
import { DoctorRangeProgress } from "@/components/misc/DoctorRateProgress";
import { DualRangeSlider } from "@/components/common/RangeFilter";
import { MDualRange } from "@/components/misc/MRange";
import DoctorCard from "./DoctorCards";

// Updated data to match the image
const doctorsList = [
  {
    profileImage: doc1,
    id: "331",
    drName: "Dr. Maha Ahmad",
    department: "Dental",
    experience: "7 Years experience", // Simplified text
    rating: "4.8",
    isFavorite: true, // First one is favorited in the image
  },
  {
    profileImage: doc2,
    id: "332",
    drName: "Dr. Sama Khaled",
    department: "Dental",
    experience: "7 Years experience",
    rating: "4.8",
    isFavorite: false,
  },
  {
    profileImage: doc3,
    id: "333",
    drName: "Dr. Ahmad Mohammad",
    department: "Dental",
    experience: "7 Years experience",
    rating: "4.8",
    isFavorite: false,
  },
];

// IMPORTANT: We create a separate component for the card
// to correctly use the `useState` hook for the favorite button.

const HomeHealthCare = () => {
  const [showFilters, setShowFilters] = useState(false);
  // State for Doctor's Specialty selection
  const [specialty, setSpecialty] = useState("All");

  const location = useLocation();
  const heading =
    location.pathname.split("/")[2] === "home-health-care"
      ? "Home Health Care"
      : location.pathname.split("/")[2] === "video-call"
        ? "Video Call"
        : location.pathname.split("/")[2] === "chat"
          ? "Chat"
          : "Call";
  return (
    <div>
      {/* Mobile Header */}
      <div
        onClick={() => window.history.back()}
        className="md:hidden flex  justify-start items-center p-4 bg-white  "
      >
        <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2  text-base font-bold text-primaryColor ">
          {heading}
        </button>
      </div>

      {/* Search Bar */}
      <div className="lg:hidden px-4 py-4 bg-white">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full h-[48px] rounded-lg  bg-[#F0F0F0] py-3 pl-11 pr-12 text-sm text-[#677294] focus:outline-none focus:ring-1 focus:ring-primaryColor"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <SlidersHorizontal
              className="text-primaryColor w-5 h-5"
              onClick={() => setShowFilters(true)}
            />
          </button>
        </div>
      </div>

      {/* Doctors List */}
      <div className="lg:hidden px-4 pb-4 bg-[#F2F2F2] min-h-screen">
        <h3 className="text-[16px] font-semibold text-[#05141F] mb-4 pt-4">
          Doctors List
        </h3>
        <div className="space-y-4">
          {doctorsList.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-50 bg-black/30 overflow-y-auto">
          <div className="bg-gray-100 h-full py-6 mt-0 pt-0 absolute top-0 left-0 right-0 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex justify-between w-full items-center bg-white px-4 py-3 shadow-sm">
                <h3 className="text-primaryColor font-bold text-lg">Filter</h3>
                <button
                  className="bg-[#EBEBEB99] rounded-[15px] p-3 cursor-pointer"
                  onClick={() => setShowFilters(false)} // Call the prop to close the filter
                >
                  <X size={20} className="text-primaryColor" />
                </button>
              </div>

              <div className="px-4 py-6 ">
                {/* Doctor's Specialty */}
                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Doctor's specialty
                  </h4>
                  <div
                    className="w-full h-14 rounded-[10px] border-[0.6px] border-gray-300 px-4 flex items-center justify-between bg-white cursor-pointer mb-[16px]"
                    onClick={() => {
                      /* Implement logic to open specialty selection modal/dropdown */
                    }}
                  >
                    <span className="text-base text-gray-600">{specialty}</span>
                    <ChevronRight className="text-gray-500 w-5 h-5" />
                  </div>
                </div>

                {/* Doctor's Experience Slider */}
                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Doctor's Experience
                  </h4>
                  {/* pending */}
                  <div className="p-1 h-[109px] flex items-center justify-center bg-white rounded-[10px]">
                    <MDualRange valuesInit={[1, 10]} />
                  </div>
                </div>

                {/* Doctor's Rate Slider */}
                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Doctor's Rate
                  </h4>
                  {/* pending */}
                  <div className="w-full h-[109px] flex items-center justify-center  p-1 bg-white rounded-[10px]">
                    <DoctorRangeProgress min={0} max={5} valuesInit={[1, 4]} />
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Button */}
            <div className="px-4 py-3 bg-white shadow-inner">
              <Button
                variant="default"
                className="w-full py-3 text-lg font-semibold"
              >
                Filter
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHealthCare;
