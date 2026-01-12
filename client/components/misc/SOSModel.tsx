// SOSModal.tsx
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface SOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSOSHealthCare: () => void;
  onCallAmbulance: () => void;
  sosHealthImage: string;
  ambulanceImage: string;
}

const SOSModal: React.FC<SOSModalProps> = ({
  isOpen,
  onClose,
  onSOSHealthCare,
  onCallAmbulance,
  sosHealthImage,
  ambulanceImage,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
        <Dialog.Content
          className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 w-[380px] 
                   -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20px] p-6 shadow-xl focus:outline-none z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              SOS
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          {/* Service Options */}
          <div className="space-y-4">
            {/* SOS Home Health Care */}
            <button
              onClick={onSOSHealthCare}
              className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-[12px] 
                       cursor-pointer hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 
                       focus:ring-primaryColor focus:ring-offset-2"
            >
              <img
                src={sosHealthImage}
                alt="SOS Home Health Care"
                className="w-12 h-12 object-contain"
              />
              <span className="text-base font-medium text-gray-900">
                SOS Home Health Care
              </span>
            </button>

            {/* Call an Ambulance */}
            <button
              onClick={onCallAmbulance}
              className="w-full flex items-center space-x-4 p-4 border border-gray-200 rounded-[12px] 
                       cursor-pointer hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 
                       focus:ring-red-500 focus:ring-offset-2"
            >
              <img
                src={ambulanceImage}
                alt="Call an Ambulance"
                className="w-12 h-12 object-contain"
              />
              <span className="text-base font-medium text-gray-900">
                Call an Ambulance
              </span>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SOSModal;
