import React, { useState } from "react";
import { Button } from "../ui/button";
import { DoctorRangeProgress } from "../misc/DoctorRateProgress";
import { MDualRange } from "../misc/MRange";
import { ChevronRight, X } from "lucide-react";

interface Props {
  onClose: (v: boolean) => void;
}

const HomeHealthFilter = ({ onClose }: Props) => {
  const [specialty, setSpecialty] = useState("All");
  return (
    <div className="fixed inset-0 z-50 bg-black/30 overflow-y-auto">
      <div className="bg-gray-100 h-full py-6 mt-0 pt-0 absolute top-0 left-0 right-0 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex justify-between w-full items-center bg-white px-4 py-3 shadow-sm">
            <h3 className="text-primaryColor font-bold text-lg">Filter</h3>
            <button
              className="bg-[#EBEBEB99] rounded-[15px] p-3 cursor-pointer"
              onClick={() => onClose(false)} // Call the prop to close the filter
            >
              <X size={20} className="text-primaryColor" />
            </button>
          </div>

          <div className="px-4 py-6 ">
            {/* Doctor's Specialty */}
            <div>
              <h4 className="mb-3 font-semibold text-gray-800">
                Doctor's specialty
              </h4>
              <div
                className="w-full h-14 rounded-[10px] border-[0.6px] border-gray-300 px-4 flex items-center justify-between bg-white cursor-pointer mb-[16px]"
                onClick={() => {
                  /* Implement logic to open specialty selection modal/dropdown */
                }}
              >
                <span className="text-base text-gray-600">{specialty}</span>
                <ChevronRight className="text-gray-500 w-5 h-5" />
              </div>
            </div>

            {/* Doctor's Experience Slider */}
            <div>
              <h4 className="mb-3 font-semibold text-gray-800">
                Doctor's Experience
              </h4>
              {/* pending */}
              <div className="p-1 h-[109px] flex items-center justify-center bg-white rounded-[10px]">
                <MDualRange valuesInit={[1, 10]} />
              </div>
            </div>

            {/* Doctor's Rate Slider */}
            <div>
              <h4 className="mb-3 font-semibold text-gray-800">
                Doctor's Rate
              </h4>
              {/* pending */}
              <div className="w-full h-[109px] flex items-center justify-center  p-1 bg-white rounded-[10px]">
                <DoctorRangeProgress min={0} max={5} valuesInit={[1, 4]} />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Button */}
        <div className="px-4 py-3 bg-white shadow-inner">
          <Button
            variant="default"
            className="w-full py-3 text-lg font-semibold"
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHealthFilter;
