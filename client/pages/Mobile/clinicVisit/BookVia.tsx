import { ChevronLeft, ChevronRight, Globe, Phone } from "lucide-react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bookVia from "@/assets/images/bookVia.svg";

type Props = {};

const BookVia = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const clinic = location.state;
  console.log(clinic, "book via page");
  const data = { ...clinic, clinic: true };

  const handleBookViaApp = () => {
    navigate(`/services/clinic-visit/booking/${clinic?.id}`, { state: data });
  };
  return (
    <div>
      <div
        onClick={() => window.history.back()}
        className="md:hidden flex  justify-start items-center p-4 bg-white  "
      >
        <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2  text-base font-bold text-primaryColor ">
          Book Now
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div
          onClick={handleBookViaApp}
          className="p-6 flex justify-between items-center  bg-white rounded-md shadow-md"
        >
          <div className="flex items-center gap-4">
            <img src={bookVia} />
            <p className="font-medium">Via App</p>
          </div>
          <ChevronRight size={30} className="text-primaryColor" />
        </div>

        <div className="p-6 flex justify-between items-center bg-white rounded-md shadow-md">
          <div className="flex items-center gap-4">
            <Phone size={34} className="text-primaryColor" />
            <p className="font-medium">Via Phone</p>
          </div>
          <ChevronRight size={30} className="text-primaryColor" />
        </div>

        <div className="p-6 flex justify-between items-center bg-white rounded-md shadow-md">
          <div className="flex items-center gap-4">
            <Globe size={34} className="text-primaryColor" />
            <p className="font-medium">Via Website</p>
          </div>
          <ChevronRight size={30} className="text-primaryColor" />
        </div>
      </div>
    </div>
  );
};

export default BookVia;
