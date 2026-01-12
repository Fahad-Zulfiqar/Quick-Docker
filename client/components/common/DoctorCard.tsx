import { useAppSelector } from "@/store/hooks";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import doctor from "@/assets/Booking/Dr.jpg";

const DoctorCard = () => {
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
          src={doctor} // Use optional chaining
          alt={selectedDr?.drName || "Doctor Profile"} // Use optional chaining and fallback alt text
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold mt-2 text-[#333333]">
            {selectedDr?.drName}
          </p>
          <p className="text-primaryColor text-sm">{selectedDr?.department}</p>
          <p className="text-[#677294] font-light text-sm">
            {selectedDr?.experience}
          </p>
        </div>
      </div>
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

export default DoctorCard;
