import React, { useState } from "react";
import {
  ChevronLeft,
  Heart,
  Home,
  Users,
  Video,
  Phone,
  MessageCircle,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SelectDateAndTime from "../Patient/HomeCare/SelectDatenTime";
import { Link, useNavigate } from "react-router-dom";
import texture from "@/assets/images/Texture.svg";

import center from "@/assets/doctorProfile/center.png";
import doctor from "@/assets/doctorProfile/doctor.jpg";
import homecare from "@/assets/icons/services-icons/home-health-active.svg";
import clinic from "@/assets/icons/services-icons/clinic-visit-active.svg";
import videocall from "@/assets/icons/services-icons/video-call-active.svg";
import callicon from "@/assets/icons/services-icons/call-active.svg";
import chaticon from "@/assets/icons/services-icons/chat-active.svg";
import SubHeader from "@/components/common/SubHeader";
import ReviewsTab from "@/components/clinicVisit/ReviewTab";

const DoctorProfile = () => {
  const [isTabsOpen, setIsTabsOpen] = useState({
    qualifications: true,
    experience: true,
    clinicList: true,
  });

  const handleTabsClick = (tab: keyof typeof isTabsOpen) => {
    setIsTabsOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };
  const handleBackClick = () => {
    // Handle back navigation
    console.log("Navigate back");
  };
  const navigate = useNavigate();

  // Reviews Tab Component
  // const ReviewsTab = () => {
  //   const reviews = [
  //     {
  //       name: "Ahmad",
  //       rating: 5,
  //       date: "20/10/2024 - 02:00PM",
  //       comment: "Best doctor ever.",
  //     },
  //     {
  //       name: "Ahmad",
  //       rating: 5,
  //       date: "20/10/2024 - 02:00PM",
  //       comment: "Best doctor ever.",
  //     },
  //     {
  //       name: "Ahmad",
  //       rating: 5,
  //       date: "20/10/2024 - 02:00PM",
  //       comment: "Best doctor ever.",
  //     },
  //     {
  //       name: "Ahmad",
  //       rating: 5,
  //       date: "20/10/2024 - 02:00PM",
  //       comment: "Best doctor ever.",
  //     },
  //     {
  //       name: "Ahmad",
  //       rating: 5,
  //       date: "20/10/2024 - 02:00PM",
  //       comment: "Best doctor ever.",
  //     },
  //     {
  //       name: "Ahmad",
  //       rating: 5,
  //       date: "20/10/2024 - 02:00PM",
  //       comment: "Best doctor ever.",
  //     },
  //   ];

  //   return (
  //     <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
  //       <div className="flex justify-between items-center mb-6">
  //         <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
  //         <button className="px-[70px] py-[10px] bg-gray-100 text-[#253E96] rounded-lg text-sm font-medium hover:bg-gray-200">
  //           + Add Rate
  //         </button>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  //         {reviews.map((review, index) => (
  //           <div key={index} className="border border-gray-200 rounded-lg p-4">
  //             <div className="flex items-center mb-2">
  //               <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
  //               <span className="ml-1 font-semibold text-gray-900">
  //                 {review.rating}
  //               </span>
  //               <span className="ml-auto text-xs text-gray-500">
  //                 {review.date}
  //               </span>
  //             </div>
  //             <div className="font-semibold text-gray-900 mb-1">
  //               {review.name}
  //             </div>
  //             <div className="text-gray-600 text-sm">{review.comment}</div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  // Availability Tab Component
  const AvailabilityTab = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2023, 8, 18)); // September 18, 2023
    const [selectedDate, setSelectedDate] = useState(18);

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const daysOfWeek = ["Sun", "Mon", "Thu", "Wed", "Thr", "Fri", "Sat"];

    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDay = firstDay.getDay();

      const days = [];

      // Add empty cells for days before the first day of the month
      for (let i = 0; i < startingDay; i++) {
        days.push(null);
      }

      // Add all days of the month
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }

      return days;
    };

    const navigateMonth = (direction) => {
      const newDate = new Date(currentDate);
      newDate.setMonth(currentDate.getMonth() + direction);
      setCurrentDate(newDate);
    };

    const afternoonSlots = [
      { time: "1:00 PM", available: true },
      { time: "1:30 PM", available: false },
      { time: "2:00 PM", available: true },
      { time: "2:30 PM", available: true },
      { time: "3:00 PM", available: true },
      { time: "3:30 PM", available: true },
      { time: "4:00 PM", available: true },
      { time: "4:30 PM", available: true },
      { time: "5:00 PM", available: true },
      { time: "5:30 PM", available: false },
    ];

    const eveningSlots = [
      { time: "5:00 PM", available: true },
      { time: "5:30 PM", available: true },
      { time: "6:00 PM", available: true },
      { time: "6:30 PM", available: true },
      { time: "7:00 PM", available: true },
      { time: "7:30 PM", available: true },
      { time: "8:00 PM", available: true },
      { time: "8:30 PM", available: false },
    ];

    const days = getDaysInMonth(currentDate);

    return (
      <div className="min-h-screen bg-gray-50 pb-10">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Reviews</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <h3 className="text-lg font-semibold text-gray-900">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h3>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="p-2 text-center text-sm font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day && setSelectedDate(day)}
                    className={`p-2 text-center text-sm rounded-lg ${
                      !day
                        ? ""
                        : day === selectedDate
                          ? "bg-primaryColor text-white"
                          : day === 18
                            ? "bg-primaryColor text-white"
                            : [
                                  14, 15, 16, 20, 21, 25, 26, 27, 28, 29, 30,
                                ].includes(day)
                              ? "text-primaryColor hover:bg-blue-50 cursor-pointer"
                              : "text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={
                      !day ||
                      ![
                        14, 15, 16, 18, 20, 21, 25, 26, 27, 28, 29, 30,
                      ].includes(day)
                    }
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Sunday, 18. September
              </h3>

              {/* Afternoon Slots */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Afternoon 7 slots
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {afternoonSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`py-2 px-3 text-sm rounded-lg border ${
                        slot.available
                          ? "border-primaryColor text-primaryColor bg-blue-50 hover:bg-primaryColor"
                          : "border-gray-200 text-gray-400 bg-gray-100 cursor-not-allowed"
                      }`}
                      disabled={!slot.available}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Evening Slots */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Evening 5 slots
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {eveningSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`py-2 px-3 text-sm rounded-lg border ${
                        slot.available
                          ? "border-primaryColor text-primaryColor bg-blue-50 hover:bg-primaryColor"
                          : "border-gray-200 text-gray-400 bg-gray-100 cursor-not-allowed"
                      }`}
                      disabled={!slot.available}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const [activeTab, setActiveTab] = useState("Info");
  const [isFavorite, setIsFavorite] = useState(false);

  const tabs = ["Info", "Availability", "Reviews"];

  const services = [
    {
      icon: homecare,
      label: "Home Health Care",
      url: "/services/home-health-care",
    },
    { icon: clinic, label: "Clinic Visit", url: "/services/clinic-visit" },
    { icon: videocall, label: "Video Call", url: "/doctor-video-call" },
    { icon: callicon, label: "Call", url: "/doctor-call" },
    { icon: chaticon, label: "Chat", url: "/doctor-chat" },
  ];

  const clinics = [
    { name: "Clinic Name", type: "Dental" },
    { name: "Clinic Name", type: "Dental" },
    { name: "Clinic Name", type: "Dental" },
    { name: "Clinic Name", type: "Dental" },
    { name: "Clinic Name", type: "Dental" },
  ];
  const handleBookNow=()=>{
    navigate('/categories')
  }

  return (
    <div className="bg-white lg:bg-[#F2F2F2] pb-28 lg:pb-10">
      {/* Header */}

      <div className="hidden lg:block">
        <SubHeader title="Doctor Profile" />
      </div>
      <div className="flex z-10 items-start relative   w-full h-[20vh] bg-gradient-to-r from-[#3F56A6] to-[#13276B]   lg:hidden ">
        <img
          src={texture}
          className="absolute left-0 pointer-events-none overflow-hidden w-full h-full"
        />
        <div
          onClick={() => navigate(-1)}
          className="flex w-full p-5 pt-10  items-center gap-4 "
        >
          <div className="bg-white/20 text-white rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
            <ChevronLeft size={20} />
          </div>
          <p className="font-bold text-base text-white">Doctor's Info</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative bg-white lg:bg-transparent  lg:mt-6 ">
        {/* Doctor Card */}
        <div className="relative  lg:rounded-2xl lg:border border-[#DEDEDE] lg:bg-white lg:shadow-sm mb-5">
          <div className="p-6 pt-0 lg:pt-6 -mt-14 lg:mt-0">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex relative flex-col lg:flex-row items-center lg:items-start gap-4 w-full flex-1">
                <img
                  src={doctor}
                  alt="Dr. Maha Mahmoud Ahmad"
                  className="w-[130px] z-20 border-[#EAEAEA] border h-[130px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center lg:items-start justify-between">
                    <div>
                      <h1 className="text-lg text-center lg:text-start lg:text-4xl font-bold text-[#33384B] mb-1">
                        Dr. Maha Mahmoud Ahmad
                      </h1>
                      <p className="text-[#7D8A95] text-center  w-full lg:text-start text-xl mb-4">
                        General Practitioner
                      </p>

                      <div className="flex  gap-10 lg:gap-6 text-sm">
                        <div>
                          <div className="font-bold text-base text-title">
                            7yr
                          </div>
                          <div className="text-someText">Experience</div>
                        </div>
                        <div>
                          <div className="font-bold text-base text-title">
                            50+
                          </div>
                          <div className="text-someText">Treated no</div>
                        </div>
                        <div>
                          <div className="font-bold text-base text-title">
                            4.8
                          </div>
                          <div className="text-someText">Rate</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="ml-4 hidden lg:block"
                    >
                      <Heart
                        size={24}
                        className={`${
                          isFavorite
                            ? "text-[#ED5E5E] fill-[#ED5E5E]"
                            : "text-gray-400"
                        } hover:text-red-500 transition-colors`}
                      />
                    </button>
                  </div>
                  <div className="hidden lg:flex w-full mt-4 lg:mt-0  lg:justify-end">
                    <button onClick={handleBookNow} className="bg-primaryColor   text-white w-[160px] h-[34px]  rounded-lg font-medium  transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="ml-4 top-14 right-6 block z-50 absolute lg:hidden"
            >
              <Heart
                size={24}
                className={`${
                  isFavorite ? "text-[#ED5E5E] fill-[#ED5E5E]" : "text-gray-400"
                } hover:text-red-500 transition-colors`}
              />
            </button>
          </div>

          {/* Doctor Services */}
          <div className="block lg:hidden bg-[#fff] lg:border border-[#DEDEDE] lg:rounded-[20px] lg:shadow-sm p-6 pt-0 mb-6">
            <h2 className="text-lg font-bold text-title mb-4">
              Doctor Services
            </h2>
            <div className="flex  gap-3 lg:gap-5 lg:flex-wrap w-[90vw] lg:w-full overflow-y-auto no-scrollbar">
              {services.map((service, index) => (
                <Link to={service.url} key={index}>
                  <div className="w-[100px] h-[100px] flex flex-col items-center justify-center bg-[#F0F4FC] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className=" rounded-full flex items-center justify-center mb-2">
                      <img
                        src={service.icon}
                        alt="icons"
                        className="w-[30px] h-[30px]"
                      />
                    </div>
                    <span className="text-[14px] text-center text-[#000] leading-[100%]">
                      {service.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="lg:border-t ">
            <div className="px-6 ">
              <div className="flex items-center justify-between lg:justify-start lg:gap-10 text-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3   text-sm transition-colors ${
                      activeTab === tab
                        ? "text-primaryColor font-bold border-b-4 border-[#253E96]"
                        : "text-[#4F4F4F] font-medium hover:text-primaryColor"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "Info" && (
          <>
            {/* Doctor Services */}
            <div className="hidden lg:block bg-[#fff] lg:border border-[#DEDEDE] lg:rounded-[20px] lg:shadow-sm p-6 mb-6">
              <h2 className="text-lg font-bold text-title mb-4">
                Doctor Services
              </h2>
              <div className="flex  gap-3 lg:gap-5 lg:flex-wrap w-[90vw] lg:w-full overflow-y-auto no-scrollbar">
                {services.map((service, index) => (
                  <Link to={service.url} key={index}>
                    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center bg-[#F0F4FC] rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className=" rounded-full flex items-center justify-center mb-2">
                        <img
                          src={service.icon}
                          alt="icons"
                          className="w-[30px] h-[30px]"
                        />
                      </div>
                      <span className="text-[14px] text-center text-[#000] leading-[100%]">
                        {service.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-white lg:rounded-[20px] lg:border border-[#DEDEDE] shadow-sm p-6 mb-6">
              <h2 className="text-base relative font-bold  text-primaryColor mb-4">
                Qualifications
                <span
                  onClick={() => handleTabsClick("qualifications")}
                  className={`absolute lg:hidden right-0 ${!isTabsOpen.qualifications && "rotate-180"} transition-all`}
                >
                  {<ChevronUp size={24} />}
                </span>
              </h2>

              <div
                className={`space-y-8  ${isTabsOpen.qualifications ? "block" : "hidden"}`}
              >
                <div>
                  <h3 className="font-bold text-base mb-1">Degrees</h3>
                  <p className="text-someText text-sm">
                    Bachelor of Medicine and Surgery, Jordan University of
                    Science and Technology, Jordan
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-1">Certifications</h3>
                  <p className="text-someText text-sm">
                    Bachelor of Medicine and Surgery, Jordan University of
                    Science and Technology, Jordan
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-1">licenses</h3>
                  <p className="text-someText text-sm">
                    Bachelor of Medicine and Surgery, Jordan University of
                    Science and Technology, Jordan
                  </p>
                </div>
              </div>
              <div className="border-b pt-5" />
              <h2 className="text-base font-bold relative  text-primaryColor mb-4 pt-5">
                Experience
                <span
                  onClick={() => handleTabsClick("experience")}
                  className={`absolute lg:hidden right-0 ${!isTabsOpen.experience && "rotate-180"} transition-all`}
                >
                  {<ChevronUp size={24} />}
                </span>
              </h2>

              <div
                className={`space-y-8  ${isTabsOpen.experience ? "block" : "hidden"}`}
              >
                <div>
                  <h3 className="font-bold text-base mb-1">
                    Professional experience
                  </h3>
                  <p className="text-someText text-sm ">
                    Dr. Maha Ahmad, Consultant Family Medicine and Geriatric
                    Medicine - Director of Family Medicine and Primary Care
                    Services, holds a Master's degree in Rheumatology from
                    Manchester, a Diploma in Geriatric Medicine from London, UK,
                    and a University Degree in Palliative Medicine from Teesside
                    University, England, in addition to being a member of the
                    Royal College of Surgeons.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-1">Languages Spoken</h3>
                  <p className="text-someText text-sm mb-2">
                    Bachelor of Medicine and Surgery, Jordan University of
                    Science and Technology, Jordan
                  </p>
                </div>
              </div>
              <div className="border-b pt-5 " />
              <div className="border-[#F0F0F0] pt-5 ">
                <h2 className="text-base relative font-bold text-primaryColor mb-4">
                  Clinic List
                  <span
                    onClick={() => handleTabsClick("clinicList")}
                    className={`absolute lg:hidden right-0 ${!isTabsOpen.clinicList && "rotate-180"} transition-all`}
                  >
                    {<ChevronUp size={24} />}
                  </span>
                </h2>
                <div
                  className={` ${isTabsOpen.clinicList ? "block" : "hidden"}`}
                >
                  <div className="flex lg:flex-wrap w-[90vw] lg:w-full overflow-x-auto no-scrollbar gap-4">
                    {clinics.map((clinic, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 px-6 bg-[#F2F2F2] rounded-lg w-[192.5px] h-[205px]"
                      >
                        <div className="w-[116px] h-[116px] border border-[#EAEAEA] bg-white rounded-full   flex items-center justify-center mb-3 overflow-hidden">
                          <img
                            src={center}
                            alt="clinic-center"
                            className="object-cover w-full h-full rounded-[124px]"
                          />
                        </div>
                        <div className="text-center">
                          <div className=" font-bold text-title  mb-1">
                            {clinic.name}
                          </div>
                          <div className=" text-someText">{clinic.type}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            {/* <div className="bg-white lg:rounded-[20px] lg:border border-[#DEDEDE] shadow-sm p-6 mb-6 space-y-8">
              <h2 className="text-base font-bold  text-primaryColor mb-4">
                Experience
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-base mb-1">
                    Professional experience
                  </h3>
                  <p className="text-someText text-sm ">
                    Dr. Maha Ahmad, Consultant Family Medicine and Geriatric
                    Medicine - Director of Family Medicine and Primary Care
                    Services, holds a Master's degree in Rheumatology from
                    Manchester, a Diploma in Geriatric Medicine from London, UK,
                    and a University Degree in Palliative Medicine from Teesside
                    University, England, in addition to being a member of the
                    Royal College of Surgeons.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-base mb-1">Languages Spoken</h3>
                  <p className="text-someText text-sm mb-2">
                    Bachelor of Medicine and Surgery, Jordan University of
                    Science and Technology, Jordan
                  </p>
                </div>
              </div>

              <div className="border-t border-[#F0F0F0] py-5">
                <h2 className="text-base font-bold text-primaryColor mb-4">
                  Clinic List
                </h2>

                <div className="flex lg:flex-wrap w-[90vw] lg:w-full overflow-y-auto gap-4">
                  {clinics.map((clinic, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 bg-[#F2F2F2] rounded-lg w-[192.5px] h-[205px]"
                    >
                      <div className="w-[116px] h-[116px] border border-[#EAEAEA] bg-white rounded-full   flex items-center justify-center mb-3 overflow-hidden">
                        <img
                          src={center}
                          alt="clinic-center"
                          className="object-cover w-full h-full rounded-[124px]"
                        />
                      </div>
                      <div className="text-center">
                        <div className=" font-bold text-title  mb-1">
                          {clinic.name}
                        </div>
                        <div className=" text-someText">{clinic.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          </>
        )}

        {activeTab === "Availability" && (
          <SelectDateAndTime serviceType="doctor-profile" />
        )}

        {activeTab === "Reviews" && <ReviewsTab />}
        <div className="flex lg:hidden fixed bottom-3 p-6 w-full bg-white/90 items-center justify-center shadow-[0_-3px_14px_0_rgba(0,0,0,0.15)]">
          <button onClick={handleBookNow} className="bg-primaryColor py-3   text-white w-full   rounded-[15px] font-semibold text-lg  transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
