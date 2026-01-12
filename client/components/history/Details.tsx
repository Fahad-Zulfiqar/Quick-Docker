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

const Details = () => {
  const navigate = useNavigate();
  const appointmentType = useParams()?.id;
  const appointment = useLocation().state;
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(true);

  const handleBookAgain = () => {
    location.pathname.split("/")[2] === "home-health-care"
      ? navigate("/services/home-health-care/booking/331")
      : location.pathname.split("/")[2] === "doctor-chat"
        ? navigate("/services/chat")
        : location.pathname.split("/")[2] === "doctor-video-call"
          ? navigate("/services/video-call/booking/331")
          : location.pathname.split("/")[2] === "clinic-visit"
            ? navigate("/services/clinic-visit/booking/331")
            : alert("something went wrong !");
  };

  // Define a config object for appointment types
  const appointmentConfig: Record<string, { label: string; icon: string }> = {
    "home-health-care": { label: "Home Health Care", icon: homeHealthCare },
    "clinic-visit": { label: "Clinic Visit", icon: clinicVisit },
    "doctor-chat": { label: "Doctor Chat", icon: chat },
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
      <div className="flex items-center gap-3 justify-between rounded-lg p-3  lg:border border-[#EDEDED] pb-4">
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
    <div className="min-h-screen relative bg-[#f8f9fa]">
      {/* Header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-[1160px] mx-auto relative px-4">
          <div
            className="inline-flex cursor-pointer hover:underline text-sm md:text-base items-center absolute top-[20%] lg:top-1/2 -translate-y-1/2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>
          <p className="text-center text-2xl md:text-4xl font-semibold">
            Details
          </p>
          <img
            src={vector}
            className="absolute right-0 top-0 h-24 md:h-32 w-auto opacity-80"
          />
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
      <div className="max-w-6xl mx-auto lg:px-4 py-8">
        <div className="bg-[#F2F2F2] lg:bg-white lg:rounded-3xl lg:shadow-sm lg:border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10">
            <div className=" lg:hidden bg-white rounded-md">
              {appointmentType && (
                <AppointmentTypeCard
                  type={appointmentType}
                  statusType={appointment.statusType}
                />
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
              {/* Doctor Profile */}
              <div className="space-y-8">
                {appointmentType !== "clinic-visit" && (
                  <div className="flex items-start gap-6 rounded-lg p-3 bg-white mt-4 lg:mt-0 border lg:border-[#EDEDED] relative">
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
                      <p className="text-sm text-gray-500">
                        7 Years experience
                      </p>

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
                )}
                {appointmentType === "clinic-visit" && (
                  <div className="rounded-lg p-3 bg-white lg:border border-[#EDEDED] relative">
                    <div className="flex items-start gap-6 ">
                      <div className=" flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200">
                          <img
                            src={clinicVisitIcon}
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
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-medium text-gray-800 ml-1">
                            4.8
                          </span>
                          <Star
                            key={"star"}
                            size={16}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        </div>
                        <button
                          onClick={() => setIsFavorite(!isFavorite)}
                          className="w-10 h-10"
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
                    </div>
                    <div className="flex gap-4 py-2 px-3">
                      <p className="text-primaryColor text-xs w-10">5 KM</p>
                      <p className="text-xs truncate">
                        Nablus , Eastern Ring Branch Road, Ga..
                      </p>
                    </div>
                  </div>
                )}
                <div className=" bg-white lg:bg-transparent lg:pt-0 ">
                  <button
                    onClick={handleBookAgain}
                    className="w-full bg-primaryColor text-white font-semibold py-3 md:py-4 rounded-xl transition-colors"
                  >
                    Book Again
                  </button>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-10">
                {/* {appointmentType === "home-health-care" && (
                  <div className="flex items-center gap-3 justify-between rounded-lg p-3 border border-[#EDEDED] pb-4">
                    <img src={homeHealthCare} alt="" className="w-8 h-8" />
                    <div className="text-lg font-semibold text-gray-900">
                      Home Health Care
                    </div>
                    <div className={"text-white " + (appointment.status === "in progress" ? "bg-[#F6D060]" : "bg-[#28A265]") + " px-2 py-1 text-xs rounded-lg"}>
                    {appointment.status}
                    </div>
                  </div>
                )}
                {appointmentType === "clinic-visit" && (
                  <div className="flex items-center gap-3 justify-between rounded-lg p-3 border border-[#EDEDED] pb-4">
                    <img src={clinicVisit} alt="" className="w-8 h-8" />
                    <div className="text-lg font-semibold text-gray-900">
                      Clinic Visit
                    </div>
                    <div className={"text-white " + (appointment.status === "in progress" ? "bg-[#F6D060]" : "bg-[#28A265]") + " px-2 py-1 text-xs rounded-lg"}>
                    {appointment.status}
                    </div>
                  </div>
                )}
                {appointmentType === "doctor-chat" && (
                  <div className="flex items-center gap-3 justify-between rounded-lg p-3 border border-[#EDEDED] pb-4">
                    <img src={chat} alt="" className="w-8 h-8" />
                    <div className="text-lg font-semibold text-gray-900">
                      Doctor Chat
                    </div>
                    <div className={"text-white " + (appointment.status === "in progress" ? "bg-[#F6D060]" : "bg-[#28A265]") + " px-2 py-1 text-xs rounded-lg"}>
                    {appointment.status}
                    </div>
                  </div>
                )}
                {appointmentType === "doctor-video-call" && (
                  <div className="flex items-center gap-3 justify-between rounded-lg p-3 border border-[#EDEDED] pb-4">
                    <img src={videoCall} alt="" className="w-8 h-8" />
                    <div className="text-lg font-semibold text-gray-900">
                      Doctor Video Call
                    </div>
                    <div className={"text-white " + (appointment.status === "in progress" ? "bg-[#F6D060]" : "bg-[#28A265]") + " px-2 py-1 text-xs rounded-lg"}>
                    {appointment.status}
                    </div>
                  </div>
                )} */}

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
                  <div className="space-y-2 lg:border border-[#EDEDED] p-3 rounded-lg bg-white">
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

                {/* Address */}
                {appointmentType === "home-health-care" && (
                  <div className="space-y-4">
                    <h3 className="text-sm md:text-md font-semibold text-gray-900">
                      Address
                    </h3>
                    <div className="space-y-2 lg:border border-[#EDEDED] p-3 rounded-lg bg-white">
                      <div>
                        <div className="font-medium text-gray-900 text-base md:text-lg">
                          Home
                        </div>
                        <p className="text-[#9B9B9B] text-sm leading-relaxed">
                          Plot no.209, Kavuri Hills, Madhapur, Telangana 500
                        </p>
                      </div>

                      {/* Map Placeholder */}
                      <div className="w-full h-40 md:h-52 rounded-lg relative overflow-hidden border border-gray-200 bg-[#f0f9ff] flex items-center justify-center">
                        <MapPin size={28} className="text-indigo-600" />
                        <span className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs text-gray-500 shadow-sm">
                          Mapbox
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {(appointmentType === "doctor-video-call" ||
                  appointmentType === "doctor-chat") && (
                  <div className="flex items-center gap-3 bg-white justify-between rounded-lg p-3 border border-[#EDEDED] pb-4">
                    <div className="flex items-center gap-3">
                      <img src={chat} alt="" className="w-8 h-8" />
                      <div className="text-lg font-semibold text-gray-900">
                        Chat
                      </div>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <div className="text-primaryColor text-xs md:text-sm ">
                        Show Chat
                      </div>
                      <ArrowRight size={20} className="text-primaryColor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Diagnosis & Treatment */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 mt-4 lg:mt-0">
                    Doctor's Diagnosis
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed bg-white lg:border border-[#EDEDED] p-3 rounded-lg">
                    Is Simply Dummy Text Of The Printing And Typesetting
                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
                    Text Ever Since The 1500s, When An Unknown Printer
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                    Treatment
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed bg-white lg:border border-[#EDEDED] p-3 rounded-lg">
                    Is Simply Dummy Text Of The Printing And Typesetting
                    Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
                    Text Ever Since The 1500s, When An Unknown Printer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
