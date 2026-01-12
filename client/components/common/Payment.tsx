import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Check,
  LocateIcon,
  MapPinned,
  SquarePen,
  Trash2,
  Info,
} from "lucide-react";

import { useLocation } from "react-router-dom";
import map from "@/assets/checkout/map.png";
import master from "@/assets/checkout/Mastercard.png";
import visa from "@/assets/checkout/visa.png";
import tick from "@/assets/checkout/tick.png";
import BookingSucces from "../models/BookingSucces";

const check = (selected) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1.28711" y="1.91504" width="22" height="22" rx="11" fill="white" />
    <rect
      x="1.28711"
      y="1.91504"
      width="22"
      height="22"
      rx="11"
      stroke={selected ? "#253E96" : "#7F7F7F"}
      stroke-width="2"
    />
    <path
      d="M11.2871 16.915L10.4459 17.4558C10.6349 17.7498 10.9638 17.9238 11.3132 17.9147C11.6626 17.9056 11.9819 17.7147 12.1554 17.4112L11.2871 16.915ZM10.1283 13.2632C9.82964 12.7986 9.21092 12.6641 8.74635 12.9627C8.28178 13.2614 8.14728 13.8801 8.44593 14.3447L10.1283 13.2632ZM16.1554 10.4112C16.4294 9.93166 16.2628 9.32081 15.7832 9.0468C15.3037 8.77279 14.6929 8.93938 14.4189 9.4189L16.1554 10.4112ZM12.1283 16.3743L10.1283 13.2632L8.44593 14.3447L10.4459 17.4558L12.1283 16.3743ZM14.4189 9.4189L10.4189 16.4189L12.1554 17.4112L16.1554 10.4112L14.4189 9.4189Z"
      fill={selected ? "#253E96" : "#fff"}
    />
  </svg>
);
interface PaymentProps {
  serviceType: "home-health" | "clinic" | "call" | "video-call" | "chat";
}

