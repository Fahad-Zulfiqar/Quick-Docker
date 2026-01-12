import React from "react";
import HomeHealthCare from "./HomeCare/HomeHealthCare";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div>
      <HomeHealthCare serviceType="chat" />
    </div>
  );
};

export default Chat;
