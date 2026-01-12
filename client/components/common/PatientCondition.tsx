import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import upload from "@/assets/uploadImg.gif";
import BookingSucces from "../models/BookingSucces";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface PatientConditionProps {
  serviceType:
    | "home-health-care"
    | "clinic-visit"
    | "call"
    | "video-call"
    | "chat";
  onContinue?: (data: { condition: string; file: File | null }) => void;
}

const PatientCondition: React.FC<PatientConditionProps> = ({
  serviceType,
  onContinue,
}) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [condition, setCondition] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleConditionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 150) {
      setCondition(e.target.value);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  console.log(serviceType, "servicetype");

  const handleContinue = () => {
    if (!condition.trim()) {
      toast({
        title: "Please describe patient condition",
        variant: "destructive",
      });

      // alert("Please describe your condition.");
      return;
    }

    // Call the onContinue callback if provided (for mobile usage)
    if (onContinue) {
      onContinue({ condition, file });
      return;
    }

    // Desktop navigation logic
    if (location.pathname.includes("clinic-visit")) {
      setThankYouOpen(true);
    } else {
      navigate(`/services/${serviceType}/book/${id}/payment`);
    }
  };

  const navigateBack = () => {
    window.history.back();
  };

  const urlName = location.pathname;
  console.log("url name ", urlName);

  let title = urlName.split("/")[2];

  const titleText = title;
  console.log(titleText, "titile");
  const headerTitle =
    serviceType === "clinic-visit"
      ? ""
      : title === "home-health-care"
        ? "Home Care - "
        : `${titleText} - `;

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden bg-[#F2F2F2] min-h-[100svh] flex flex-col justify-between">
        {/* Mobile Header */}
        <div
          onClick={navigateBack}
          className="flex justify-start items-center p-4 bg-white"
        >
          <button className="bg-[#EBEBEB99] w-[45px] h-[45px] place-content-center rounded-[15px]">
            <ChevronLeft className="mx-auto text-primaryColor" />
          </button>
          <button className="px-4 py-2 text-base font-bold text-primaryColor">
            {headerTitle} Book Now
          </button>
        </div>

        {/* Mobile Main Content */}
        <div className="flex-grow flex flex-col justify-center">
          <h3 className="text-base font-medium text-[#263A43] px-4 my-[24px]">
            Briefly explain your condition or question to the doctor
          </h3>

          {/* Mobile Textarea */}
          <div className="mb-6 relative px-4 ">
            <textarea
              value={condition}
              onChange={handleConditionChange}
              placeholder="Tell the doctor about the symptoms you are experiencing ..."
              maxLength={150}
              rows={8}
              className="bg-[#fff] w-full border-[0.6px] border-gray-200 rounded-[10px] p-4 text-sm text-[#C2C2C2] focus:outline-none focus:ring-2  resize-none "
              style={{ borderColor: "#E0E0E0" }}
            />
          </div>

          <div className="relative py-2">
            <div className="absolute bottom-3 right-5 text-sm text-[#A4A3A3]">
              150/{condition.length} Letter
            </div>
          </div>

          {/* Mobile File Upload */}
          <div className="px-4 h-[130px] mb-[140px]">
            <label className="border bg-[#fff] border-dashed border-[#B1B1B1] rounded-xl  flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition ">
              <input
                type="file"
                className="hidden  bg-[#fff]"
                onChange={handleFileChange}
              />
              <div className="flex flex-col items-center  text-gray-500">
                <img
                  src={upload}
                  alt="upload"
                  className="w-[91px]   opacity-80"
                />
                <p className="text-sm font-semibold text-[#263A43] mb-[24px]">
                  {file ? file.name : "Attach a file (optional)"}
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Mobile Continue Button */}
        <div className="pb-10 pt-6 px-4">
          <button
            onClick={handleContinue}
            disabled={condition.trim() === "" && !file}
            className={`w-full bg-primaryColor text-white py-4 rounded-xl font-semibold text-lg transition duration-300 
              ${condition.trim() === "" && !file ? "cursor-not-allowed bg-primaryColor/60" : ""}
            `}
          >
            {serviceType === "clinic-visit" ? "Book Now" : "Continue"}
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="bg-gray-100 px-6 flex justify-center items-center">
          <div className="bg-white rounded-2xl shadow-md p-10 max-w-7xl w-full">
            <h3 className="text-[24px] sm:text-lg font-semibold text-black mb-2">
              Patient's condition
            </h3>
            <div className="flex justify-between mt-10">
              <p className="text-[16px] sm:text-sm text-[#263A43] mb-4 mr-1">
                Briefly explain your condition or question to the doctor
              </p>
              <div className="text-right text-xs text-[#A4A3A3]">
                150/{condition.length} Letter
              </div>
            </div>

            {/* Desktop Textarea */}
            <div className="mb-6">
              <textarea
                value={condition}
                onChange={handleConditionChange}
                placeholder="Tell the doctor about the symptoms you are experiencing ..."
                maxLength={150}
                rows={4}
                className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </div>

            {/* Desktop File Upload */}
            <label className="border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition mb-8">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
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

        {/* Desktop Continue Button */}
        <div className="flex justify-end bg-gray-100 pb-20 pt-10">
          <button
            onClick={handleContinue}
            className="w-[200px] bg-primaryColor text-white py-3 rounded-lg font-medium hover:bg-primaryColor/90 transition"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {thankYouOpen && (
        <BookingSucces
          setThankYouOpen={setThankYouOpen}
          serviceType={serviceType}
        />
      )}
    </>
  );
};

export default PatientCondition;
