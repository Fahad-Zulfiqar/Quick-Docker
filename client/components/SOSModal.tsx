import ReactDOM from "react-dom";
import React, { useState } from "react";
import SOSSiren from "@/assets/sos/sosSiren.gif";
import { CardContent } from "./ui/card";
import home from "@/assets/sos/home.svg";
import visit from "@/assets/sos/visit.svg";
import redamb from "@/assets/sos/redambulance.svg";
import ambulance from "@/assets/sos/ambulance.svg";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import alert from "@/assets/images/alert.gif";

type SOSModalProps = {
  open: boolean;
  onClose: () => void;
};

const SOSModal = ({ open, onClose }: SOSModalProps) => {
  const navigate = useNavigate();
  const [callAmb, setCallAmb] = useState(false);

  if (!open) return null;
  const handleSOS = () => {
    onClose();
    navigate("/sos");
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0   z-50" onClick={() => onClose()}>
      {/* Modal Content */}
      <div
        className="h-[86dvh] bg-[#A5A5A5]/50 backdrop-blur-xl   p-6 rounded-b-[40px] shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col mb-10 items-center">
          <img src={SOSSiren} alt="SOS" className="h-[177px] w-[177px]" />
          <h2 className="text-[#ED1C24] text-[96px] font-bold">SOS</h2>
        </div>

        <div className="flex flex-col gap-5 mt-6">
          <CardContent
            onClick={() => handleSOS()}
            className=" w-full border-b pb-4 p-6 bg-white rounded-lg cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <img src={home} />
              <img src={visit} />
            </div>
            <p>SOS Home Health Care</p>
          </CardContent>

          <CardContent
            className="p-6  w-full bg-white rounded-lg cursor-pointer"
            onClick={() => setCallAmb(true)}
          >
            <div className="flex items-center justify-between">
              <img src={redamb} />
              <img src={ambulance} />
            </div>
            <p>Call an Ambulance</p>
          </CardContent>
        </div>
      </div>

      <Dialog.Root open={callAmb} onOpenChange={setCallAmb}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2  w-[90vw]  rounded-[16px] -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-8  shadow-lg focus:outline-none z-[99]">
            <div className="flex flex-col items-center text-center">
              <img src={alert} alt="" className="w-[210px] h-[210px]" />
              <Dialog.Title className="text-[28px] font-bold text-[#333333]">
                Are you sure?
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-lg text-[#677294]">
                are you sure you choose this service modal for sos buttons?
              </Dialog.Description>
              <div className="mt-4 flex flex-col w-full gap-4">
                <Dialog.Close asChild>
                  <button
                    onClick={() => setCallAmb(false)}
                    className="bg-[#E5E5E5] w-full  text-[#ED5E5E] px-4 py-3 rounded-[15px] text-lg font-semibold hover:bg-[#ED5E5E] hover:text-white "
                  >
                    Yes I'm Sure
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    onClick={() => setCallAmb(false)}
                    className="bg-primaryColor  w-full  text-white px-4 py-3 rounded-[15px] text-lg font-semibold hover:bg-primaryColor/90 "
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>,
    document.getElementById("sos-portal") as HTMLElement,
  );
};

export default SOSModal;
