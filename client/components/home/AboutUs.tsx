import aboutUs from "@/assets/images/about-us-medical.svg";
import medicalTeam from "@/assets/images/medical-team.png";
import availableDC from "@/assets/images/available-doctors-card.png";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import dummyDr from "@/assets/images/dummy-dr.jpg";
import { Button } from "../ui/button";

import heroimage from "@/assets/images/hero-image.jpeg";
import { Link } from "react-router-dom";

const availableDr = [
  {
    name: "Dr. Sarah Mohammad",
    profile: dummyDr,
    specialization: "General Practitioner",
  },
  {
    name: "Dr. Ali Mohammad",
    profile: dummyDr,
    specialization: "Pediatrist",
  },
];

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div>
      {/* About Us */}
      <section className="pb-16 ">
        <div className="max-w-[1160px] px-[147px] mx-auto  lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[44px] font-bold text-primaryColor mb-6">
                About US
              </h2>
              <div className="space-y-4 text-[#8E8E8E] text-xl max-w-md">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full">
                <img
                  src={heroimage}
                  alt="Medical Professionals"
                  className="w-full max-h-[510px] h-auto rounded-tl-[50px] rounded-br-[50px] "
                />

                {/* Available Doctors Card - Positioned as overlay */}
                <div className="absolute lg:-bottom-28 bg-white -bottom-40 rounded-[30px] z-50 shadow-xl p-6  lg:-left-28 w-72">
                  {/* <img
                    src={availableDC}
                    alt="Available Doctors"
                    className="w-full h-auto drop-shadow-lg"
                  /> */}
                  <div className="flex justify-between bg-white">
                    <p className="text-[#1D2B4F] font-bold text-[15px]">
                      Available Doctors
                    </p>
                    {/* <MoreHorizontal color='#C4C4C4 'className='cursor-pointer' /> */}
                  </div>
                  <p className="text-[#1D2B4F] mb-4 font-medium text-xs">
                    Select Doctors
                  </p>
                  <div className="">
                    {availableDr.map((dr, index) => (
                      <div
                        className="flex gap-2 mb-2 hover:bg-primaryColor/10 p-2 rounded-sm"
                        key={index}
                      >
                        <img
                          src={dr.profile}
                          className="rounded-full w-10 h-10"
                        />
                        <div>
                          <p className="text-[#1D2B4F] font-bold text-[13px]">
                            {dr.name}
                          </p>
                          <p className="text-[#636E88] font-medium text-[11px]">
                            {dr.specialization}
                          </p>
                        </div>
                      </div>
                    ))}
                    <Link to={"services/home-health-care"}>
                      <Button
                        variant="outline"
                        className="flex w-full rounded-[10px] bg-[#253E96]/10 font-semibold text-xs"
                      >
                        <span>See All Doctors</span>{" "}
                        <span className="bg-primaryColor/20 rounded-full p-1">
                          <ChevronRight />
                        </span>{" "}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
