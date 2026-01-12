import { ChevronLeft, Plus, Edit2, Trash2, SquarePen } from "lucide-react";
import React, { useState } from "react";
import pm from "../../assets/images/pm-page.gif";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import tick from "@/assets/checkout/tick.png";
import visa from "@/assets/icons/visaIcon.svg";
import mastercard from "@/assets/images/mastercard.svg";
import SubHeader from "@/components/common/SubHeader";

const PaymentMethods = () => {
  const [open, setOpen] = useState(false);
  const [hasPaymentMethods, setHasPaymentMethods] = useState(false);
  const [showCardsList, setShowCardsList] = useState(false);
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
      return <img src={visa} />;
    }
    return <img src={mastercard} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
      <div className="max-w-7xl  mx-auto p-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white relative flex justify-between items-start rounded-[8px] p-6 shadow-sm "
                >
                  <div className="flex gap-10">
                    <div className="">
                      <CardIcon type={card.type} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-900 font-medium mb-4">
                        {card.type === "visa" ? "Visa" : "Mastercard"} ••••{" "}
                        {card.lastFour}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Expires in {card.expiry}
                      </p>
                    </div>
                  </div>

                  <div className="flex   gap-2">
                    <button className="">
                      <SquarePen className="text-[#647583]" />
                    </button>
                    <button
                      className=""
                      onClick={() => handleDeleteCard(card.id)}
                    >
                      <Trash2 className="text-[#647583]" />
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

        {/* Add Card Modal */}
        {open && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
            />
            <div className="fixed top-1/2 left-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-[20PX] p-6 lg:p-8 shadow-2xl z-50">
              {/* Header */}
              <div className="mb-6 flex flex-col lg:flex-row justify-between">
                <h2 className="text-2xl font-semibold mb-2">
                  Add a Credit Card
                </h2>
                <p className=" text-primaryColor text flex items-center gap-1 ">
                  <img src={tick} alt="tick" /> Your payment info is stored
                  securely
                </p>
              </div>

              {/* Form */}
              <div className="space-y-5">
                {/* Holder name + Card number in row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-textColor mb-2">
                      Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Mahmoud"
                      className="w-full h-[60px]  rounded-[10px] border-[0.6px] border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textColor mb-2">
                      Card Number
                    </label>
                    <div className="flex  relative items-center h-[60px] border-[0.6px] border-[#B1B1B1] rounded-lg px-4 py-2.5 bg-white focus-within:ring-2 focus-within:ring-primaryColor focus-within:border-transparent">
                      <input
                        type="text"
                        placeholder="5465 1425 7142 6109"
                        className="w-full  rounded-[10px] text-sm focus:outline-none"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-textColor mb-2">
                      Expiry date
                    </label>
                    <input
                      type="text"
                      placeholder="07/25"
                      className="w-full h-[60px] rounded-[10px] border-[0.6px] border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textColor mb-2">
                      CVV
                    </label>
                    <input
                      type="password"
                      placeholder="122"
                      className="w-full h-[60px]  rounded-[10px] border-[0.6px] border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Info text */}
                <p className=" text-[#4F4F4F] leading-relaxed">
                  In order to verify your account we may charge your account
                  with a small amount that will be refunded.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-[15px] bg-[#253E96] text-white font-medium hover:bg-primaryColor transition-colors w-[191px] h-[54px]"
                    onClick={() => {
                      setOpen(false);
                      setHasPaymentMethods(true);
                      setShowCardsList(true);
                      // Add new card logic here
                    }}
                  >
                    Verify card
                  </button>

                  <button
                    type="button"
                    className="px-8 py-3 rounded-[15px] border border-[#253E96] text-[#253E96] font-medium hover:bg-gray-50 transition-colors w-[191px] h-[54px]"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentMethods;
