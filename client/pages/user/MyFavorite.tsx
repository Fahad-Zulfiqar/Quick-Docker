import { ChevronLeft, Clock, Heart } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import call from "@/assets/images/call-icon.png";
// import { Button } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Rating from "@/components/ui/Rating";
import dummyDr from "@/assets/images/dummy-dr.jpg";
import { useAppDispatch } from "@/store/hooks";
import { setDr } from "@/store/slices/selectedDrSlice";
import DoctorCards from "../Mobile/common/DoctorCards";

const homeHealthDr = [
  {
    profileImage: "",
    id: "331",
    drName: "Madiha Ahmad",
    department: "Dental",
    experience: "7 Years of experience",
    rating: "4.8",
    isFavorite: true,
  },
  {
    profileImage: "",
    id: "332",
    drName: "Ali Raza",
    department: "Cardiology",
    experience: "10 Years of experience",
    rating: "4.6",
    isFavorite: true,
  },
  {
    profileImage: "",
    id: "333",
    drName: "Sara Khan",
    department: "Neurology",
    experience: "5 Years of experience",
    rating: "4.9",
    isFavorite: true,
  },
  {
    profileImage: "",
    id: "334",
    drName: "Usman Javed",
    department: "Orthopedics",
    experience: "8 Years of experience",
    rating: "4.5",
    isFavorite: true,
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
    isFavorite: true,
  },
];

const MyFavorite = () => {
  const [selectedDr, setSelectedDr] = useState(null);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  // Slice the doctors for current page
  const currentDoctors = homeHealthDr.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const navigate = useNavigate();
  const handleBookNow = (drData: any) => {
    console.log(drData);
    setSelectedDr(drData);
    dispatch(setDr(drData));
    navigate(`/services/home-health-care/book/${drData.id}`);
  };
  return (
    <>
      <div>
        <div
          onClick={() => window.history.back()}
          className="md:hidden flex  justify-start items-center p-4 bg-white  mb-4"
        >
          <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
            <ChevronLeft className="mx-auto text-primaryColor" />
          </button>
          <button className="px-4 py-2  text-base font-bold text-primaryColor ">
            My Favorite
          </button>
        </div>

        <div className="lg:hidden px-4 pb-4  bg-gray-50 min-h-screen">
          <div className=" py-4">
            {currentDoctors.map((dr) => (
              <DoctorCards doctor={dr} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden min-h-screen bg-gray-50">
        {/* Sub header */}
        <div className="bg-primaryColor py-10 text-white relative">
          <div className="max-w-[1160px]  mx-auto">
            <div
              className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft size={20} />
              Back
            </div>

            <p className="text-center text-5xl">My Favorite</p>
            <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1160px]  mx-auto p-4">
          {" "}
          {/* Reduced padding for smaller screens */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {/* Responsive grid */}
            {currentDoctors.map((dr) => {
              const [isFavorite, setIsFavorite] = useState(dr.isFavorite);
              return (
                <Card
                  key={dr.id}
                  className="p-4 rounded-lg shadow-sm" // Reduced padding
                  style={{
                    border: "1px solid #EAEAEA",
                  }}
                >
                  <div className="flex justify-between items-center">
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
                    {/* <Heart className="text-[#ED5E5E]" /> */}
                    {/* Simplified heart icon */}
                  </div>

                  {/* Profile Info */}
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={dr.profileImage ? dr.profileImage : dummyDr}
                      className="w-24 h-24 rounded-full border-2 border-[#EAEAEA]" // Reduced size
                    />
                    <p className="text-[#333333] text-base font-medium">
                      {dr.drName}
                    </p>
                    <p className="text-primaryColor text-sm">{dr.department}</p>
                    <p className="text-[#677294] font-light text-xs">
                      {dr.experience}
                    </p>
                  </div>

                  {/* Actions */}
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
        </div>
      </div>
    </>
  );
};

export default MyFavorite;
