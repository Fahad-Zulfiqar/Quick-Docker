import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Range, SliderRange } from "@radix-ui/react-slider";
import { Slider } from "../ui/slider";
import FilterSliders, { DualRangeSlider } from "./RangeFilter";
import { DualRange } from "../misc/Range";
import { Button } from "../ui/button";
import { useLocation } from "react-router-dom";
import CheckBoxes2 from "../misc/CheckBoxes2";
import CheckBoxes1 from "../misc/CheckBoxes1";
import LocationFilter from "../misc/LocationFilter";
import Filter from "../misc/Filters";
import { DoctorRangeProgress } from "../misc/DoctorRateProgress";
import Language from "../misc/Language";
import Gender from "../misc/Gender";

type Props = {};

//  "/services/home-health-care",
//   "/services/call",
//   "/services/video-call",
//   "/services/chat",
//   "/services/clinic-visit",

const ServicesSidebar = ({ type }) => {
  const location = useLocation();
  console.log(location.pathname);

  const checkBoxparagraph = [
    "/services/home-health-care",
    "/services/call",
    "/services/video-call",
    "/services/chat",
  ].includes(location.pathname)
    ? "Select Doctor's specialty"
    : ["/history"].includes(location.pathname)
      ? "Select Service"
      : "Clinic specialty";

  const firstFilterPara = [
    "/services/home-health-care",
    "/services/call",
    "/services/video-call",
    "/services/chat",
  ].includes(location.pathname)
    ? "Doctor's Experience"
    : "Distance";

  const secondFilterPara = [
    "/services/home-health-care",
    "/services/call",
    "/services/video-call",
    "/services/chat",
  ].includes(location.pathname)
    ? "Doctor's Rate"
    : "Clinic Rate";

  return (
    <div className="bg-white rounded-[15px] py-10 w-[300px] mx-auto lg:mx-0 max-h-fit">
      <div className="border mx-4 flex items-center border-[#F0F0F0] bg-[#FAFBFE] rounded-[11px] py-3 px-2 relative">
        <Search className="text-[#9CA3AF] mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="border-none bg-transparent w-full focus:border-none focus:outline-none"
        />
      </div>
      <hr className="my-4" />
      <div className="mx-4">
        <p className="text-[#263A43] text-base font-semibold mb-3">
          {checkBoxparagraph}
        </p>
        {location.pathname === "/history" ? <CheckBoxes2 /> : <CheckBoxes1 />}
      </div>

      <hr className="my-4" />
      <div className="mx-4">
        <p className="text-[#263A43] text-base font-semibold mb-3">
          Doctor Language
        </p>
        <Language />
      </div>


 <hr className="my-4" />
      <div className="mx-4">
        <p className="text-[#263A43] text-base font-semibold mb-3">
          Gender
        </p>
        <Gender />
      </div>


      <hr className="my-4" />

      <div className="mx-4">
        {location.pathname === "/history" ? (
          <Filter />
        ) : (
          <>
            <div>
              {location.pathname === "/services/clinic-visit" && (
                <LocationFilter />
              )}
            </div>

            {location.pathname === "/services/clinic-visit" && (
              <hr className="my-4" />
            )}
            <div>
              <p className="text-[#263A43] text-base font-semibold mb-3">
                {firstFilterPara}
              </p>
              {location.pathname === "/services/clinic-visit" ? (
                <DualRange valuesInit={[1, 10]} />
              ) : (
                <DualRangeSlider valuesInit={[1, 10]} />
              )}
            </div>

            <hr className="my-4" />

            <div>
              <p className="text-[#263A43] text-base font-semibold mb-3">
                {secondFilterPara}
              </p>
              {location.pathname === "/services/clinic-visit" ? (
                <DoctorRangeProgress min={0} max={5} valuesInit={[1, 4]} />
              ) : (
                <DualRangeSlider min={0} max={5} valuesInit={[1, 4]} />
              )}
            </div>
          </>
        )}
      </div>

      <hr className="my-4" />

      <div className="flex items-center mx-4 gap-4">
        <Button
          variant="outline"
          className="w-[114px] h-[50px] rounded-[15px] border border-[#253E96]"
        >
          Clear
        </Button>
        <Button className="w-[155px] h-[50px] rounded-[15px] bg-[#253E96] text-[#fff]">
          Filter
        </Button>
      </div>
    </div>
  );
};

export default ServicesSidebar;
