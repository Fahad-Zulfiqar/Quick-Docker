import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LocationFilter = () => {
  const [selected, setSelected] = useState("All");
  const [open, setOpen] = useState(false);

  const locations = [
    "All",
    "location1",
    "location2",
    "location3",
    "location4",
    "location5",
  ];

  return (
    <div className="w-full">
      {/* Label */}
      <label className="block text-[16px] font-semibold text-[#263A43] mb-[11px]">
        Location
      </label>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-[265px] h-[60px] rounded-[10px] border-[#B1B1B1] flex items-center justify-between px-4 py-2 border  text-base font-medium text-[#1a1a3f] bg-white"
        >
          {selected}
          <ChevronDown className="w-4 h-4 text-[#1a1a3f]" />
        </button>

        {open && (
          <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md z-20">
            {locations.map((location) => (
              <div
                key={location}
                onClick={() => {
                  setSelected(location);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-[#1a1a3f]"
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;
