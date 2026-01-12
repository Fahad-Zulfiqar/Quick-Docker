import { Card } from "@/components/ui/card";
import Rating from "@/components/ui/Rating";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import dummyDr from "@/assets/images/dummy-dr.jpg";
import locate from "@/assets/Locate.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ClinicCards = ({ dr }) => {
  const [isFavorite, setIsFavorite] = useState(dr.isFavorite);
  const navigate = useNavigate();

  const handleClinicDetails = (dr) => {
    navigate("/clinic-details", { state: { clinicData: dr } });
  };
  const handleBookNow = (dr) => {
    navigate("/services/clinic-visit/book/book-via", { state: dr });
  };

  return (
    <Card className="p-6 mb-14">
      <div className="flex justify-between items-center">
        <Rating
          rating={dr.rating}
          className="!text-[#33384B] text-[14px] font-medium"
        />
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
          className="w-[97px] h-[97px] -mt-20 rounded-[10px] border border-[#EAEAEA] object-cover"
        />
        <p className="text-[#333333] text-[14px] font-medium">{dr.drName}</p>
        <p className="text-primaryColor text-[13px] ">{dr.department}</p>
        <div className="flex gap-x-3">
          <img src={locate} alt="location-svg" />
          <p className="text-primaryColor font-medium text-[12px]">{dr.km}</p>
          <p className="text-[#677294] font-light text-[12px]">{dr.address}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          className="w-full text-[12px] rounded-lg font-medium bg-[#E9F0FF] text-primaryColor"
          onClick={() => handleClinicDetails(dr)}
          // onClick={() => handleClinicDetails(dr)}
        >
          View Details
        </Button>
        <Button
          onClick={() => handleBookNow(dr)}
          className="w-full text-[12px] rounded-lg font-medium"
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default ClinicCards;
