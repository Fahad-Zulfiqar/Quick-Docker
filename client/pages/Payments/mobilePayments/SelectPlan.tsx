import { ChevronDown, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tick from "@/assets/icons/aboutus-icon/tick.svg";
import { useAppSelector } from "@/store/hooks";

type Props = {};

// Optimized check icon component
const CheckIcon = ({ selected }: { selected: boolean }) => (
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
      strokeWidth="2"
    />
    <path
      d="M11.2871 16.915L10.4459 17.4558C10.6349 17.7498 10.9638 17.9238 11.3132 17.9147C11.6626 17.9056 11.9819 17.7147 12.1554 17.4112L11.2871 16.915ZM10.1283 13.2632C9.82964 12.7986 9.21092 12.6641 8.74635 12.9627C8.28178 13.2614 8.14728 13.8801 8.44593 14.3447L10.1283 13.2632ZM16.1554 10.4112C16.4294 9.93166 16.2628 9.32081 15.7832 9.0468C15.3037 8.77279 14.6929 8.93938 14.4189 9.4189L16.1554 10.4112ZM12.1283 16.3743L10.1283 13.2632L8.44593 14.3447L10.4459 17.4558L12.1283 16.3743ZM14.4189 9.4189L10.4189 16.4189L12.1554 17.4112L16.1554 10.4112L14.4189 9.4189Z"
      fill={selected ? "#253E96" : "#fff"}
    />
  </svg>
);

// Plan data with unified structure
const packagePlans = [
  { id: "01", type: "package", title: "15 Min", price: "100.00 $" },
  { id: "02", type: "package", title: "30 Min", price: "150.00 $" },
  { id: "03", type: "package", title: "1 Hours", price: "250.00 $" },
];

const subscriptionPlans = [
  {
    id: "05",
    type: "subscription",
    title: "Monthly",
    price: "20.00 $",
    billingText: "Billed Monthly",
  },
  {
    id: "04",
    type: "subscription",
    title: "Yearly",
    price: "200.00 $",
    discount: "40.00 $",
    trial: "15 Min",
  },
];
const subscriptionDetails = [
  "Over 1 Hours use per day",
  "Communicate with 300+ doctors",
  "10+ hours of video communication",
  "You can distribute the hours",
];
const SelectPlan = (props: Props) => {
  const [openSection, setOpenSection] = useState<
    "package" | "subscription" | null
  >(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>("one-time");
  const navigate = useNavigate();
  const serviceType = useAppSelector((state) => state.dr.serviceType);

  // Handle section toggle - only one section can be open at a time
  const toggleSection = (section: "package" | "subscription") => {
    setOpenSection(openSection === section ? null : section);
  };

  // Handle plan selection - only one plan can be selected at a time
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  // Check if a plan is selected
  const isPlanSelected = (planId: string) => selectedPlan === planId;

  return (
    <div>
      {/* Header */}
      <div
        onClick={() => navigate(-1)}
        className="flex justify-start items-center p-4 bg-white"
      >
        <button className="bg-[#EBEBEB99] w-[45px] h-[45px] place-content-center rounded-[15px]">
          <ChevronLeft className="mx-auto text-primaryColor" />
        </button>
        <button className="px-4 py-2 text-base font-bold text-primaryColor">
          Select Plan
        </button>
      </div>
      <div className="bg-[#F2F2F2] min-h-[calc(100vh-80px)] flex flex-col justify-between">
        <div className="p-6">
          {/* One Time Visit Option */}
          {serviceType === "home-health-care" && (
            <div
              onClick={() => handlePlanSelect("one-time")}
              className="bg-white rounded-xl p-3 flex justify-between items-center cursor-pointer transition-all duration-200 hover:shadow-md"
            >
              <div>
                <h4
                  className={`${isPlanSelected("one-time") ? "text-primaryColor" : "text-[#7F7F7F]"} font-semibold text-[15px] transition-colors duration-200`}
                >
                  One time Visit
                </h4>
                <p
                  className={`${isPlanSelected("one-time") ? "text-primaryColor" : "text-[#7F7F7F]"} text-xs ml-0.5 transition-colors duration-200`}
                >
                  only 30.00 $
                </p>
              </div>
              <CheckIcon selected={isPlanSelected("one-time")} />
            </div>
          )}

          {/* Packages Section */}
          <div>
            <div
              onClick={() => toggleSection("package")}
              className="bg-primaryColor text-white rounded-xl my-4 p-3 flex justify-between items-start cursor-pointer transition-all duration-200 hover:shadow-lg"
            >
              <div>
                <h4 className="text-xl font-semibold">Packages</h4>
                <p className="text-sm">
                  You can choose the plan that suits you
                </p>
              </div>
              <div
                className={`text-white bg-white/10 p-1 rounded-sm transition-transform duration-300 ${openSection === "package" ? "rotate-180" : ""}`}
              >
                <ChevronDown size={15} />
              </div>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openSection === "package"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {packagePlans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan.id)}
                  className="bg-white mb-4 rounded-xl p-3 flex justify-between items-center cursor-pointer transition-all duration-200 hover:shadow-md"
                >
                  <div>
                    <h4
                      className={`${isPlanSelected(plan.id) ? "text-primaryColor" : "text-[#7F7F7F]"} font-semibold text-[15px] transition-colors duration-200`}
                    >
                      {plan.title}
                    </h4>
                    <p
                      className={`${isPlanSelected(plan.id) ? "text-primaryColor" : "text-[#7F7F7F]"} text-xs ml-0.5 transition-colors duration-200`}
                    >
                      only {plan.price}
                    </p>
                  </div>
                  <CheckIcon selected={isPlanSelected(plan.id)} />
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Section */}
          <div>
            <div
              onClick={() => toggleSection("subscription")}
              className="bg-primaryColor text-white rounded-xl my-4 p-3 flex justify-between items-start cursor-pointer transition-all duration-200 hover:shadow-lg"
            >
              <div>
                <h4 className="text-xl font-semibold">Subscription</h4>
                <p className="text-sm">
                  You can choose the plan that suits you
                </p>
              </div>
              <div
                className={`text-white bg-white/10 p-1 rounded-sm transition-transform duration-300 ${openSection === "subscription" ? "rotate-180" : ""}`}
              >
                <ChevronDown size={15} />
              </div>
            </div>

            <div
              className={`transition-all mt-4 duration-300 ease-in-out ${
                openSection === "subscription"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {subscriptionDetails.map((details) => (
                <div
                  className="
            flex gap-2 items-center mb-2"
                >
                  <img src={tick} />
                  <p className="text-base">{details}</p>
                </div>
              ))}

              <div className="flex justify-between mt-4 gap-4">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`bg-white relative w-full mb-4 rounded-xl p-3 flex flex-col gap-3 justify-between cursor-pointer transition-all duration-200 hover:shadow-md ${
                      isPlanSelected(plan.id)
                        ? "border border-primaryColor"
                        : ""
                    }`}
                  >
                    <div>
                      <h4
                        className={`${isPlanSelected(plan.id) ? "text-primaryColor" : "text-black"} font-medium text-base transition-colors duration-200`}
                      >
                        {plan.title}
                      </h4>
                      <p
                        className={`${isPlanSelected(plan.id) ? "text-primaryColor" : "text-black"} text-2xl font-medium ml-0.5 transition-colors duration-200`}
                      >
                        {plan.price}
                      </p>
                    </div>

                    {plan.discount ? (
                      <div className="bg-[#6666661A] rounded-full px-2 w-fit text-[#7E7E7E]">
                        Save {plan.discount}
                      </div>
                    ) : (
                      <div className="h-3"></div>
                    )}

                    {plan.billingText && (
                      <p className="text-primaryColor font-medium">
                        {plan.billingText}
                      </p>
                    )}

                    {plan.trial && (
                      <p className="text-[#7E7E7E]">Free {plan.trial} Trial</p>
                    )}

                    <div className="absolute -right-2 -top-2">
                      <CheckIcon selected={isPlanSelected(plan.id)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 mx-4">
          <button
            onClick={() => navigate("/payment")}
            className="bg-primaryColor w-full rounded-[15px] px-3 py-3 text-white text-lg font-medium"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
