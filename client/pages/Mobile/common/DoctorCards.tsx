import { Heart, Star } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import dummyDr from "@/assets/images/dummy-dr.jpg";
import { useAppDispatch } from "@/store/hooks";
import { setDr, setServiceType } from "@/store/slices/selectedDrSlice";

const DoctorCards = ({ doctor, serviceType }: any) => {
  const [isFavorite, setIsFavorite] = React.useState(doctor.isFavorite);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBookNow = (drData: any) => {
    console.log(drData.id);
    dispatch(setDr(drData));
    dispatch(setServiceType(serviceType));
    const data = { ...drData };
    navigate(`/services/${serviceType}/booking/${doctor.id}`, { state: data });
  };

  return (
    <div className="bg-white rounded-2xl p-4  border-gray-100 relative mb-4">
      <div className="flex items-start gap-4">
        {/* Doctor Image */}
        <img
          src={doctor.profileImage ? doctor.profileImage : dummyDr}
          alt={doctor.drName}
          className="w-[70px] h-[70px] rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
        />

        {/* Doctor Info */}
        <div className="flex-grow pt-2">
          <p className="text-[14px] font-medium text-[#333333]">
            {doctor.drName}
          </p>
          <p className="text-[13px] text-primaryColor">{doctor.department}</p>
          <p className="text-xs text-[#677294] mt-1">{doctor.experience}</p>
        </div>
      </div>

      {/* Favorite Button (Top Right) */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 text-red-500"
      >
        <Heart
          fill={isFavorite ? "#ED5E5E" : "none"}
          stroke={isFavorite ? "#ED5E5E" : "#ED5E5E"}
          className="w-6 h-6"
        />
      </button>

      {/* Bottom Row: Rating and Buttons */}
      <div className="mt-4 flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-[14px] font-medium text-[#33384B]">
            {doctor.rating}
          </span>
          <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link to={"/doctor-profile"}>
            <button className=" px-4 py-2 text-[12px] font-medium text-primaryColor bg-[#E9F0FF] rounded-lg">
              View Details
            </button>
          </Link>
          <button
            className=" px-4 py-2 text-[12px] font-medium text-white bg-primaryColor rounded-lg"
            onClick={() => handleBookNow(doctor)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCards;
