import React, { useState } from "react";
import { ChevronLeft, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";

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

type Props = {};

const AllCategories = (props: Props) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

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

  // filter categories by search term
  const filteredCategories = categories.filter((c) =>
    c.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      {/* Mobile Header - Only visible on mobile */}
      <div
        onClick={() => window.history.back()}
        className="md:hidden flex  justify-start items-center p-4 bg-white  pt-10"
      >
        <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2  text-base font-bold text-primaryColor ">
          Categories
        </button>
      </div>

      {/* Original Desktop Header - Hidden on mobile */}
      <div className="hidden lg:block bg-primaryColor py-10 text-white relative">
        <div className="max-w-[1160px] mx-auto relative">
          <div
            className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>
          <p className="text-center text-3xl md:text-5xl">Categories</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden px-4 py-4 bg-white">
        <div className="relative w-full ">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-[46px]   bg-[#F0F0F0] rounded-lg py-3 pl-9 pr-4 text-sm text-[#677294] focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
        </div>
      </div>

      {/* Mobile Categories List */}
      <div className="lg:hidden px-4 pb-4 bg-[#F2F2F2] min-h-screen">
        <h3 className="text-[16px] md:text-lg font-medium text-[#05141F] mb-4 pt-4">
          Select Doctor's specialty
        </h3>

        <div className="space-y-3">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              // <Link to={"/services"}>
              <div
                key={index}
                className="bg-white rounded-[10px] md:rounded-xl md:p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors "
                onClick={() => navigate("/services")}
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
              // </Link>
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">
              No categories found
            </p>
          )}
        </div>
      </div>

      {/* Original Desktop Content Section - Hidden on mobile */}
      <div className="hidden lg:block bg-gray-100 py-16 px-4 sm:px-6 md:flex justify-center">
        <div className="max-w-[1160px] bg-white rounded-2xl shadow-md p-10 mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-baseline">
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold text-primaryColor">
              Categories
            </h2>
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row mt-4 sm:mt-0 justify-center mb-8">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border bg-[#FAFBFE] border-gray-200 py-3 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
                />
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer md:px-0"
                >
                  <Link to={category.route}>
                    <div
                      className={`w-full md:w-32 md:h-32 h-[72px] bg-[#F0F4FC] rounded-2xl flex flex-col gap-1 items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <img
                        src={category.icon}
                        className="md:w-10 w-7 h-7 md:h-10"
                      />
                      <p className="text-xs md:text-sm font-medium text-[#7D8A95]">
                        {category.label}
                      </p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No categories found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
