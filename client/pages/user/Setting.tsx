import { ArrowRight, ChevronLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import { Card } from "@/components/ui/card";
import ToggleSwitch from "@/components/misc/ToggleSwitch";

const Setting = () => {
  // const [language, setLanguage] = useState("English");
  // const [matchNotification, setMatchNotification] = useState(false);
  // const [newMessageNotification, setNewMessageNotification] = useState(false);
  // const [messageLinkNotification, setMessageLinkNotification] = useState(false);
  // const [emailNotification, setEmailNotification] = useState(false);

  // const ToggleSwitch = ({ checked, onChange }) => (
  //   <label className="relative inline-flex items-center cursor-pointer">
  //     <input
  //       type="checkbox"
  //       className="sr-only"
  //       checked={checked}
  //       onChange={onChange}
  //     />
  //     <div className="block relative bg-gray-200 rounded-full h-6 w-11 transition-transform duration-200 ease-in-out">
  //       <div
  //         className={`block absolute bg-primaryColor rounded-full h-5 w-5 transition-transform duration-200 ease-in-out ${checked ? "translate-x-6" : ""}`}
  //       ></div>
  //     </div>
  //   </label>
  // );
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          onClick={() => window.history.back()}
          className="md:hidden flex  justify-start items-center p-4 bg-white  "
        >
          <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
            <ChevronLeft className="mx-auto text-primaryColor" />
          </button>
          <button className="px-4 py-2  text-base font-bold text-primaryColor ">
            Setting
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        {/* Sub header */}
        <div className="hidden bg-primaryColor py-10 text-white relative">
          <div className="max-w-[1160px]  mx-auto">
            <div
              className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft size={20} />
              Back
            </div>

            <p className="text-center text-5xl">Setting</p>
            <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
          </div>
        </div>

        {/* content */}
        <div className="max-w-[1160px]  mx-auto py-8">
          <div className="md:bg-white md:shadow-md rounded-[20px] p-6 grid grid-cols-1 lg:grid-cols-3   gap-6 md:border border-[#DEDEDE]">
            {" "}
            {/* Removed fixed height and lg:grid-cols-3 */}
            <div>
              <h3 className="text-lg font-medium mb-4">Language</h3>
              <div className="mb-2 bg-[#F0F4FC] p-4 rounded-lg">
                {" "}
                {/* Removed fixed width and height */}
                <label className="font-semibold text-base">Language</label>
                <div className="flex items-center justify-between mt-[10px]">
                  <p className="text-primaryColor text-xs">English</p>
                  <ArrowRight size={24} className="text-primaryColor" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Push Notification</h3>
              <div className="flex items-center justify-between mb-2 bg-[#F0F4FC] p-4 rounded-[10px]">
                {" "}
                {/* Removed fixed width and height */}
                <label className="text-base">Match</label>
                <ToggleSwitch />
              </div>
              <div className="flex items-center justify-between mb-2 bg-[#F0F4FC] p-4 rounded-[10px]">
                {" "}
                {/* Removed fixed width and height */}
                <label className="text-base ">New message</label>
                <ToggleSwitch />
              </div>
              <div className="flex items-center justify-between mb-2 bg-[#F0F4FC] p-4 rounded-[10px]">
                {" "}
                {/* Removed fixed width and height */}
                <label className="text-base">Message link</label>
                <ToggleSwitch />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Email Notification</h3>
              <div className="flex items-center justify-between mb-2 bg-[#F0F4FC] p-3 rounded-[10px]">
                {" "}
                {/* Removed fixed width and height */}
                <label className="text-base">Email on new match</label>
                <ToggleSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
