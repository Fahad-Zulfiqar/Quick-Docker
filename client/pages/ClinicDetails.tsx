import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Phone, Mail, MapPin, Globe, Heart } from "lucide-react";
import InfoTab from "@/components/clinicVisit/InfoTab";
import ReviewsTab from "@/components/clinicVisit/ReviewTab";
import GalleryTab from "@/components/clinicVisit/GalleryTab";
import SubHeader from "@/components/common/SubHeader";
import clinic from "@/assets/images/clinic.svg";
import texture from "@/assets/images/Texture.svg";

const ClinicDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("info");
  const [isTabsOpen, setIsTabsOpen] = useState({
    address: true,
    specialties: true,
  });

  const handleTabsClick = (tab: keyof typeof isTabsOpen) => {
    setIsTabsOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "info":
        return <InfoTab />;
      case "reviews":
        return <ReviewsTab />;
      case "gallery":
        return <GalleryTab />;
      default:
        return <InfoTab />;
    }
  };

  return (
    <div className=" bg-[#F2F2F2] pb-20">
      <div>
        {/* Header */}
        <div className="hidden lg:block">
          <SubHeader title="Clinic Details" />
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
            <p className="font-bold text-base text-white">Clinic Info</p>
          </div>
        </div>

        {/* Clinic Header Section */}
        <div className=" bg-white max-w-7xl flex flex-col lg:flex-row   justify-between mx-auto lg:mt-4 lg:rounded-t-[20px] border border-b-0 border-border-[#F0F0F0] p-3 lg:p-6">
          <div className="flex relative flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="rounded-xl -mt-20 z-10 lg:mt-0">
              <img src={clinic} className="w-36 h-36" />
            </div>

            <div className="flex  flex-col gap-4">
              <div>
                <h2 className="text-2xl text-center lg:text-start font-bold mb-2 text-[#33384B]">
                  Clinic Name
                </h2>
                <p className="text-[#7D8A95] text-center lg:text-start  text-xl">
                  Dental
                </p>
              </div>
              <div className="flex items-center  lg:space-x-6 space-x-16 mt-2 text-sm text-gray-500">
                <div className="space-y-1">
                  <span className="font-bold  text-[#33384B] text-base">
                    5 KM
                  </span>
                  <p className="text-[#7D8A95]">Distance</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#33384B] text-base">
                    4.8
                  </span>
                  <p className="text-[#7D8A95]">Rate</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-[#33384B] text-base">
                    2008
                  </span>
                  <p className="text-[#7D8A95]">Since</p>
                </div>
              </div>
            </div>
            <button className="p-2 absolute right-0  rounded-lg">
              <Heart className="w-5 h-5 text-red-500" />
            </button>
          </div>

          <div className="flex flex-col  items-center gap-4 lg:gap-0 mt-4 lg:mt-0 lg:items-end justify-between">
            <div className="hidden  lg:flex items-center space-x-3">
              <button className="bg-primaryColor font-medium text-xs text-white px-8 py-2 rounded-lg ">
                Book Now
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Heart className="w-5 h-5 text-red-500" />
              </button>
            </div>

            {/* Contact Icons */}
            <div className="flex  space-x-2">
              <button className="flex flex-col  text-primaryColor items-center w-[74px] px-5 py-2 bg-[#F0F4FC] rounded-lg hover:bg-gray-100">
                <Phone className="w-6 h-6  mb-1" />
                <span className="text-xs ">Call</span>
              </button>
              <button className="flex flex-col text-primaryColor items-center px-4 py-2 w-[74px] bg-[#F0F4FC] rounded-lg hover:bg-gray-100">
                <Mail className="w-6 h-6 mb-1" />
                <span className="text-xs ">Email</span>
              </button>
              <button className="flex flex-col items-center text-primaryColor px-3 py-2 w-[74px] bg-[#F0F4FC] rounded-lg hover:bg-gray-100">
                <MapPin className="w-6 h-6  mb-1" />
                <span className="text-xs ">Directions</span>
              </button>
              <button className="flex flex-col text-primaryColor items-center px-3 py-2 w-[74px] bg-[#F0F4FC] rounded-lg hover:bg-gray-100">
                <Globe className="w-6 h-6  mb-1" />
                <span className="text-xs ">Website</span>
              </button>
            </div>
          </div>
        </div>
        {/* Tabs Navigation */}
        <div className="bg-white max-w-7xl mx-auto mt-0 border  border-[#F0F0F0] lg:rounded-b-[20px]">
          <div className="flex lg:w-fit justify-center items-center gap-6 font-bold text-[14px]  px-4 ">
            <button
              className={`flex-1 py-4 px-6 text-center   ${
                activeTab === "info"
                  ? "text-primaryColor font-bold border-b-4 border-primaryColor"
                  : "text-[#4F4F4F] font-medium hover:text-primaryColor"
              }`}
              onClick={() => setActiveTab("info")}
            >
              Info
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center  ${
                activeTab === "reviews"
                  ? "text-primaryColor font-bold border-b-4 border-primaryColor"
                  : "text-[#4F4F4F] font-medium hover:text-primaryColor"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`flex-1 py-4 px-6 text-center  ${
                activeTab === "gallery"
                  ? "text-primaryColor font-bold border-b-4 border-primaryColor"
                  : "text-[#4F4F4F] font-medium hover:text-primaryColor"
              }`}
              onClick={() => setActiveTab("gallery")}
            >
              Gallery
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto lg:mt-4 ">{renderTabContent()}</div>
        <div className="flex lg:hidden z-50 fixed bottom-0 p-6 w-full bg-white/90 items-center justify-center shadow-[0_-3px_14px_0_rgba(0,0,0,0.15)]">
          <button className="bg-primaryColor py-3   text-white w-full   rounded-[15px] font-semibold text-lg  transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
