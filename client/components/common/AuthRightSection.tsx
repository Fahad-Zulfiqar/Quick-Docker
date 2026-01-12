import React, { useState } from "react";
import QuickDoctorLogo from "@/assets/Frame.svg";
import auth2 from "@/assets/images/auth2.svg";
import auth3 from "@/assets/images/auth3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { X } from "lucide-react";
// import "swiper/css/effect-fade"
import { useNavigate } from "react-router-dom";

type Props = {};

const AuthRightSection = (props: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to US to match the image's first item
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const languages = [
    {
      name: "English (US)",
      code: "en",
      flag: "https://flagcdn.com/us.svg",
    },
    {
      name: "English (UK)",
      code: "en-uk",
      flag: "https://flagcdn.com/gb.svg",
    },
    {
      name: "Deutsch (DE)",
      code: "de",
      flag: "https://flagcdn.com/de.svg",
    },
    {
      name: "Français (FR)",
      code: "fr",
      flag: "https://flagcdn.com/fr.svg",
    },
    {
      name: "Italiano (IT)",
      code: "it",
      flag: "https://flagcdn.com/it.svg",
    },
    {
      name: "عربي (AR)",
      code: "ar",
      flag: "https://flagcdn.com/sa.svg",
    },
  ];

  const handleSelect = (code) => {
    setSelectedLanguage(code);
    setIsOpen(false);
  };

  const slides = [
    {
      title: "Welcome to Our App!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      image: QuickDoctorLogo,
    },
    {
      title: "EveryThing you Need",
      text: "Book doctors easily with just a few clicks. Manage your schedule with convenience and reliability.",
      image: auth2,
    },
    {
      title: "All times with you",
      text: "Track your health and get quick updates. Your health is our priority!",
      image: auth3,
    },
  ];

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

  return (
    <div className="hidden lg:flex flex-1 bg-[#F0F2F5] items-center justify-center relative">
      {/* Custom Language Selector - Top Left */}
      <div className="absolute top-6 left-6">
        <div className="relative">
          {/* Trigger Button (shows selected language) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#253E96] flex items-center px-4 py-2 bg-[#fff] border-[#253E96] border-[1px] hover:bg-gray-50 rounded-[10px]  text-base font-medium transition-colors"
          >
            {selectedLang?.flag && (
              <img
                src={selectedLang.flag}
                alt={`${selectedLang.name} flag`}
                className="w-6 h-6 rounded-full mr-2 object-cover"
              />
            )}
            {selectedLang?.name}
          </button>

          {/* Dropdown List (opens below the button) */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-1  bg-[#fff] rounded-lg shadow-lg z-10 w-[250px]">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className="flex items-center px-4 py-3 text-black text-base cursor-pointer hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {lang.flag && (
                    <img
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      className="w-6 h-6 rounded-full mr-2 object-cover"
                    />
                  )}
                  {lang.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Close Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-20 p-2 bg-white rounded-full text-primaryColor hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primaryColor"
      >
        <X />
      </button>

      {/* Illustration Content */}
      <div className="max-w-md text-center">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }} // important: hides old slide smoothly
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            const active = swiper.realIndex;
            document.querySelectorAll(".custom-dot").forEach((dot, i) => {
              dot.classList.remove("bg-primaryColor");
              dot.classList.add("bg-gray-300");
              dot.classList.remove("h-2px");
              if (i === active) {
                dot.classList.remove("bg-gray-300");
                dot.classList.add("bg-primaryColor");
                dot.classList.add("h-2px");
              }
            });
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {/* Image */}
                <div className="flex items-center justify-center mb-6 relative overflow-hidden">
                  <img
                    src={slide.image}
                    alt="Quick Doctor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <h3 className="text-2xl text-start mt-20 font-bold text-black mb-4">
                  {slide.title}
                </h3>
                <p className="text-[#4F4F4F] text-start text-base leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Progress Pagination */}
        <div className="flex justify-start mt-8">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-12 h-1 rounded-full custom-dot ${
                  i === 0 ? "bg-primaryColor" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRightSection;