const Payment: React.FC<PaymentProps> = ({ serviceType }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [hasPaymentMethods, setHasPaymentMethods] = useState(false);
  const [showCardsList, setShowCardsList] = useState(false);
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);

  const [selectedPlan, setSelectedPlan] = useState<
    "15min" | "30min" | "1hour" | null
  >("15min");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [selectedPayment, setSelectedPayment] = useState<string>("mastercard");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const plans = [
    { name: "One visit", price: "100.00 $", value: "15min" },

  ];

  const selectAddress = [
    {
      id: "Home",
      type: "XYZ",
    },
    {
      id: "Khalda House",
      type: "XYZ",
    },
  ];

  const paymentMethods = [
    {
      id: "mastercard",
      type: "Mastercard",
      img: master,
      lastFour: "8765",
      holder: "Mahmoud AlNatour",
      expiry: "07/25",
    },
    {
      id: "visa",
      type: "Visa",
      img: visa,
      lastFour: "1234",
      holder: "Mahmoud AlNatour",
      expiry: "08/26",
    },
  ];

  let month = false
  let year = false


  const handlePayNow = () => {
    if (!selectedPlan || !selectedPayment) {
      alert("Please select a plan and payment method.");
      return;
    }
    // alert("Payment successful! Booking confirmed.");
    setThankYouOpen(true);
    // navigate(`/services/${serviceType}`);
  };

  return (
    <div className="bg-white rounded-[20px] min-h-screen flex justify-center p-4">
      <div className=" w-full max-w-4xl p-6 relative">
        <h1 className="text-2xl  font-semibold mb-6">Checkout details</h1>

        {/* Select Plan */}
        <div className="border border-[#D7D7D7] rounded-[14px] p-6 mb-6">
          <div className="flex flex-col lg:flex-row  gap-6">
            {/* Packages */}
            <div>
              <h1 className="  mb-2 font-bold text-[24px] text-[#141718]">
                Select Plan
              </h1>
              <h1 className="font-semibold text-xl ">Packages</h1>
              <p className="text-[#818181] text-sm mb-2">
                You can choose the plan that suits you
              </p>
              <div className="space-y-3 ">
                {plans.map((plan) => {
                  const isSelected = selectedPlan === plan.value;

                  return (

                    <div

                      className={`p-4 relative border w-full flex flex-col justify-between border-[#E0E0E0] rounded-2xl text-left transition bg-primaryColor text-white`}

                    >
                      <div className="flex gap-8 justify-between">
                        <div>

                          <p className="font-medium text-base">{plan.name}</p>
                          <p className="text-2xl  font-medium text-nowrap">20.00 $</p>
                        </div>


                      </div>
                      <p className="text-sm">{plan.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className=" hidden lg:flex items-center space-x-4 ">
              <div className="flex flex-col items-center h-full">
                <div className="flex-grow border-l border-gray-300"></div>

                <span className="px-2 text-gray-500 text-sm font-medium border rounded-full py-2">OR</span>
                <div className="flex-grow border-l border-gray-300"></div>
              </div>
            </div>







            {/* Subscription */}
            <div className="w-full">
              <h2 className="font-semibold text-xl text-black mb-2 ">
                Subscription
              </h2>
              <p className="text-sm text-[#818181] mb-4">
                You can choose the plan that suits you
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Over 1 hour use per day",
                  "Communicate with 300+ doctors",
                  "10+ hours of video communication",
                  "You can distribute the hours",
                ].map((f, i) => {

                  month = billingCycle === 'monthly'
                  year = billingCycle === 'yearly'

                  return (
                    <div key={i} className="flex items-center text-sm">
                      <Check className="text-primaryColor w-5 h-5 mr-2" />
                      <span className="text-sm">{f}</span>
                    </div>

                  )

                })}
              </div>
              <div className="grid grid-cols-2 w-full gap-4">
                <div
                  onClick={() => setBillingCycle("monthly")}
                  className={`p-4 relative border w-full flex flex-col justify-between border-[#E0E0E0] rounded-2xl text-left transition ${billingCycle === "monthly"
                    ? "bg-primaryColor text-white "
                    : "border-gray-300 bg-white"
                    }`}
                >
                  <div className="flex gap-8 justify-between">
                    <div>


                      <p className="font-medium text-base">Monthly</p>
                      <p className="text-2xl  font-medium text-nowrap">20.00 $</p>
                    </div>
                    <div className="absolute right-2 top-2">

                      {check(month)}
                    </div>

                  </div>
                  <p className="text-sm">Billed Monthly</p>
                </div>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`p-4 relative border  border-[#E0E0E0] rounded-2xl text-left transition ${billingCycle === "yearly"
                    ? "bg-primaryColor text-white"
                    : "border-gray-300 bg-white"
                    }`}
                >
                  <div className="flex gap-8 justify-between">
                    <div>
                      <p className="font-medium text-base">Yearly</p>

                      <p className="text-2xl  font-medium text-nowrap">200.00 $</p>
                      <p className="text-sm text-[#7E7E7E] bg-[#6666661A] rounded-full my-2 text-center">Save 40.00 $</p>
                      <p className="text-sm text-[#7E7E7E] text-nowrap">Free 15 Min Trial</p>
                    </div>
                    <div className="absolute right-2 top-2">

                      {check(year)}
                    </div>

                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {location.pathname.split("/")[2] === "home-health-care" && (
          <div className="border rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-[#141718] text-[24px]">
                Select address
              </h2>
              <button
                className="text-[#253E96] text-sm font-medium bg-[#253E961A] rounded-[8px] py-[10px] px-[12px]"
                onClick={() => setOpen2(true)}
              >
                + Add New Address
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {selectAddress.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedPayment(m.id)}
                  className={`p-4 rounded-xl bg-[#F9F9F9]  flex justify-between items-center transition ${selectedPayment === m.id
                    ? "border-l-4 border-primaryColor "
                    : " hover:border-l-4 border-primaryColor"
                    }`}
                >
                  <div className="flex items-center relative  gap-3  h-[80px] w-[359px] rounded-[8px]">
                    {/* <MapPinned className="w-6 h-6 text-gray-700" /> */}
                    <img src={map} alt="map" />
                    <div>
                      <div className="flex justify-between items-center w-full">


                        <p className="font-medium">{m.id}</p>
                        <div className="absolute right-0">
                          <div className="flex gap-2 text-[#647583]">


                            <SquarePen />
                            <Trash2 />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{m.type}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <div className="border border-[#D7D7D7] rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-black text-[24px]">
              Payment methods
            </h2>
            <button
              className="text-[#253E96] text-sm font-medium bg-[#253E961A] rounded-[8px] py-[10px] px-[12px]"
              onClick={() => setOpen(true)}
            >
              + Add a Credit Card
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {paymentMethods.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedPayment(m.id)}

                className={`p-4 relative rounded-xl bg-[#F9F9F9]  flex justify-between  transition ${selectedPayment === m.id
                  ? "border-l-4 border-primaryColor "
                  : " hover:border-l-4 border-primaryColor"
                  }`}

              >
                <div className="flex  relative items-start gap-3  h-[105px] w-[359px] rounded-[8px]">
                  {/* <CreditCard className="w-6 h-6 text-gray-700" /> */}
                  <img src={m.img} alt="payment-methods" />
                  <div className="text-start space-y-2">
                    <p className="font-medium text-[#33384B]">
                      {m.type} **** {m.lastFour}
                    </p>
                    <p className="text-sm text-[#6E7177]">{m.holder}</p>
                    <p className="text-sm text-[#6E7177]">Exp {m.expiry}</p>
                  </div>
                  <div className="absolute right-0">
                    <div className="flex gap-2 text-[#647583]">

                      <SquarePen />
                      <Trash2 />
                    </div>
                  </div>
                </div>

              </button>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="border border-[#D7D7D7] rounded-2xl p-6 mb-20">
          <h2 className="font-bold text-black mb-4 text-2xl ">Order summary</h2>
          <div className="space-y-2 text-[#141718] text-base">
            <div className="flex justify-between pb-2">
              <span>Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between border-t border-b border-[#E8ECEF] py-4">
              <span>Subtotal</span>
              <span className="!font-semibold">99.00 $</span>
            </div>
            <div className="flex justify-between font-semibold pt-2">
              <span className="font-semibold text-lg">Total</span>
              <span>234.00 $</span>
            </div>
          </div>
        </div>

        {/* Pay Now fixed bottom button */}

        <div className="flex justify-end bottom-6 right-6 w-full max-w-4xl">
          <Button
            onClick={handlePayNow}
            className="bg-[#253E96]  text-white font-medium w-[200px] h-[50px] rounded-xl"
          >
            Pay Now
          </Button>
        </div>
      </div>
      {/* Add Card Modal */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 shadow-2xl z-50">
            {/* Header */}
            <div className="mb-6 flex justify-between">
              <h2 className="text-2xl font-semibold mb-2">Add a Credit Card</h2>
              <p className="text-[14px] text-[#253E96] flex items-center gap-1 ">
                <img src={tick} alt="tick" /> Your payment info is stored
                securely
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* Holder name + Card number in row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#263A43] mb-2">
                    Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mahmoud"
                    className="w-full h-[60px]  rounded-[10px] border border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#263A43] mb-2">
                    Card Number
                  </label>
                  <div className="flex items-center border border-[#B1B1B1] rounded-lg px-4 py-2.5 bg-white focus-within:ring-2 focus-within:ring-primaryColor focus-within:border-transparent">
                    <input
                      type="text"
                      placeholder="5465 1425 7142 6109"
                      className="w-full h-[37px]  rounded-[10px] text-sm focus:outline-none"
                    />
                    <div>
                      <img src={visa} alt="visa-icon" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Expiry + CVV in row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#263A43] mb-2">
                    Expiry date
                  </label>
                  <div className="relative">

                    <input
                      type="text"
                      placeholder="07/25"
                      className="w-full h-[60px] rounded-[10px] border border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                    />

                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#263A43] mb-2">
                    CVV
                  </label>
                  <input
                    type="password"
                    placeholder="122"
                    className="w-full h-[60px]  rounded-[10px] border border-[#B1B1B1] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                  />
                </div>
              </div>

              {/* Info text */}
              <p className="text-xs text-gray-500 leading-relaxed">
                In order to verify your account we may charge your account with
                a small amount that will be refunded.
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

      {/* Thank You Modal */}
      {thankYouOpen && (

        <BookingSucces serviceType={serviceType} setThankYouOpen={setThankYouOpen} />

      )}

      {open2 && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen2(false)}
          />

          {/* Modal */}
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-[800px] h-[500px] bg-white rounded-[20px] shadow-2xl flex flex-col p-8">
              {/* Header */}
              <h2 className="text-xl font-semibold mb-6">Add New Address</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                {/* Map side */}
                <div className="w-full">
                  <div className="w-full h-[150px] bg-gray-200 rounded-xl overflow-hidden">
                    {/* Replace with map embed or image */}
                    <img
                      src="/map-placeholder.png"
                      alt="Map"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 p-4 border rounded-xl">
                    <p className="font-medium">Amman - Jordan</p>
                    <p className="text-sm text-gray-500">
                      Amman - Jordan - Street Name - 12331212
                    </p>
                  </div>
                </div>

                {/* Form side */}
                <div className="space-y-4">
                  {/* Landmark */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Landmark (Optional)"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                    />
                  </div>

                  {/* House/Flat Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House/Flat Number *
                    </label>
                    <input
                      type="text"
                      placeholder="House/Flat Number *"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                    />
                  </div>

                  {/* Address Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House/Flat Number
                    </label>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700">
                        Home
                      </button>
                      <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700">
                        Work
                      </button>
                      <button className="px-4 py-2 rounded-lg border border-primaryColor text-primaryColor bg-blue-50">
                        Other
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Khalda House"
                      className="w-full mt-3 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-6 mt-8">
                <button
                  className="w-[180px] h-[50px] rounded-xl bg-primaryColor text-white font-medium hover:bg-primaryColor"
                  onClick={() => setOpen2(false)}
                >
                  Add
                </button>
                <button
                  className="w-[180px] h-[50px] rounded-xl border border-primaryColor text-primaryColor font-medium hover:bg-blue-50"
                  onClick={() => setOpen2(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
