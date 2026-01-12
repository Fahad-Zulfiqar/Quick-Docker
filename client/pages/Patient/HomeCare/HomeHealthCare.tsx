import { Card } from "@/components/ui/card";
import Rating from "@/components/ui/Rating";
import { ChevronLeft, Heart, Search, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import dummyDr from "@/assets/images/dummy-dr.jpg";
import { Button } from "@/components/ui/button";

import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch } from "@/store/hooks";
import { setDr } from "@/store/slices/selectedDrSlice";
import DoctorCards from "@/pages/Mobile/common/DoctorCards";
import doc1 from "@/assets/images/doc1.jpg";
import doc2 from "@/assets/images/doc2.jpg";
import doc3 from "@/assets/images/doc3.jpg";
import mfilter from "@/assets/mfilter.svg";
import HomeHealthFilter from "@/components/mobile/HomeHealthFilter";

type Props = {};
const homeHealthDr = [
  {
    profileImage: doc1,
    id: "331",
    drName: "Madiha Ahmad",
    department: "Dental",
    experience: "7 Years of experience",
    rating: "4.8",
    isFavorite: false,
  },
  {
    profileImage: doc2,
    id: "332",
    drName: "Ali Raza",
    department: "Cardiology",
    experience: "10 Years of experience",
    rating: "4.6",
    isFavorite: true,
  },
  {
    profileImage: doc3,
    id: "333",
    drName: "Sara Khan",
    department: "Neurology",
    experience: "5 Years of experience",
    rating: "4.9",
    isFavorite: false,
  },
  {
    profileImage: "",
    id: "334",
    drName: "Usman Javed",
    department: "Orthopedics",
    experience: "8 Years of experience",
    rating: "4.5",
    isFavorite: false,
  },
  {
    profileImage: "",
    id: "335",
    drName: "Hina Sheikh",
    department: "Pediatrics",
    experience: "6 Years of experience",
    rating: "4.7",
    isFavorite: true,
  },
  {
    profileImage: "",
    id: "336",
    drName: "Faisal Qureshi",
    department: "Dermatology",
    experience: "9 Years of experience",
    rating: "4.4",
    isFavorite: false,
  },
];

const HomeHealthCare = ({ serviceType }: any) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedDr, setSelectedDr] = useState(null);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const totalItems = homeHealthDr.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const location = useLocation();
  const heading =
    location.pathname.split("/")[2] === "home-health-care"
      ? "Home Health Care"
      : location.pathname.split("/")[2] === "video-call"
        ? "Video Call"
        : location.pathname.split("/")[2] === "chat"
          ? "Chat"
          : "Call";

  // Slice the doctors for current page
  const currentDoctors = homeHealthDr.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Generate page numbers you want to show (simple version - all pages)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleBookNow = (drData: any) => {
    console.log(drData);
    setSelectedDr(drData);
    dispatch(setDr(drData));
    navigate(`book/${drData.id}`);
  };

  function setShowFilters(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div>
        <div
          onClick={() => window.history.back()}
          className="lg:hidden flex  justify-start items-center p-4 bg-white  "
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
              className="w-full h-[48px] rounded-xl  bg-[#F7F7F7] py-3 pl-11 pr-12 text-sm text-[#677294] focus:outline-none focus:ring-1 focus:ring-primaryColor"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <img
                src={mfilter}
                alt="filter svg"
                // className="text-primaryColor w-5 h-5"
                onClick={() => setShowFilter(true)}
              />
            </button>
          </div>
        </div>
        <div className="lg:hidden px-4 pb-4 bg-[#F2F2F2] min-h-screen">
          <h3 className="text-[16px] font-semibold text-[#05141F] mb-4 pt-4">
            Doctors List
          </h3>
          <div className=" space-y-4">
            {currentDoctors.map((dr) => (
              <DoctorCards doctor={dr} serviceType={serviceType} />
            ))}
          </div>
        </div>
        {showFilter && <HomeHealthFilter onClose={setShowFilter} />}
      </div>
      <div className=" px-4 lg:px-0">
        <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center text-primaryColor">
          <p className="text-2xl font-semibold">{heading}</p>
          <p className="text-black font-medium text-xl">6 Doctors Available</p>
        </div>
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          {currentDoctors.map((dr) => {
            const [isFavorite, setIsFavorite] = useState(dr.isFavorite);

            return (
              <Card
                className="p-6 rounded-2xl shadow-sm border border-gray-200"
                key={dr.id}
              >
                {/* Top section: Rating + Favorite */}
                <div className="flex justify-between items-center mb-3">
                  <Rating rating={dr.rating} className="!text-[#33384B]" />
                  <button
                    className="relative w-6 h-6"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    {isFavorite ? (
                      // Filled Heart
                      <svg
                        className="w-6 h-6 text-[#ED5E5E]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
              2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 
              3.41 0.81 4.5 2.09C13.09 3.81 14.76 
              3 16.5 3 19.58 3 22 5.42 
              22 8.5c0 3.78-3.4 6.86-8.55 
              11.54L12 21.35z"
                        />
                      </svg>
                    ) : (
                      // Outline Heart
                      <Heart className="w-6 h-6 text-[#ED5E5E]" />
                    )}
                  </button>
                </div>

                {/* Doctor Info */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={dr.profileImage ? dr.profileImage : dummyDr}
                    className="w-24 h-24 rounded-full border-2 border-gray-200 object-cover"
                  />
                  <p className="text-[#333333] text-lg font-medium mt-2">
                    {dr.drName}
                  </p>
                  <p className="text-primaryColor text-base">{dr.department}</p>
                  <p className="text-[#677294] font-light">{dr.experience}</p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-4">
                  <Link to={"/doctor-profile"} className="w-1/2">
                    <Button
                      variant="outline"
                      className="w-full bg-[#E9F0FF] text-primaryColor"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleBookNow(dr)}
                    className="w-1/2 bg-primaryColor text-white "
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        {/* Pagination Controls */}
        <div className="hidden">
          <Pagination className="my-4" aria-label="Pagination Navigation">
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-disabled={currentPage === 1}
                  tabIndex={currentPage === 1 ? -1 : 0}
                />
              </PaginationItem>

              {/* Page Numbers */}
              {pages.map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => handlePageChange(page)}
                    href="#"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-disabled={currentPage === totalPages}
                  tabIndex={currentPage === totalPages ? -1 : 0}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default HomeHealthCare;
