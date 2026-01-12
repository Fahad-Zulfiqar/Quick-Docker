import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  MessageCircle,
  Video,
  Users,
  Home,
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import homeHealthCare from "../assets/icons/services-icons/home-health-active.svg";
import clinicVisit from "../assets/icons/services-icons/clinic-visit-active.svg";
import call from "../assets/icons/services-icons/call-active.svg";
import videoCall from "../assets/icons/services-icons/video-call-active.svg";
import chat from "../assets/icons/services-icons/chat-active.svg";
import { Link, useNavigate } from "react-router-dom";
import NotificationBell from "@/components/common/NotificationBell";
import { Sidebar } from "@/components/ui/sidebar";
import ServicesSidebar from "@/components/common/ServicesSidebar";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import MobileNavigation from "@/components/footer/MobileNavigation";
import mfilter from "@/assets/mfilter.svg";

// Sample appointment data based on the screenshot
const appointmentData = [
  {
    id: "1",
    type: "Home Health Care",
    appointmentType: "home-health-care",
    status: "Done",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM",
    icon: homeHealthCare,
    statusType: "done",
  },
  {
    id: "2",
    type: "Doctor Chat",
    appointmentType: "doctor-chat",
    status: "Canceled",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM",
    icon: chat,
    statusType: "cancelled",
  },
  {
    id: "3",
    type: "Doctor Video Call",
    appointmentType: "doctor-video-call",
    status: "Done",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM-02:15 PM",
    icon: videoCall,
    statusType: "done",
  },
  {
    id: "4",
    type: "Clinic Visit",
    appointmentType: "clinic-visit",
    status: "Done",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM-02:15 PM",
    icon: clinicVisit,
    statusType: "done",
  },
  {
    id: "5",
    type: "Home Health Care",
    appointmentType: "home-health-care",
    status: "Done",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM",
    icon: homeHealthCare,
    statusType: "done",
    label: "SOS",
  },
  {
    id: "6",
    type: "Doctor Chat",
    appointmentType: "doctor-chat",
    status: "Canceled",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM",
    icon: chat,
    statusType: "cancelled",
  },
  {
    id: "7",
    type: "Doctor Video Call",
    appointmentType: "doctor-video-call",
    status: "Done",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM-02:15 PM",
    icon: videoCall,
    statusType: "done",
  },
  {
    id: "8",
    type: "Clinic Visit",
    appointmentType: "clinic-visit",
    status: "Done",
    doctorName: "Dr. Mohammad Ahmad",
    specialty: "Gynecologist",
    date: "20-10-2023",
    time: "02:00 PM-02:15 PM",
    icon: clinicVisit,
    statusType: "done",
  },
];

