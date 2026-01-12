import { Card } from "@/components/ui/card";
import Rating from "@/components/ui/Rating";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import React, { useState } from "react";
import dummyDr from "@/assets/images/hospital-logo.png";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useAppDispatch } from "@/store/hooks";
import { useNavigate } from "react-router-dom";
import { setDr } from "@/store/slices/selectedDrSlice";
import ClinicCards from "../Mobile/common/ClinicCards";
import clini1 from "@/assets/clinic/clinic1.png";
import clini2 from "@/assets/clinic/clinic2.png";
import clini3 from "@/assets/clinic/clinic3.png";
import mfilter from "@/assets/mfilter.svg";
import { DoctorRangeProgress } from "@/components/misc/DoctorRateProgress";
import { MDualRange } from "@/components/misc/MRange";

type Props = {};
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
  {
    profileImage: "",
    id: "334",
    drName: "CMH",
    department: "Orthopedics",
    address: "Nablus , Eastern Ring Branch Road, Ga..",
    rating: "4.5",
    km: "5 KM",
    isFavorite: false,
  },
  {
    profileImage: "",
    id: "335",
    drName: "Shaukat Khanum",
    department: "Pediatrics",
    address: "Nablus , Eastern Ring Branch Road, Ga..",
    rating: "4.7",
    km: "5 KM",
    isFavorite: true,
  },
  {
    profileImage: "",
    id: "336",
    drName: "Qarshi Clinic",
    department: "Dermatology",
    address: "Nablus , Eastern Ring Branch Road, Ga..",
    rating: "4.4",
    km: "5 KM",
    isFavorite: false,
  },
];
let clinicVisit = true;

const ClinicVisit = (props: Props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedDr, setSelectedDr] = useState(null);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const totalItems = homeHealthDr.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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

  const handleClinicDetails = (dr) => {
    navigate("/clinic-details", {
      state: { clinicData: { ...dr, clinic: true } },
    });
  };

  const handleBookNow = (drData: any) => {
    console.log(drData);
    setSelectedDr(drData);
    dispatch(setDr(drData));
    navigate(`book/${drData.id}`);
  };

  return (
    <>
      <div>
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
              <img
                src={mfilter}
                alt="filter-svg"
                className="text-primaryColor w-5 h-5"
                onClick={() => setShowFilter(true)}
              />
            </button>
          </div>
        </div>
        <div className="lg:hidden px-4 pb-4 bg-[#F2F2F2] min-h-screen">
          <h3 className="text-[16px] font-semibold text-[#05141F] mb-4 pt-4">
            Clinics List
          </h3>
          <div className="py-8">
            {currentDoctors.map((dr) => (
              <ClinicCards key={dr.id} dr={dr} />
            ))}
          </div>
        </div>
        {/* {showFilter && <HomeHealthFilter onClose={setShowFilter} />} */}
      </div>
      <div className=" px-4 lg:px-0">
        <div className="hidden md:flex flex-col lg:flex-row justify-between items-center text-primaryColor mb-4">
          <p className="text-2xl font-semibold">Clinic Visit</p>
          <p className="text-black font-medium text-xl">6 clinics</p>
        </div>
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8  py-8">
          {currentDoctors.map((dr) => {
            const [isFavorite, setIsFavorite] = useState(dr.isFavorite);

            return (
              <Card className="p-6 mb-10">
                <div className="flex justify-between items-center">
                  <Rating rating={dr.rating} className="!text-[#33384B]" />
                  <button
                    className="relative w-6 h-6"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    {/* Background Fill – behind the outline */}
                    {isFavorite && (
                      <svg
                        className="absolute inset-0 text-[#ED5E5E]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
    4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
    14.76 3 16.5 3 19.58 3 22 5.42 
    22 8.5c0 3.78-3.4 6.86-8.55 
    11.54L12 21.35z"
                        />
                      </svg>
                    )}

                    {/* Lucide outline */}
                    <Heart className="relative z-10 text-[#ED5E5E]" />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img
                    src={dr.profileImage ? dr.profileImage : dummyDr}
                    className="w-28 h-28 -mt-20 rounded-lg border-2 border-[#EAEAEA]"
                  />
                  <p className="text-[#333333] text-lg font-medium">
                    {dr.drName}
                  </p>
                  <p className="text-primaryColor text-base ">
                    {dr.department}
                  </p>
                  <p className="text-[#677294] font-light text-sm">
                    {dr.address}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant="outline"
                    className="w-full bg-[#E9F0FF] text-primaryColor"
                    onClick={() => handleClinicDetails(dr)}
                  >
                    View Details
                  </Button>
                  <Button onClick={() => handleBookNow(dr)} className="w-full ">
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

      {showFilter && (
        <div className="fixed inset-0 z-50 bg-black/30 overflow-y-auto">
          <div className="bg-gray-100 h-full py-6 mt-0 pt-0 absolute top-0 left-0 right-0 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex justify-between w-full items-center bg-white px-4 py-6 shadow-sm">
                <h3 className="text-primaryColor font-bold text-lg">Filter</h3>
                <button
                  className="bg-[#EBEBEB99] rounded-[15px] p-3 cursor-pointer"
                  onClick={() => setShowFilter(false)} // Call the prop to close the filter
                >
                  <X size={20} className="text-primaryColor" />
                </button>
              </div>

              <div className="px-4 py-6 ">
                {/* Doctor's Specialty */}
                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Clinic specialty
                  </h4>
                  <div
                    className="w-full h-14 rounded-[10px] border-[0.6px] border-[#B1B1B1] text-base font-bold text-[#2C2948] px-4 flex items-center justify-between bg-white cursor-pointer mb-[16px]"
                    onClick={() => {
                      /* Implement logic to open specialty selection modal/dropdown */
                    }}
                  >
                    {" "}
                    All
                    <span className="text-base text-gray-600">{}</span>
                    <ChevronRight className="text-gray-500 w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">Location</h4>
                  <div
                    className="w-full h-14 rounded-[10px] border-[0.6px] border-[#B1B1B1] text-base font-bold text-[#2C2948] px-4 flex items-center justify-between bg-white cursor-pointer mb-[16px]"
                    onClick={() => {
                      /* Implement logic to open specialty selection modal/dropdown */
                    }}
                  >
                    {" "}
                    All
                    <span className="text-base text-gray-600">{}</span>
                    <ChevronRight className="text-gray-500 w-5 h-5" />
                  </div>
                </div>

                {/* Doctor's Experience Slider */}
                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">Distance</h4>
                  {/* pending */}
                  <div className="p-1 h-[109px] flex items-center justify-center bg-white rounded-[10px]">
                    <MDualRange valuesInit={[1, 10]} />
                  </div>
                </div>

                {/* Doctor's Rate Slider */}
                <div>
                  <h4 className="mb-3 font-semibold text-gray-800">
                    Clinic Rate
                  </h4>
                  {/* pending */}
                  <div className="w-full h-[109px] flex items-center justify-center  p-1 bg-white rounded-[10px]">
                    <DoctorRangeProgress min={0} max={5} valuesInit={[1, 4]} />
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Button */}
            <div className="px-4 py-2 bg-primaryColor rounded-[14px] mx-4 text-white shadow-inner">
              <button className="w-full py-2 text-lg font-semibold">
                Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClinicVisit;
