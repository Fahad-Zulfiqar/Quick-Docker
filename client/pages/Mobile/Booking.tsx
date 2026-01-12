import { useAppSelector } from "@/store/hooks";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  HeartIcon,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";
import doctor from "@/assets/Booking/Dr.jpg";
import { useNavigate } from "react-router-dom";
import SelectDateAndTime from "../Patient/HomeCare/SelectDatenTime";
import { useLocation } from "react-router-dom";
import pin from "@/assets/icons/pin.svg";

export default function Booking({ serviceType }) {
  const { selectedDr } = useAppSelector((state) => state.dr);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log(serviceType, "service type");

  const urlName = location.pathname;
  console.log("url name ", urlName);

  console.log(data, "data on booking page is");

  let title = urlName.split("/")[2];
  const titleText = title;
  console.log(titleText, "titile");
  const headerTitle =
    serviceType === "clinic-visit"
      ? ""
      : title === "home-health-care"
        ? "Home Care - "
        : title === "video-call"
          ? "Video Call - "
          : `${titleText} - `;

  const Details = () => {
    if (!data?.clinic) {
      return (
        <div className="bg-white relative rounded-[8px] m-4 p-4">
          <div className="flex mb-2 items-center gap-2">
            <img
              src={doctor}
              className="border border-[#EAEAEA] rounded-full w-[70px] h-[70px] object-cover"
            />
            <div>
              <h4 className="text-[#333333] font-medium">Dr.Maha Ahmad</h4>
              <p className="text-primaryColor">Dental</p>
              <p className="text-[#677294] text-xs">7 Years experience</p>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex gap-1 items-center">
              <p>4.8</p>
              <Star size={16} className="text-[#F9E000]" />
            </div>
            <div>
              <button
                onClick={() => navigate("/doctor-profile")}
                className="bg-[#E9F0FF] text-primaryColor font-medium text-xs rounded-lg px-8 py-3"
              >
                View Details
              </button>
            </div>
          </div>

          <Heart className="absolute  right-5 top-3" />
        </div>
      );
    } else
      return (
        <div className="bg-white relative rounded-[8px] m-4 p-4">
          <div className="flex mb-2 items-center gap-2">
            <img
              src={data?.profileImage}
              className="border border-[#EAEAEA] rounded-lg w-[70px] h-[70px] object-cover"
            />
            <div>
              <h4 className="text-[#333333] font-medium">{data?.drName}</h4>
              <p className="text-primaryColor">{data?.department}</p>
              {/* <p className="text-[#677294] text-xs">7 Years experience</p> */}
            </div>
          </div>
          <div className="flex items-center gap-2 px-2 mb-3">
            <img src={pin} />
            <span className="text-primaryColor text-xs font-medium">
              {data?.km}
            </span>
            <span className="text-[#677294] text-xs font-light">
              {data?.address}
            </span>
          </div>
          <div className="flex justify-end w-full">
            <div>
              <button
                onClick={() => navigate("/clinic-details")}
                className="bg-[#E9F0FF] text-primaryColor font-medium text-xs rounded-lg px-8 py-3"
              >
                View Details
              </button>
            </div>
          </div>
          <div className="absolute flex gap-2  right-5 top-3">
            <div className="flex gap-1 items-center">
              <p>4.8</p>
              <Star size={16} className="text-[#F9E000]" />
            </div>
            <Heart className="" />
          </div>
        </div>
      );
  };

  const navigateBack = () => {
    window.history.back();
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="lg:hidden bg-[#F2F2F2] max-w-md mx-auto  h-screen">
      {/* Mobile Header - Only visible on mobile */}
      <div
        onClick={navigateBack}
        className="flex justify-start items-center p-4 bg-white"
      >
        <button className="bg-[#EBEBEB99] w-[45px] h-[45px] place-content-center rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2 text-base font-bold text-primaryColor">
          {headerTitle} Book Now
        </button>
      </div>
      <div className="bg-[#F2F2F2]">
        <Details />

        <SelectDateAndTime serviceType={serviceType} />

        <div className="mx-6 ">
          <button
            onClick={() =>
              navigate(
                `/services/${serviceType}/book/${data?.id}/patient-condition`,
              )
            }
            // disabled={!selectedTime}
            className={
              "w-full py-3 mx-auto  rounded-lg font-medium bg-primaryColor text-white mb-[20px]"
            }
          >
            Complete
          </button>
        </div>
      </div>
      {/* Complete Button */}
    </div>
  );
}
