import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import texture from "@/assets/images/Texture.svg";
import receiptGif from "@/assets/images/ck.gif";
import { useNavigate } from "react-router-dom";
import ThankYou from "@/components/models/Thank-you";
import { useAppSelector } from "@/store/hooks";

type Props = {};

const PaymentSuccess = (props: Props) => {
  const navigate = useNavigate();
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const serviceType = useAppSelector((state) => state.dr.serviceType);
  console.log(serviceType);
  const handleDone = () => {
    if (serviceType === "chat") {
      navigate("/doctor-chat");
    }
    if (serviceType === "call" || serviceType === "video-call") {
      navigate("/doctor-call");
    } else setIsThankYouOpen(true);
  };
  return (
    <div className="relative w-full bg-white min-h-[100dvh] flex flex-col justify-between">
      <div>
        <div className="flex z-10 items-start relative   w-full h-[150px] bg-gradient-to-r from-[#3F56A6] to-[#13276B]   lg:hidden ">
          <img
            src={texture}
            className="absolute left-0 pointer-events-none overflow-hidden w-full h-full"
          />
          <div
            //   onClick={() => navigate(-1)}
            className="flex w-full p-5 pt-10  items-center gap-4 "
          ></div>
        </div>

        <div className="p-16">
          <img src={receiptGif} className="-mt-48  relative z-10" />
          <div className="pb-10 border-b-2 border-dashed border[#F3F3F3]">
            <h2 className="text-[#161616] text-xl font-bold text-center my-4">
              Payment Success
            </h2>
            <div className="flex justify-between items-center font-medium text-sm">
              <p className="text-[#757575] ">Payment Mode</p>
              <p className="text-[#161616]">Visa</p>
            </div>
            <div className="flex justify-between items-center font-medium text-sm">
              <p className="text-[#757575]">Total Amount</p>
              <p className="text-[#161616]">300 SR</p>
            </div>
            <div className="flex justify-between items-center font-medium text-sm">
              <p className="text-[#757575] ">Pay Date</p>
              <p className="text-[#161616]">Apr 10, 2025</p>
            </div>
            <div className="flex justify-between items-center font-medium text-sm">
              <p className="text-[#757575] ">Pay Time</p>
              <p className="text-[#161616]">10:45 am</p>
            </div>
            <div className="flex justify-between items-center font-medium text-sm">
              <p className="text-[#757575] ">Package</p>
              <p className="text-[#161616]">15 min</p>
            </div>
          </div>
          <div className="flex justify-between mt-4 items-center font-medium text-sm">
            <p className="text-[#757575] ">Total Pay</p>
            <p className="text-primaryColor text-lg font-bold">300 $</p>
          </div>
        </div>
      </div>
      <div className=" mb-4 mx-6">
        <button
          onClick={handleDone}
          className="bg-primaryColor w-full rounded-[15px] px-3 py-3 text-white text-lg font-medium"
        >
          Done
        </button>
      </div>

      {isThankYouOpen && <ThankYou isOpen={isThankYouOpen} />}
    </div>
  );
};

export default PaymentSuccess;
