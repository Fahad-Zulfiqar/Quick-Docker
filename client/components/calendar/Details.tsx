import {
  ChevronLeft,
  Heart,
  MapPin,
  Calendar,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import homeHealthCare from "@/assets/icons/services-icons/home-health-active.svg";
import clinicVisit from "@/assets/icons/services-icons/clinic-visit-active.svg";
import call from "@/assets/icons/services-icons/call-active.svg";
import videoCall from "@/assets/icons/services-icons/video-call-active.svg";
import chat from "@/assets/icons/services-icons/chat-active.svg";
import img from "@/assets/images/about-us-doctors.png";
import clinicVisitIcon from "@/assets/images/clinic.svg";
import AreYouSure from "../models/Are-you-sure";

const Details = () => {
  const navigate = useNavigate();
  const appointmentType = useParams()?.id;
  const appointment = useLocation().state;
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(true);
  const [open, setOpen] = useState(false);

  //   const handleBookAgain = () => {
  //     location.pathname.split("/")[2] === "home-health-care"
  //       ? navigate("/services/home-health-care/book/331")
  //       : location.pathname.split("/")[2] === "doctor-chat"
  //         ? navigate("/services/chat")
  //         : location.pathname.split("/")[2] === "doctor-video-call"
  //           ? navigate("/services/video-call/book/331")
  //           : location.pathname.split("/")[2] === "clinic-visit"
  //             ? navigate("/services/clinic-visit/book/331")
  //             : alert("something went wrong !");
  //   };

  // Define a config object for appointment types
  const appointmentConfig: Record<string, { label: string; icon: string }> = {
    "doctor-video-call": { label: "Doctor Video Call", icon: videoCall },
  };

  const AppointmentTypeCard = ({
    type,
    statusType,
  }: {
    type: string;
    statusType: string;
  }) => {
    const data = appointmentConfig[type];
    if (!data) return null; // fallback

    const statusColor =
      statusType === "in progress"
        ? "bg-[#F6D060]"
        : statusType === "cancelled"
          ? "bg-[#FF6165]"
          : "bg-[#28A265]";

    return (
      <div className="flex items-center gap-3 justify-between rounded-lg p-3 border border-[#EDEDED] pb-4">
        <img src={data.icon} alt={data.label} className="w-8 h-8" />
        <div className="text-lg font-semibold text-gray-900">{data.label}</div>
        <div
          className={`text-white ${statusColor} px-2 py-1 text-xs rounded-lg`}
        >
          {statusType}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-[1160px]  mx-auto">
          <div
            className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>

          <p className="text-center text-5xl">Details</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>

      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-4 bg-white  lg:hidden p-3"
      >
        <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} />
        </div>
        <p className="font-bold text-base text-primaryColor">History Details</p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl bg-[#F2F2F2] lg:bg-white mx-auto lg:px-4 py-8">
        <div className="bg-[#F2F2F2] lg:bg-white  rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10">
            <div className=" lg:hidden bg-white rounded-md mb-2">
              {appointmentType && (
                <AppointmentTypeCard
                  type={appointmentType}
                  statusType={appointment.statusType}
                />
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Doctor Profile */}
              <div className="space-y-8">
                <div className="flex items-start gap-6 rounded-lg p-3 bg-white lg:border border-[#EDEDED] relative">
                  <div className=" flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src={img}
                        alt="Dr. Maha Ahmad"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-sm md:text-md font-semibold text-gray-900">
                      Dr. Maha Ahmad
                    </h2>
                    <p className="text-primaryColor text-sm">Dentist</p>
                    <p className="text-sm text-gray-500">7 Years experience</p>

                    <div className="flex justify-end items-center gap-2 mt-3">
                      <span className="text-base font-medium text-gray-800 ml-1">
                        4.8
                      </span>
                      <Star
                        key={"star"}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-1 right-1 w-10 h-10 flex items-center justify-center"
                  >
                    <Heart
                      size={20}
                      className={
                        isFavorite
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }
                    />
                  </button>
                </div>

                <button
                  //   onClick={handleBookAgain}
                  className="w-full bg-[#fff] border-red-500 border font-semibold py-3 md:py-4 rounded-xl text-red-500 transition-colors"
                  onClick={() => setOpen(true)}
                >
                  Cancel Appointment
                </button>
              </div>

              {/* Appointment Details */}
              <div className="space-y-10">
                <div className="hidden lg:block">
                  {appointmentType && (
                    <AppointmentTypeCard
                      type={appointmentType}
                      statusType={appointment.statusType}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-sm md:text-md font-semibold text-gray-900 mb-4">
                    Date And Time
                  </h3>
                  <div className="space-y-2 bg-white lg:border border-[#EDEDED] p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-primaryColor text-xs md:text-sm">
                        Sunday
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="text-[#9B9B9B]" size={20} />
                        <span className="font-medium text-[#9B9B9B] text-xs md:text-sm">
                          20-10-2023
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="text-[#9B9B9B]" size={20} />
                        <span className="font-medium text-[#9B9B9B] text-xs md:text-sm">
                          02:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AreYouSure isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Details;
