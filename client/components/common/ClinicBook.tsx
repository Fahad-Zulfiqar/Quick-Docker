import { useAppSelector } from "@/store/hooks";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Clinic from "@/assets/Booking/clinic-visit.png";

const ClinicBook = () => {
  const { selectedDr } = useAppSelector((state) => state.dr);
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="relative mb-4">
      {/* Heart icon with optional chaining for selectedDr properties */}
      <Heart
        size={20}
        onClick={() => setIsFavorite(!isFavorite)}
        fill={isFavorite ? "red" : "white"}
        stroke="red"
        className="absolute top-0 right-0 cursor-pointer" // Added cursor-pointer for visual feedback
      />
      <div className="flex gap-4">
        <img
          src={Clinic} // Use optional chaining
          alt={selectedDr?.drName || "Clinic Profile"} // Use optional chaining and fallback alt text
          className="w-[70px] h-[70px] rounded-[10px] object-cover border border-[#EAEAEA]"
        />
        <div>
          <p className="font-semibold mt-2 text-[#333333]">Clinic Name</p>
          <p className="text-primaryColor text-[13px]">
            {selectedDr?.department}
          </p>
          <p className="text-primaryColor font-medium text-[12px]">5 KM</p>
        </div>
      </div>
      <p className="font-[300] text-[12px] text-[#677294] my-[12px]">
        Nablus , Eastern Ring Branch Road, Ga..
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 mt-2">
          <span className="text-[#33384B] font-medium">
            {selectedDr?.rating}
          </span>
          <span className="text-yellow-400">★</span>
        </div>
        <Link
          to={"/doctor-profile"}
          className="mt-3 px-4 border-0 py-1.5  text-[#253E96] text-[12px] font-medium rounded-[10px] bg-[#E9F0FF] w-[130px]  text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ClinicBook;
