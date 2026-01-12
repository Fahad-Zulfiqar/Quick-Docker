import React from "react";
import ck from "../../assets/images/ck.gif";
import { useNavigate } from "react-router-dom";

type Props = {};

const BookingSucces = ({ setThankYouOpen, serviceType }: any) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0  bg-black/50 z-40"
        // onClick={() => setThankYouOpen(false)}
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 w-[90%] lg:!w-[600px]  left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        role="dialog"
        aria-modal="true"
      >
        <div className=" bg-white rounded-[20px] shadow-2xl flex flex-col">
          {/* Top row: illustration + text */}
          <div className="flex flex-col lg:flex-row items-center gap-8 px-10 pt-10 flex-1">
            {/* POS illustration (replace `ck` with your POS image if needed) */}
            <img
              src={ck}
              alt="Payment device"
              className="w-[244px] h-[244px] object-contain select-none"
              draggable={false}
            />

            {/* Copy */}
            <div className="flex-1">
              <h2 className="text-[28px] text-center lg:text-start leading-8 font-semibold text-[#1F2937]">
                Thank You !
              </h2>
              <p className="mt-2 text-[16px] text-center lg:text-start leading-6 text-[#6B7A99]">
                Your Appointment Successful
              </p>

              <div className="mt-6 text-[#677294] text-[15px] text-center mb-5 lg:text-start leading-7 ">
                <p>You booked an appointment with</p>
                <p className="text-[#677294] font-medium">Dr. Sarah Mahmoud</p>
                <p>on February 21, at 02:00 PM</p>
              </div>
            </div>
          </div>

          {/* Bottom: Done button centered */}
          <div className="pb-8 flex justify-center">
            <button
              onClick={() => {
                setThankYouOpen(false);
                navigate(`/`);
              }}
              className="w-[300px] h-[56px] rounded-[14px] bg-[#1E3A8A] text-white font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSucces;
