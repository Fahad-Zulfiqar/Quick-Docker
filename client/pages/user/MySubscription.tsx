import { ChevronLeft, Plus } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import videoCall from "@/assets/icons/services-icons/video-call-active.svg";
import call from "@/assets/icons/services-icons/call-active.svg";
import chat from "@/assets/icons/services-icons/chat-active.svg";
import { Button } from "@/components/ui/button";
import SubHeader from "@/components/common/SubHeader";
import { useIsMobile } from "@/hooks/use-mobile";
import texture from "@/assets/images/Texture.svg";

const communicationData = [
  {
    type: "Video Call",
    icon: videoCall,
    date: "20/10/2024",
    time: "02:00PM",
    duration: "2 min",
  },
  {
    type: "Call",
    icon: call,
    date: "20/10/2024",
    time: "02:00PM",
    duration: "1 min",
  },
  {
    type: "Chat",
    icon: chat,
    date: "20/10/2024",
    time: "02:00PM",
    duration: "5 min",
  },
  {
    type: "Video Call",
    icon: videoCall,
    date: "20/10/2024",
    time: "02:00PM",
    duration: "2 min",
  },
  {
    type: "Call",
    icon: call,
    date: "20/10/2024",
    time: "02:00PM",
    duration: "1 min",
  },
  {
    type: "Chat",
    icon: chat,
    date: "20/10/2024",
    time: "02:00PM",
    duration: "5 min",
  },
];
type Props = {
  onContinue?: any;
};
const MySubscription = ({ onContinue }: Props) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleAddPlan = () => {
    if (!isMobile) {
      navigate("/add-new-plan");
    } else navigate("/select-plan");
  };
  const handleContinue = () => {
    navigate("/doctor-call");
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Sub header */}
      <div className="hidden lg:block">
        <SubHeader title="My Subscriptions" />
      </div>
      <div  
        onClick={() => navigate(-1)}
        className="flex items-center  gap-4 bg-white  lg:hidden p-3"
      >
        <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} className="!text-xl" />
        </div>
        <p className="font-bold text-base text-primaryColor">My Subscription</p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-4 sm:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Plan card */}
          <div className="lg:rounded-[20px] flex flex-col items-center justify-center w-full lg:w-[312px] h-[280px] sm:h-[312px] relative border bg-gradient-to-r from-[#3F56A6] to-[#13276B] p-6">
            <div className="text-white text-4xl font-bold mb-2">15 Min</div>
            <p className="text-white text-lg font-bold mb-4">100.00 $</p>
            <p className="text-white text-lg font-bold mb-6 text-center">
              Remaining balance: 8 Min
            </p>
            <div
              onClick={() => handleAddPlan()}
              className="w-full  flex justify-center items-center mx-auto sm:w-auto"
            >
              <Button className="lg:w-full !bg-primaryColor sm:w-[223.5px] h-[54px] rounded-[11px] border border-white flex items-center justify-center gap-2">
                <Plus className="text-white" size={18} />
                Add New Plan
              </Button>
            </div>
            <img
              src={texture}
              className="lg:hidden absolute top-0 right-0 w-full h-full pointer-events-none"
            />
          </div>

          {/* History Section */}
          <div className="flex-1 mx-3 lg:mx-0">
            <h1 className="text-primaryColor font-bold text-lg mb-4">
              Expended Balance
            </h1>
            <div className="space-y-3">
              {communicationData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 sm:justify-between bg-white py-5 px-4 w-full rounded-lg shadow-sm"
                >
                  {/* Type */}
                  <div className="flex items-center lg:w-36 mb-2 sm:mb-0">
                    <img
                      src={item.icon}
                      alt={item.type}
                      className="w-20 h-8 mr-3"
                    />
                    <p className="hidden lg:block text-nowrap">{item.type}</p>
                  </div>

                  {/* Date & Time */}
                  <div>
                    <p className="block lg:hidden">{item.type}</p>
                    <p className="text-xs text-[#8F8F8F]  w-36 mb-1 sm:mb-0 !text-start">
                      {item.date} - {item.time}
                    </p>
                  </div>

                  {/* Duration */}
                  <p className="text-sm text-[#ED5E5E] text-nowrap w-full lg:w-auto text-right">
                    - {item.duration}
                  </p>
                </div>
              ))}
            </div>
            {onContinue && (
              <button
                onClick={() => handleContinue()}
                className="bg-primaryColor text-white text-lg font-semibold rounded-[15px] py-3 w-full mt-4"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubscription;
