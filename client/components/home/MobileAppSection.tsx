import React from "react";
import { Button } from "../ui/button";
import { Apple, Play } from "lucide-react";
import phoneSplash from "@/assets/images/phone-splash-screen.png";
import phoneMain from "@/assets/images/phone-main-screen.png";
import appleIcon from "@/assets/icons/apple.svg";
import googleIcon from "@/assets/icons/google.svg";

type Props = {};

const MobileAppSection = (props: Props) => {
  return (
    <div className="my-20">
      {/* Mobile App Section */}
      <section className="py-16 ">
        <div className="max-w-7xl lg:max-w-[1160px] p-4 relative mx-auto  lg:px-0">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#253E961A] rounded-lg py-10 ">
            <div className=" flex justify-center lg:justify-start">
              {/* Two Phone Mockups */}
              <div className="absolute -top-12 hidden lg:block">
                {/* Left Phone - Splash Screen */}
                <div className="relative z-20">
                  <img
                    src={phoneSplash}
                    alt="Quick Doctor App Splash Screen"
                    className="w-64 h-auto"
                  />
                </div>

                {/* Right Phone - Main Screen */}
                <div className="absolute top-6 -right-40 z-10 ">
                  <img
                    src={phoneMain}
                    alt="Quick Doctor App Main Screen"
                    className="w-64 h-[400px]"
                  />
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left text-[48px] font-bold text-black mb-4">
              <h2 className="">Download the</h2>
              <h2>
                <span className="text-primaryColor">Quick Doctor</span> App
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center items-center lg:justify-start">
                <img src={appleIcon} className="cursor-pointer w-[200px]" />
                <img src={googleIcon} className="cursor-pointer w-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppSection;
