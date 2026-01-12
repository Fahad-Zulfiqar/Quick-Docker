import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";

const Filter = () => {
  const [serviceType, setServiceType] = useState("All");
  const [doctorSpecialty, setDoctorSpecialty] = useState("All");
  const [date, setDate] = useState("All");

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const serviceTypes = ["All", "Consultation", "Follow-up", "Lab Test"];
  const doctorSpecialties = ["All", "Cardiology", "Dermatology", "Neurology"];
  const dates = ["All", "Today", "Tomorrow", "This Week"];

  const handleSelect = (setter: (val: string) => void, value: string) => {
    setter(value);
    setOpenDropdown(null);
  };

  return (
    <div className="w-full max-w-[280px] space-y-4">
      {/* Service Type */}
      <div>
        <label className="block text-sm font-medium text-[#1a1a3f] mb-1">
          Service type
        </label>
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "service" ? null : "service")
            }
            className="w-[265px] h-[60px] rounded-[10px] border-[#B1B1B1] flex items-center justify-between px-4 py-2 border  text-base font-medium text-[#1a1a3f] bg-white"
          >
            {serviceType}
            <ChevronDown className="w-4 h-4 text-[#1a1a3f]" />
          </button>
          {openDropdown === "service" && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-20">
              {serviceTypes.map((item) => (
                <div
                  key={item}
                  onClick={() => handleSelect(setServiceType, item)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#1a1a3f]"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Doctor's Specialty */}
      <div>
        <label className="block text-sm font-medium text-[#1a1a3f] mb-1">
          Doctor's specialty
        </label>
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "doctor" ? null : "doctor")
            }
            className="w-[265px] h-[60px] rounded-[10px] border-[#B1B1B1] flex items-center justify-between px-4 py-2 border  text-base font-medium text-[#1a1a3f] bg-white"
          >
            {doctorSpecialty}
            <ChevronDown className="w-4 h-4 text-[#1a1a3f]" />
          </button>
          {openDropdown === "doctor" && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-20">
              {doctorSpecialties.map((item) => (
                <div
                  key={item}
                  onClick={() => handleSelect(setDoctorSpecialty, item)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#1a1a3f]"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-[#1a1a3f] mb-1">
          Date
        </label>
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdown(openDropdown === "date" ? null : "date")
            }
            className="w-[265px] h-[60px] rounded-[10px] border-[#B1B1B1] flex items-center justify-between px-4 py-2 border  text-base font-medium text-[#1a1a3f] bg-white"
          >
            {date}
            <Calendar className="w-4 h-4 text-[#1a1a3f]" />
          </button>
          {openDropdown === "date" && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-20">
              {dates.map((item) => (
                <div
                  key={item}
                  onClick={() => handleSelect(setDate, item)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#1a1a3f]"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
