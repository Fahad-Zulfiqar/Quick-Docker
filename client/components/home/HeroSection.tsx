"use client";
import React, { useEffect, useState } from "react";
import { CardContent } from "../ui/card";
import SOS from "@/assets/images/sos-home-health-care.svg";
import CallAmbulance from "@/assets/images/call-ambulance.svg";
import medicalTeam from "@/assets/images/medical-team.png";
import heroVector from "@/assets/images/heroVector.svg";
import texture from "@/assets/images/Texture.svg";
import heroimage from "@/assets/images/hero-image.jpeg";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import alert from "@/assets/images/alert.gif";
import ImageSlideshow from "../images/image-slideshow";
type Props = {};

const HeroSection = (props: Props) => {
  const navigate = useNavigate();
  const [open2, setOpen2] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);

  // Continuous animation: swap every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev); // Toggle between true/false
    }, 3000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="pb-14 relative">
      <img className="absolute top-0 right-0 h-auto w-auto" src={texture} />
      {/* Hero Section */}
      <section className="bg-primaryColor text-white    overflow-hidden">
        <div className="max-w-[1160px] h-[586px] mx-auto px-[147px] lg:px-0 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[76px]  items-center">
            <div className="space-y-8 w-[530px] mr-[76px]">
              <h1 className="text-5xl font-bold text-white leading-tight">
                Our team of specialists
                <br />
                are here to help you
              </h1>

              <p className="text-white text-xl leading-relaxed max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>

              {/* Service Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-4">
                <CardContent className="p-0 w-[270px]">
                  <img
                    onClick={() => navigate("/sos")}
                    src={SOS}
                    className="w-full cursor-pointer"
                  />
                </CardContent>

                <CardContent className="p-0 w-[270px]">
                  <img
                    src={CallAmbulance}
                    alt="Call an Ambulance"
                    className="w-full h-auto"
                    onClick={() => setOpen2(true)}
                  />
                </CardContent>
              </div>
              <Dialog.Root open={open2} onOpenChange={setOpen2}>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-black/10 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vh] max-w-xs rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg focus:outline-none z-[99]">
                    <div className="flex flex-col items-center text-center">
                      <img src={alert} alt="" className="w-36 h-36" />
                      <Dialog.Title className="text-2xl font-bold text-[#333333]">
                        Are you sure?
                      </Dialog.Title>
                      <Dialog.Description className="mt-2 text-lg text-[#677294]">
                        are you sure you choose this service modal for sos
                        buttons?
                      </Dialog.Description>
                      <div className="mt-4 flex flex-col w-full gap-4">
                        <Dialog.Close asChild>
                          <button
                            onClick={() => setOpen2(false)}
                            className="bg-[#E5E5E5] text-[#ED5E5E] px-4 py-2 rounded-lg text-semibold hover:bg-[#ED5E5E] hover:text-white"
                          >
                            Yes I'm Sure
                          </button>
                        </Dialog.Close>
                        <Dialog.Close asChild>
                          <button
                            onClick={() => setOpen2(false)}
                            className="bg-primaryColor text-white px-4 py-2 rounded-lg text-semibold hover:bg-primaryColor/90"
                          >
                            Cancel
                          </button>
                        </Dialog.Close>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[32rem]  overflow-hidden">
                <ImageSlideshow />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={heroVector} />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
