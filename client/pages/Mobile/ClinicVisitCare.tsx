import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Rating from "@/components/ui/Rating";
import { ChevronLeft, Heart, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import clini1 from "@/assets/clinic/clinic1.png";
import clini2 from "@/assets/clinic/clinic2.png";
import clini3 from "@/assets/clinic/clinic3.png";

import ClinicCards from "./common/ClinicCards";

const homeHealthDr = [
  {
    profileImage: clini1,
    id: "331",
    drName: "Dr Hospital",
    department: "Dental",
    address: "Nablus , Eastern Ring Branch Road, Ga..",
    rating: "4.8",
    km: "5 KM",
    isFavorite: false,
  },
  {
    profileImage: clini2,
    id: "332",
    drName: "New Clinic",
    department: "Cardiology",
    address: "Nablus , Eastern Ring Branch Road, Ga..",
    rating: "4.6",
    km: "5 KM",
    isFavorite: true,
  },
  {
    profileImage: clini3,
    id: "333",
    drName: "Indus Hospital",
    department: "Neurology",
    address: "Nablus , Eastern Ring Branch Road, Ga..",
    rating: "4.9",
    km: "5 KM",
    isFavorite: false,
  },
];

const ClinicVisitCare = () => {
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
          Clinic Visit
        </button>
      </div>

      {/* Search Bar */}
      <div className="lg:hidden px-4 py-4 bg-white">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search ..."
            className="w-full h-[48px] rounded-xl  bg-[#F7F7F7] py-3 pl-11 pr-12 text-sm text-[#677294] focus:outline-none focus:ring-1 focus:ring-primaryColor"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <SlidersHorizontal
              className="text-primaryColor w-5 h-5"
              //   onClick={() => setShowFilters(true)}
            />
          </button>
        </div>
      </div>

      {/* Clinics List */}
      <div className="lg:hidden px-4 pb-4 bg-gray-50 min-h-screen">
        <h3 className="text-[16px] font-semibold text-[#05141F] mb-[17px] pt-4">
          Clinics List
        </h3>
        <div>
          {homeHealthDr.map((dr) => (
            <ClinicCards key={dr.id} dr={dr} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicVisitCare;
