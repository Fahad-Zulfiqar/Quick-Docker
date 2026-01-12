import React from "react";
import healthcare from "@/assets/images/home-health-care.svg";
import clinicVisit from "@/assets/icons/services-icons/clinic-visit-active.svg";
import videoIcon from "@/assets/icons/services-icons/video-call-active.svg";
import callIcon from "@/assets/icons/services-icons/call-active.svg";
import chatIcon from "@/assets/icons/services-icons/chat-active.svg";
import patientCheck from "@/assets/images/patientCheck.svg";
import { useNavigate } from "react-router-dom";
import MobileService from "../common/MobileService";
import { useIsMobile } from "@/hooks/use-mobile";

type Props = {};

const OurServices = ({ showHeading = true }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return (
    <div>
      {/* Our Services */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl lg:max-w-[1160px]  p-4 mx-auto  lg:px-0">
          <h2
            className={`text-4xl font-bold text-primaryColor mb-12 ${showHeading ? "block" : "hidden"}`}
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-3 lg:px-0">
            <div>
              {/* Left Large Card - Home Health Care */}
              <div
                // onClick={() => navigate("/services/home-health-care")}
                onClick={() => {
                  isMobile
                    ? navigate("/service", {
                        state: {
                          slug: "Home Health care",
                          heading: "Select Doctor's specialty",
                        },
                      })
                    : navigate("/services/home-health-care");
                }}
                className="bg-[#F0F4FC] rounded-lg p-6 cursor-pointer md:row-span-2 flex justify-between"
              >
                <div className="text-black leading-relaxed lg:font-semibold text-sm md:text-2xl my-auto">
                  <img
                    src={healthcare}
                    alt="Home Health Care"
                    className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] mb-2  max-w-xs"
                  />
                  <div className="hidden text-2xl md:block">
                    <p className="-mb-2">Home</p>
                    <p className=""> Health Care</p>
                  </div>
                  <div className="block md:hidden">
                    <p className="text-nowrap !text-sm ">Home Health Care</p>
                  </div>
                </div>
                <div>
                  <img src={patientCheck} className="w-[124px] md:w-auto" />
                </div>
              </div>
            </div>
            <div className="flex gap-5  ">
              {/* Right Small Cards */}
              <div className="grid grid:colspan-1 gap-5 w-full">
                <div
                  // onClick={() => navigate("/services/clinic-visit")}
                  onClick={() => {
                    isMobile
                      ? navigate("/service", {
                          state: {
                            slug: "Clinic Visit",
                            heading: "Select Clinic specialty",
                          },
                        })
                      : navigate("/services/clinic-visit");
                  }}
                  className="bg-[#F0F4FC] cursor-pointer rounded-lg p-6 flex flex-col md:flex-row items-center gap-4"
                >
                  <img
                    src={clinicVisit}
                    alt="Clinic Visit"
                    className="w-[30px] h-[30px] md:w-8 md:h-8"
                  />
                  <h3 className="md:font-medium font-normal text-black text-sm  md:text-xl">
                    Clinic Visit
                  </h3>
                </div>

                <div
                  // onClick={() => navigate("/services/video-call")}
                  onClick={() => {
                    isMobile
                      ? navigate(`/service`, {
                          state: {
                            slug: "Video Call",
                            heading: "Select Doctor's specialty",
                          },
                        })
                      : navigate("/services/video-call");
                  }}
                  className="bg-[#F0F4FC] flex-col md:flex-row  cursor-pointer rounded-lg p-6 flex items-center gap-4"
                >
                  <img
                    src={videoIcon}
                    alt="Video Call"
                    className="w-[30px] h-[30px] md:w-8 md:h-8"
                  />
                  <h3 className="md:font-medium font-normal text-black text-sm  md:text-xl">
                    Video Call
                  </h3>
                </div>
              </div>

              <div className="grid grid:colspan-1 gap-5 w-full">
                <div
                  // onClick={() => navigate("/services/call")}
                  onClick={() => {
                    isMobile
                      ? navigate("/service", {
                          state: {
                            slug: "Call",
                            heading: "Select Doctor's specialty",
                          },
                        })
                      : navigate("/services/call");
                  }}
                  className="bg-[#F0F4FC] flex-col md:flex-row  cursor-pointer rounded-lg p-6 flex items-center gap-4"
                >
                  <img
                    src={callIcon}
                    alt="Call"
                    className="w-[30px] h-[30px] md:w-8 md:h-8"
                  />
                  <h3 className="md:font-medium font-normal text-black text-sm  md:text-xl">
                    Call
                  </h3>
                </div>

                <div
                  // onClick={() => navigate("/services/chat")}
                  onClick={() => {
                    isMobile
                      ? navigate("/service", {
                          state: {
                            slug: "Chat",
                            heading: "Select Doctor's specialty",
                          },
                        })
                      : navigate("/services/chat");
                  }}
                  className="bg-[#F0F4FC] flex-col md:flex-row  cursor-pointer rounded-lg p-6 flex items-center gap-4"
                >
                  <img
                    src={chatIcon}
                    alt="Chat"
                    className="w-[30px] h-[30px] md:w-8 md:h-8"
                  />
                  <h3 className="md:font-medium font-normal text-black text-sm  md:text-xl">
                    Chat
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
