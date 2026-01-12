import React from "react";
import map from "@/assets/images/maps.svg";
import { useNavigate } from "react-router-dom";

type Props = {};

const AddNewAddress = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div
        className=""
        // onClick={() => setOpen2(false)}
      />

      {/* Modal */}
      <div className="">
        {/* Map side */}
        <div className="w-full ">
          <div className="w-full h-[300px]  rounded-xl overflow-hidden">
            {/* Replace with map embed or image */}
            <img src={map} alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className=" bg-white rounded-t-[20px] flex flex-col p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {/* Form side */}
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="font-semibold text-[#161616] text-base ">
                  Amman - Jordan
                </p>
                <p className="text-xs text-[#757575]">
                  Amman - Jordan - Street Name - 12331212
                </p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="House/Flat Number *"
                  className="w-full rounded-[8px] border border-[#E3E3E3] h-[48px] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                />
              </div>
              {/* Landmark */}
              <div>
                <input
                  type="text"
                  placeholder="Landmark (Optional)"
                  className="w-full rounded-[8px] border border-[#E3E3E3] h-[48px] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                />
              </div>

              {/* House/Flat Number */}

              {/* Address Type */}
              <div>
                <label className="block text-sm  text-[#757575] mb-2">
                  Save as
                </label>
                <div className="flex gap-2 mb-2">
                  <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700">
                    Home
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700">
                    Work
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-primaryColor text-primaryColor bg-blue-50">
                    Other
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Khalda House"
                  className="w-full rounded-[8px] border border-[#E3E3E3] h-[48px] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-full h-[50px] rounded-xl bg-primaryColor text-white font-medium hover:bg-primaryColor text-lg"
              //   onClick={() => setOpen2(false)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
