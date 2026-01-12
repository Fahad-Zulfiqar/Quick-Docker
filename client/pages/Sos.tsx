import React, { useState } from "react";
import { ChevronLeft, Paperclip } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import attachment from "@/assets/images/attachments.svg";
import upload from "@/assets/uploadImg.gif";

import alert from "@/assets/images/alert.gif";
// import { T } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";
import ThankYou from "@/components/models/Thank-you";
type Props = {};

const Sos = (props: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-[#F2F2F2]  h-[91vh] lg:h-auto lg:bg-white">
      {/* Sub header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-[1140px] mx-auto relative">
          <div
            className="inline-flex cursor-pointer w-fit hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>
          <p className="text-center text-lg sm:text-3xl md:text-5xl">
            SOS Home Health Care
          </p>
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
        <p className="font-bold text-base text-primaryColor">
          SOS Home Health Care
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-[#F2F2F2] lg:py-10 lg:px-6 flex justify-center items-center">
        <div className="max-w-[1160px]   lg:bg-white lg:rounded-3xl  lg:shadow-md p-6 lg:p-10  w-full">
          <h3 className="text-3xl hidden lg:block sm:text-lg font-bold text-black mb-2">
            Patient's condition
          </h3>
          <div className="flex justify-between mt-10">
            <p className="text-base font-medium sm:text-sm text-[#263A43] mb-4 mr-1">
              Briefly explain your condition or question to the doctor
            </p>
            <div className="hidden lg:block text-right text-xs text-[#A4A3A3]">
              150/{condition.length} Letter
            </div>
          </div>

          {/* Textarea */}
          <div className="lg:mb-6">
            <textarea
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              placeholder="Tell the doctor about the symptoms you are experiencing ..."
              maxLength={150}
              rows={4}
              className="w-full border-[0.6px] rounded-lg border-[#B1B1B1]   p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className=" lg:hidden mb-6 text-right text-xs text-[#A4A3A3]">
            150/{condition.length} Letter
          </div>

          {/* File Upload */}
          <label className="border-2 border-dashed rounded-xl bg-white border-[#B1B1B1] p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition mb-8">
            <input type="file" className="hidden" onChange={handleFileChange} />
            <div className="flex flex-col items-center text-gray-500">
              <img
                src={upload}
                alt="upload"
                className="w-[131px] h-[131px] mb-3 opacity-80"
              />
              <p className="text-xs sm:text-sm font-medium text-black">
                {file ? file.name : "Attach a file (optional)"}
              </p>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100 pb-20">
        <button
          onClick={() => setOpen(true)}
          className="lg:w-[200px] w-full mx-4 lg:mx-0 bg-primaryColor text-white py-3 rounded-lg font-medium hover:bg-primaryColor/90 transition"
        >
          Book Now
        </button>
      </div>

      <ThankYou isOpen={open} onClose={() => setOpen(true)} />
    </div>
  );
};

export default Sos;
