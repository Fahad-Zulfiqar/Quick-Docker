import React from "react";
import HomeHealthCare from "./HomeCare/HomeHealthCare";

type Props = {};

const VideoCall = (props: Props) => {
  return (
    <div>
      <HomeHealthCare serviceType="video-call" />
    </div>
  );
};

export default VideoCall;
