import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";

const AddFamilyMemberVerify = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sub header */}
      <div className="bg-primaryColor py-10 text-white relative">
        <div className="max-w-7xl mx-auto relative">
          <div
            className="inline-flex cursor-pointer w-fit hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>
          <p className="text-center text-lg sm:text-3xl md:text-5xl">
            My Family Member
          </p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default AddFamilyMemberVerify;
