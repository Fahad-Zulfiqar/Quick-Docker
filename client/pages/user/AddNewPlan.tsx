import { Badge, BadgeCheck, Check, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import { Button } from "@/components/ui/button";
import SubHeader from "@/components/common/SubHeader";

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

const AddNewPlan = () => {
  const [open, setOpen] = useState(false);
  const plans = [
    { name: "1 Visit", price: "100.00$", value: "15min", selected: true },
    { name: "2 Visits", price: "150.00$", value: "30min", selected: false },
    { name: "3 Visits", price: "250.00$", value: "1hour", selected: false },
  ];
  const [selectedPlan, setSelectedPlan] = useState<
    "15min" | "30min" | "1hour" | null
  >("15min");

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const navigate = useNavigate();

  let month = false;
  let year = false;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sub header */}
      <div className="hidden lg:block">
        <SubHeader title="Add New Plan" />
      </div>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-4 bg-white  lg:hidden p-3"
      >
        <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} />
        </div>
        <p className="font-bold text-base text-primaryColor">Add New Plan</p>
      </div>

      {/* content */}
      <div className="max-w-[1160px]  mx-auto sm:p-6 md:p-8">
        <div className="bg-white shadow-md rounded-2xl p-6 sm:p-10 border">
          <h1 className="  mb-4 font-bold text-[24px] text-[#141718]">
            Select Plan
          </h1>

          {/* Select Plan */}
          <div className="border border-[#D7D7D7] rounded-[14px] p-6 mb-6">
            <div className="flex flex-col w-full lg:flex-row  gap-6">
              {/* Packages */}
              <div className="">
                <h1 className="font-semibold text-xl ">Packages</h1>
                <p className="text-[#818181] text-sm mb-2">
                  You can choose the plan that suits you
                </p>
                <div className="space-y-3 ">
                  {plans.map((plan) => {
                    const isSelected = selectedPlan === plan.value;

                    return (
                      <button
                        key={plan.value}
                        onClick={() =>
                          setSelectedPlan(
                            plan.value as "15min" | "30min" | "1hour",
                          )
                        }
                        className={`w-[245px] h-[78px] flex justify-between items-center px-4 py-3 rounded-[12px] transition ${
                          isSelected
                            ? "bg-[#253E96] text-white border-[#253E96]"
                            : "border border-[#E0E0E0] text-[#808080]"
                        }`}
                      >
                        <div>
                          <p className="font-semibold text-[15px]">
                            {plan.name}
                          </p>
                          <p className="text-xs">only {plan.price}</p>
                        </div>
                        <div>{check(isSelected)}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className=" hidden lg:flex items-center space-x-4 ">
                <div className="flex flex-col items-center h-full">
                  <div className="flex-grow border-l border-gray-300"></div>
                  <span className="px-4 text-gray-500 text-sm font-medium border rounded-full p-4 "></span>
                  <div className="flex-grow border-l border-gray-300"></div>
                </div>
              </div>

              {/* Subscription */}
              <div className="">
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
                    month = billingCycle === "monthly";
                    year = billingCycle === "yearly";
                    return (
                      <div key={i} className="flex items-center text-sm">
                        <Check className="text-primaryColor w-5 h-5 mr-2" />
                        <span className="text-sm">{f}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 w-full gap-4">
                  <div
                    onClick={() => setBillingCycle("monthly")}
                    className={`p-4 relative border w-full  border-[#E0E0E0] rounded-2xl text-left transition ${
                      billingCycle === "monthly"
                        ? "bg-primaryColor text-white "
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex gap-8 justify-between">
                      <div>
                        <p className="font-medium text-base">Monthly</p>
                        <p className="text-2xl  font-medium text-nowrap">
                          20.00 $
                        </p>
                      </div>
                      <div className="absolute right-2 top-2">
                        {check(month)}
                      </div>
                    </div>
                    <p className="text-sm text-[#7E7E7E]">Billed Monthly</p>
                  </div>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`p-4 relative border  border-[#E0E0E0] rounded-2xl text-left transition ${
                      billingCycle === "yearly"
                        ? "bg-primaryColor text-white"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex gap-8 justify-between">
                      <div>
                        <p className="font-medium text-base">Yearly</p>
                        <p className="text-2xl  font-medium text-nowrap">
                          200.00 $
                        </p>
                        <p className="text-sm text-[#7E7E7E] bg-[#6666661A] rounded-full my-2 text-center">
                          Save 40.00 $
                        </p>
                        <p className="text-sm text-[#7E7E7E] text-nowrap">
                          Free 15 Min Trial
                        </p>
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

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <Button
              className="w-[223.5px] h-[54px] rounded-xl"
              onClick={() => setOpen(true)}
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPlan;
