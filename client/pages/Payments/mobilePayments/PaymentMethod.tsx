import {
  ChevronLeft,
  Plus,
  Edit2,
  Trash2,
  SquarePen,
  X,
  Info,
} from "lucide-react";
import React, { useState } from "react";
import pm from "@/assets/images/pm-page.gif";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import tick from "@/assets/checkout/tick.png";
import visa from "@/assets/icons/visaIcon.svg";
import mastercard from "@/assets/images/mastercard.svg";
import SubHeader from "@/components/common/SubHeader";
import expiry from "@/assets/images/expiry.svg";
import cvv from "@/assets/images/cvv.svg";

const Drawer = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] p-6 animate-slide-up">
        {children}
      </div>
    </div>
  );
};

const PaymentMethod = () => {
  const [open, setOpen] = useState(false);
  const [hasPaymentMethods, setHasPaymentMethods] = useState(false);
  const [showCardsList, setShowCardsList] = useState(false);
  const [infoModal, setInfoModal] = useState(null);
  const navigate = useNavigate();
  // Mock data for existing cards
  const [cards, setCards] = useState([
    {
      id: 1,
      type: "visa",
      lastFour: "123",
      expiry: "07/25",
      holderName: "Mahmoud",
    },
    {
      id: 2,
      type: "mastercard",
      lastFour: "123",
      expiry: "07/25",
      holderName: "Mahmoud",
    },
    {
      id: 3,
      type: "mastercard",
      lastFour: "123",
      expiry: "07/25",
      holderName: "Mahmoud",
    },
    {
      id: 4,
      type: "visa",
      lastFour: "123",
      expiry: "07/25",
      holderName: "Mahmoud",
    },
  ]);

  const handleImageClick = () => {
    // When clicking the wallet image, show the cards list
    setShowCardsList(true);
    setHasPaymentMethods(true);
  };

  const handleDeleteCard = (cardId) => {
    setCards(cards.filter((card) => card.id !== cardId));
    if (cards.length === 1) {
      setHasPaymentMethods(false);
      setShowCardsList(false);
    }
  };

  const CardIcon = ({ type }) => {
    if (type === "visa") {
      return <img src={visa} className="!w-10" />;
    }
    return <img src={mastercard} className="!w-10" />;
  };

  return (
    <div className="min-h-screen flex flex-col  bg-[#F2F2F2]">
      {/* Sub header */}
      <div className="hidden lg:block">
        <SubHeader title="Payment Methods" />
      </div>

      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-4 bg-white  lg:hidden p-3"
      >
        <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} />
        </div>
        <p className="font-bold text-base text-primaryColor">Payment Methods</p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col justify-between h-full flex-1 mx-auto p-8">
        {hasPaymentMethods || showCardsList ? (
          // Cards List View
          <div>
            <div className="flex justify-center mb-8">
              <button
                className="flex items-center gap-2 bg-primaryColor text-white px-6 py-3 rounded-2xl text-lg font-medium hover:bg-primaryColor transition-colors"
                onClick={() => setOpen(true)}
              >
                <Plus size={20} />
                Add a Credit Card
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-10">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white relative flex justify-between items-start rounded-[8px] p-2 shadow-sm "
                >
                  <div className="flex gap-3">
                    <div className="">
                      <CardIcon type={card.type} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[#33384B] text-sm font-medium ">
                        {card.type === "visa" ? "Visa" : "Mastercard"} ••••{" "}
                        {card.lastFour}
                      </p>
                      <p>Mehmoud</p>
                      <p className="text-gray-500 text-sm">
                        Expires in {card.expiry}
                      </p>
                    </div>
                  </div>

                  <div className="flex   gap-2">
                    <button className="">
                      <SquarePen size={20} className="text-[#647583]" />
                    </button>
                    <button
                      className=""
                      onClick={() => handleDeleteCard(card.id)}
                    >
                      <Trash2 size={20} className="text-[#647583]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Empty State
          <div className="flex justify-center items-center flex-col">
            <button
              className="flex items-center gap-2 bg-[#253E96] text-white px-6 py-3 rounded-2xl hover:bg-primaryColor transition-colors"
              onClick={() => setOpen(true)}
            >
              <Plus size={20} />
              Add a Credit Card
            </button>

            <div
              className="mt-12 cursor-pointer transition-transform hover:scale-105"
              onClick={handleImageClick}
              title="Click to view saved payment methods"
            >
              {/* <div className="text-6xl">💳</div> */}
              <img
                src={pm}
                alt="payment-wallet-git"
                className="rounded-[40px] w-[273px] h-[273px]"
              />
            </div>

            <p className="mt-6 text-[#010247] text-center max-w-xs text-base px-4">
              You currently do not have any Payment Methods
            </p>
          </div>
        )}

        <div className="mb-4 mx-4">
          <button
            onClick={() => navigate("/payment-success")}
            className="bg-primaryColor w-full rounded-[15px] px-3 py-3 text-white text-lg font-medium"
          >
            Pay Now
          </button>
        </div>

        {/* Add Card Modal */}
        {open && (
          <>
            <div />
            <>
              <div className="fixed top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[#F2F2F2] h-screen z-50">
                {/* Header */}
                <div className="mb-6 p-6 bg-white flex items-center justify-between">
                  <p className="font-bold text-base text-primaryColor">
                    Add New Card
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-[#EBEBEB99] p-2 rounded-[15px] text-primaryColor"
                  >
                    <X />
                  </button>
                </div>

                {/* Form */}
                <div className="space-y-5 p-6">
                  <div className="bg-[#E7EDFF] border border-primaryColor rounded-lg p-4">
                    <p className="text-primaryColor text-sm flex items-center gap-1">
                      <img src={tick} alt="tick" /> Your payment info is stored
                      securely
                    </p>
                  </div>

                  {/* Holder name + Card number in row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-textColor mb-2">
                        Holder Name
                      </label>
                      <input
                        type="text"
                        placeholder="Mahmoud"
                        className="w-full h-[60px] rounded-[10px] border-[0.6px] border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textColor mb-2">
                        Card Number
                      </label>
                      <div className="flex relative items-center h-[60px] border-[0.6px] border-[#B1B1B1] rounded-lg px-4 py-2.5 bg-white focus-within:ring-2 focus-within:ring-primaryColor focus-within:border-transparent">
                        <input
                          type="text"
                          placeholder="5465 1425 7142 6109"
                          className="w-full rounded-[10px] text-sm focus:outline-none"
                        />
                        <div>
                          <img
                            src={visa}
                            alt="visa-icon"
                            className="absolute right-4 h-12 w-12 top-1.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expiry + CVV in row */}
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-textColor mb-2">
                        Expiry date
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="07/25"
                          className="w-full h-[60px] rounded-[10px] border-[0.6px] border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                        />
                        <Info
                          onClick={() => setInfoModal("expiry")}
                          size={20}
                          className="absolute right-2 top-5 text-[#B1B1B1] cursor-pointer hover:text-primaryColor transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textColor mb-2">
                        CVV
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          placeholder="122"
                          className="w-full h-[60px] rounded-[10px] border-[0.6px] border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                        />
                        <Info
                          onClick={() => setInfoModal("cvv")}
                          size={20}
                          className="absolute right-2 top-5 text-[#B1B1B1] cursor-pointer hover:text-primaryColor transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Info text */}
                  <p className="text-[#4F4F4F] text-sm text-center">
                    In order to verify your account we may charge your account
                    with a small amount that will be refunded.
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 justify-center pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-[15px] bg-[#253E96] text-white font-medium hover:bg-primaryColor transition-colors w-full h-[54px]"
                      onClick={() => {
                        setOpen(false);
                        setHasPaymentMethods(true);
                        setShowCardsList(true);
                      }}
                    >
                      Verify card
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Drawer for Info */}
              <Drawer open={!!infoModal} onClose={() => setInfoModal(null)}>
                {infoModal === "expiry" && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#253E96]">
                        Expiration date
                      </h3>
                      <button
                        onClick={() => setInfoModal(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-[#4F4F4F] text-sm leading-relaxed">
                          You can find this date on the front of your card,
                          under your card number
                        </p>
                      </div>
                      <img src={expiry} className="ml-4" />
                    </div>

                    {/* Got it button */}
                    <button
                      onClick={() => setInfoModal(null)}
                      className="w-full bg-[#253E96] text-white py-3 rounded-[15px] font-medium hover:bg-opacity-90 transition-colors"
                    >
                      Got it
                    </button>
                  </div>
                )}

                {infoModal === "cvv" && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-[#253E96]">CVV</h3>
                      <button
                        onClick={() => setInfoModal(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-[#4F4F4F] text-sm leading-relaxed">
                          You can find this three digit code at the back of your
                          card.
                        </p>
                      </div>

                      {/* Card back illustration */}
                      <img src={cvv} className="ml-4" />
                    </div>

                    {/* Got it button */}
                    <button
                      onClick={() => setInfoModal(null)}
                      className="w-full bg-[#253E96] text-white py-3 rounded-[15px] font-medium hover:bg-opacity-90 transition-colors"
                    >
                      Got it
                    </button>
                  </div>
                )}
              </Drawer>

              <style>{`
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .text-primaryColor {
          color: #253E96;
        }
        
        .text-textColor {
          color: #4F4F4F;
        }
        
        .border-primaryColor {
          border-color: #253E96;
        }
        
        .ring-primaryColor {
          --tw-ring-color: #253E96;
        }
        
        .hover\\:bg-primaryColor:hover {
          background-color: #253E96;
        }
      `}</style>
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
