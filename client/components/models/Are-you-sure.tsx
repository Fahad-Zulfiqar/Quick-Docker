import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link, useNavigate } from "react-router-dom";
import alert from "@/assets/images/alert.gif";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AreYouSure = ({ isOpen, onClose }: Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-[490px] w-[375px] max-w-xs rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-6 shadow-lg focus:outline-none z-[99]">
          <div className="flex flex-col items-center text-center">
            <img src={alert} alt="" className="w-[210px] h-[210px]" />
            <Dialog.Title className="text-[28px] font-bold text-[#333333]">
              Are you sure?
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-lg text-[#677294]">
              Are you sure you choose this service modal for SOS buttons?
            </Dialog.Description>

            <div className="mt-4 flex flex-col w-full gap-4">
              {/* Yes I'm Sure */}
              <Dialog.Close asChild>
                <Link to="/calendar">
                  <button className="bg-[#E5E5E5] w-[293px] h-[54px] text-[#ED5E5E] px-4 py-2 rounded-lg font-semibold hover:bg-[#ED5E5E] hover:text-white">
                    Yes I'm Sure
                  </button>
                </Link>
              </Dialog.Close>

              {/* Cancel */}
              <Dialog.Close asChild>
                <button
                  onClick={() => onClose()}
                  className="bg-primaryColor w-[293px] h-[54px] text-white px-4 py-2 rounded-lg font-semibold hover:bg-primaryColor/90"
                >
                  Cancel
                </button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AreYouSure;