const AppointmentHistoryUI = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const totalItems = appointmentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Slice appointments for current page
  const currentAppointments = appointmentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getStatusBadge = (status, statusType) => {
    const baseClasses = "px-3 py-1 rounded-[6px] text-xs  text-center";

    if (statusType === "done") {
      return (
        <span className={`${baseClasses} bg-[#28A265] text-white`}>
          {status}
        </span>
      );
    } else if (statusType === "cancelled") {
      return (
        <span className={`${baseClasses} bg-[#FF6165] text-white`}>
          {status}
        </span>
      );
    }

    return (
      <span className={`${baseClasses} bg-gray-100 text-gray-700`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white lg:bg-transparent ">
      <div className="lg:hidden block w-full px-4 space-y-4 py-4 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base text-primaryColor ">History</h3>
          <NotificationBell />
        </div>
        <div className="bg-[#F0F0F0] flex items-center h-[46px] rounded-lg w-full px-2">
          <Search className="text-[#677294] mr-2" />
          <input
            type="search"
            placeholder="search..."
            className="border-none focus:outline-none outline-none focus:border-none w-full bg-transparent"
          />
          <img src={mfilter} onClick={() => setShowFilters(true)} />
        </div>
        <div className="w-full">
          <div className="flex overflow-x-auto whitespace-nowrap gap-3 no-scrollbar">
            <button className="bg-[#F0F4FC] rounded-full px-3 py-2 text-[#677294] hover:bg-primaryColor hover:text-white">
              All
            </button>
            <button className="bg-[#F0F4FC] rounded-full px-3 py-2 text-[#677294] hover:bg-primaryColor hover:text-white">
              Call
            </button>
            <button className="bg-[#F0F4FC] rounded-full px-3 py-2 text-[#677294] hover:bg-primaryColor hover:text-white">
              Video Call
            </button>
            <button className="bg-[#F0F4FC] rounded-full px-3 py-2 text-[#677294] hover:bg-primaryColor hover:text-white">
              Chat
            </button>
            <button className="bg-[#F0F4FC] rounded-full px-3 py-2 text-[#677294] hover:bg-primaryColor hover:text-white">
              Clinic Visit
            </button>
            <button className="bg-[#F0F4FC] rounded-full px-3 py-2 text-[#677294] hover:bg-primaryColor hover:text-white">
              Home Health Care
            </button>
          </div>
        </div>
      </div>
      {/* Grid of appointment cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {currentAppointments.map((appointment) => (
          <Card
            onClick={() =>
              navigate(`/details/${appointment?.appointmentType}`, {
                state: appointment,
              })
            }
            key={appointment.id}
            className="p-6 bg-white rounded-lg border border-[#ECECEC] lg:border-none mx-4 lg:mx-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Header with icon, title and status */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 ">
                  <img src={appointment.icon} alt="" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#010402] text-lg">
                    {appointment.type}
                  </h3>
                  {appointment.label && (
                    <span className="text-[13px] text-[#9B9B9B]    mt-1 inline-block">
                      {appointment.label}
                    </span>
                  )}
                </div>
              </div>
              {getStatusBadge(appointment.status, appointment.statusType)}
            </div>
            <hr className="my-4"></hr>
            {/* Doctor info */}
            <div className="mb-4">
              <h4 className="font-semibold text-[#333333] text-lg mb-1">
                {appointment.doctorName}
              </h4>
              <p className="text-[#9B9B9B] text-[13px]">
                {appointment.specialty}
              </p>
            </div>

            {/* Date and time */}
            <div className="flex items-center gap-4 text-[#9B9B9B]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{appointment.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{appointment.time}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className=" hidden lg:flex justify-center">
        <Pagination className="my-4" aria-label="Pagination Navigation">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }
                aria-disabled={currentPage === 1}
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i;
              } else {
                pageNumber = currentPage - 2 + i;
              }

              if (pageNumber < 1 || pageNumber > totalPages) return null;

              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    isActive={pageNumber === currentPage}
                    onClick={() => handlePageChange(pageNumber)}
                    className="cursor-pointer"
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* Show ellipsis and last page if needed */}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <PaginationItem>
                  <span className="px-3 py-2">...</span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => handlePageChange(totalPages)}
                    className="cursor-pointer"
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }
                aria-disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="lg:hidden block sticky bottom-0 left-0 right-0 z-10 bg-white ">
        <MobileNavigation />
      </div>

      {showFilters && (
        <div className="fixed  inset-0 z-50 bg-black/30">
          <div className="bg-gray-100 h-full   py-6 mt-0 pt-0  absolute top-0 left-0 right-0 flex flex-col justify-between">
            <div>
              <div className="flex justify-between w-full items-center bg-white p-4">
                <h3 className="text-primaryColor font-bold text-base">
                  Filter
                </h3>
                <div
                  className="bg-[#EBEBEB99] rounded-[15px] p-3 cursor-pointer"
                  onClick={() => setShowFilters(false)}
                >
                  <X size={22} className="text-primaryColor" />
                </div>
              </div>

              <div className="px-4 py-6 space-y-8">
                <div>
                  <h4 className="mb-2 font=medium text-textColor">
                    Service type
                  </h4>
                  <div className="relative w-full">
                    <select
                      className="
          w-full h-14 rounded-[10px] border-[0.6px] border-[#B1B1B1] px-3
          appearance-none bg-white pr-10
        "
                    >
                      <option>All</option>
                      <option>Call</option>
                      <option>Chat</option>
                      <option>Video Call</option>
                      <option>Clinic Visit</option>
                      <option>Home Health Care</option>
                    </select>

                    {/* Custom Icon */}
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                      size={20}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font=medium text-textColor">
                    Doctor's specialty
                  </h4>
                  <div className="relative w-full">
                    <select
                      className="
          w-full h-14 rounded-[10px] border-[0.6px] border-[#B1B1B1] px-3
          appearance-none bg-white pr-10
        "
                    >
                      <option>All</option>
                      <option>Call</option>
                      <option>Chat</option>
                      <option>Video Call</option>
                      <option>Clinic Visit</option>
                      <option>Home Health Care</option>
                    </select>

                    {/* Custom Icon */}
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                      size={20}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font=medium text-textColor">Date</h4>
                  <input
                    type="date"
                    className="w-full h-14 rounded-[10px] border-[0.6px] border-[#B1B1B1] px-3"
                  />
                </div>
              </div>
            </div>

            <div className="mx-3">
              <button className="bg-primaryColor text-white text-lg font-bold rounded-[15px] py-3 w-full">
                Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentHistoryUI;
