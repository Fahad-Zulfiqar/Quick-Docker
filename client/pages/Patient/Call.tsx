import React from "react";
import HomeHealthCare from "./HomeCare/HomeHealthCare";

type Props = {};

const Call = (props: Props) => {
  return (
    <div>
      <HomeHealthCare serviceType="call" />
    </div>
  );
};

export default Call;
