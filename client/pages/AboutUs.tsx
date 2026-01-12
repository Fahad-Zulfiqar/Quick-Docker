import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import vector from "@/assets/images/Texture.svg";
import QuickDoctorLogo from "@/assets/Logo.png";
import whatsapp from "@/assets/icons/aboutus-icon/wa.svg";
import facebook from "@/assets/icons/aboutus-icon/fb.svg";
import instagram from "@/assets/icons/aboutus-icon/insta.svg";
import snapchat from "@/assets/icons/aboutus-icon/sn.svg";
import texture from "@/assets/logo/splashTexture.svg";
import splashLogo from "@/assets/logo/splashLogo.svg";
import splashText from "@/assets/logo/splashText.svg";
import whatsappBlue from '@/assets/icons/aboutus-icon/whatsapp.svg'
import facebookBlue from '@/assets/icons/aboutus-icon/facebook.svg'
import instagramBlue from '@/assets/icons/aboutus-icon/instagram.svg'
import snapChatBlue from '@/assets/icons/aboutus-icon/snapchat.svg'
import { useIsMobile } from "@/hooks/use-mobile";
import { useAppSelector } from "@/store/hooks";
type Props = {};

const AboutUs = (props: Props) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  console.log('about us page')
  
  return (
    <div>
      {/* Sub header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-[1150px]  mx-auto">
          <div
            className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={20} />
            Back
          </div>

          <p className="text-center text-5xl">About Us</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-4 bg-white  lg:hidden p-3"
      >
        <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} />
        </div>
        <p className="font-bold text-base text-primaryColor">About App</p>
      </div>

      {/* Content Section */}
      <div className=" hidden lg:block bg-gray-100">
        <div className="max-w-[1140px] mx-auto   lg:py-16 lg:px-6 flex justify-center">
          <div className="bg-white rounded-2xl shadow-md lg:py-20  lg:px-10 flex flex-col lg:flex-row items-center  lg:items-start gap-10 max-w-7xl mx-auto w-full">
            {/* Left Section */}
            <div className="flex flex-col items-center lg:w-1/3 space-y-6">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={QuickDoctorLogo}
                    alt="Quick Doctor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-primaryColor mt-3">
                  Quick Doctor
                </h2>
                <p className="text-sm text-primaryColor">Medical Services</p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-6  text-primaryColor">
                <img
                  src={isMobile ?whatsapp:whatsappBlue}
                  alt="whatsapp Logo"
                  className="w-8 h-8 md:w-full  md:h-full object-contain"
                />
                <img
                  src={isMobile ?facebook:facebookBlue}
                  alt="facebook Logo"
                  className="w-8 h-8 md:w-full  md:h-full object-contain"
                />
                <img
                  src={isMobile ?instagram:instagramBlue}
                  alt="instagram Logo"
                  className="w-8 h-8 md:w-full  md:h-full object-contain"
                />
                <img
                  src={isMobile ?snapchat:snapChatBlue}
                  alt="snapchat Logo"
                  className="w-8 h-8 md:w-full  md:h-full object-contain"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-2/3 px-3 lg:px-0">
              <h3 className="text-lg font-semibold text-[#010247] mb-3">
                About Us
              </h3>
              <p className="text-[#6E7177] text-sm leading-relaxed mb-4 ">
                Legal text can refer to several types of text written for
                various purposes related to the law, including: Law book, any
                book about law. Legal treatise, a publication containing all the
                law relating to a particular area. In general, texts studied in
                the course of legal research.
              </p>
              <p className="text-[#6E7177] text-sm leading-relaxed">
                Legal text can refer to several types of text written for
                various purposes related to the law, including: Law book, any
                book about law. Legal treatise, a publication containing all the
                law relating to a particular area. In general, texts studied in
                the course of legal research.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="gap-10 py-4 bg-gradient-to-b  from-[#3F56A6] to-[#13276B]  flex flex-col justify-center  items-center text-white relative">
          <img
            src={texture}
            className="absolute right-0 top-0  pointer-events-none"
          />
          <div className="flex flex-col justify-center items-center">
            <img src={splashLogo} />
            <img src={splashText} />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-white">
            <img src={whatsapp} alt="whatsapp Logo" className="" />
            <img src={facebook} alt="facebook Logo" className="" />
            <img src={instagram} alt="instagram Logo" className="" />
            <img src={snapchat} alt="snapchat Logo" className="" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-[#010247] mb-3">
            About Us
          </h3>
          <p className="text-[#6E7177] text-sm leading-relaxed mb-4 ">
            Legal text can refer to several types of text written for various
            purposes related to the law, including: Law book, any book about
            law. Legal treatise, a publication containing all the law relating
            to a particular area. In general, texts studied in the course of
            legal research.
          </p>
          <p className="text-[#6E7177] text-sm leading-relaxed">
            Legal text can refer to several types of text written for various
            purposes related to the law, including: Law book, any book about
            law. Legal treatise, a publication containing all the law relating
            to a particular area. In general, texts studied in the course of
            legal research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
