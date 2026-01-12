import React, { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Payment from "@/components/common/Payment";
import SelectPlanPackages from "../MobilePayment/SelectPlanPackages";
import SelectPlanSubscription from "../MobilePayment/SelectPlanSubscription";
import SelectAddress from "./mobilePayments/SelectAddress";
import { useNavigate } from "react-router-dom";
import SelectPlan from "./mobilePayments/SelectPlan";
import MySubscription from "../user/MySubscription";

type Props = {};

const PaymentParent = ({ serviceType }) => {
  const navigate = useNavigate();
  console.log("parent is working");
  const mobile = useIsMobile();

  if (!mobile) {
    return <Payment serviceType={serviceType} />;
  } else if (serviceType === "call" || serviceType === "chat") {
    return <SelectPlan />;
  } else if (serviceType === "video-call") {
    return <MySubscription onContinue={true} />;
  }
  return (
    <div>
      <SelectAddress />
    </div>
  );
};

export default PaymentParent;
