import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SelectDateAndTime from "../Patient/HomeCare/SelectDatenTime";
type Props = {};

const SelectDatenTimeParent = ({ serviceType }) => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return <SelectDateAndTime serviceType={serviceType} />;
  } else return <>loremIpsum</>;
};

export default SelectDatenTimeParent;
