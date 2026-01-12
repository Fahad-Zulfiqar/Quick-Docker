import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link, useLocation } from "react-router-dom";
import thanks from "@/assets/thankYou.gif";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

const ThankYou = ({ isOpen, onClose }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 flex flex-col justify-end items-center   max-w-xs rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg focus:outline-none z-50">
          <div className="flex flex-col items-center text-center  px-[20px] py-[10px]">
            <img src={thanks} alt="" className="w-[226px] h-[202px]" />
            <Dialog.Title className="text-[28px] w-[157px] font-bold text-[#333333]">
              Thank You !
            </Dialog.Title>
            {location.pathname === "/sos" && (
              <>
                <Dialog.Description className="mt-[7px] mb-[30px] text-[18px] text-[#677294]">
                  Your Appointment Successful
                </Dialog.Description>
                <Dialog.Description className="mb-[70px] text-sm text-[#677294]">
                  You booked an appointment
                </Dialog.Description>
              </>
            )}
            {location.pathname === "/payment-success" && (
              <>
                <Dialog.Description className="mt-[7px] mb-[30px] text-[18px] text-[#677294]">
                  Your Appointment Successful
                </Dialog.Description>
                <Dialog.Description className="mb-[70px] text-sm text-[#677294]">
                  You booked an appointment with Dr. Sarah Mahmoud on February
                  21, at 02:00 PM
                </Dialog.Description>
              </>
            )}

            {location.pathname === "/add-family-member" && (
              <>
                <Dialog.Description className="mt-[7px] mb-[30px] text-[18px] text-[#677294]">
                  User added successfully
                </Dialog.Description>
              </>
            )}

            {location.pathname === "/add-family-member/no-profile" && (
              <>
                <Dialog.Description className="mt-[7px] mb-[30px] text-[18px] text-[#677294]">
                  User added successfully
                </Dialog.Description>
              </>
            )}

            <div className=" flex flex-col  gap-4 w-[258px] h-[54px]">
              <Dialog.Close asChild>
                <button
                  onClick={() => navigate("/")}
                  className="bg-primaryColor text-white px-4 py-2 rounded-lg font-semibold hover:bg-primaryColor/90"
                >
                  Done
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ThankYou;
