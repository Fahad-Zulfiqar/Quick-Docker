import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";

type Props = {};

const SubHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-primaryColor py-10 text-white relative">
      <div className="max-w-[1160px]  mx-auto">
        <div
          className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} />
          Back
        </div>
        <p className="text-center text-5xl">{title}</p>
        <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
      </div>
    </div>
  );
};

export default SubHeader;
