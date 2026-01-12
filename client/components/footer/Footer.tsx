import React, { useState } from "react";
import FooterLogo from "@/assets/footerLogo.svg";
import twitter from "@/assets/images/twitter.svg";
import facebook from "@/assets/images/facebook.svg";
import google from "@/assets/images/google.svg";
import texture from "@/assets/images/Texture.svg";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const navigate = useNavigate();

  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default to US to match the image's first item
  const [isOpen, setIsOpen] = useState(false);

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

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);
  return (
    <div>
      {/* Footer */}
      <footer className="relative bg-primaryColor text-white py-12">
        <img className="absolute top-0 right-0 h-full" src={texture} />
        <div className="max-w-[1160px] px-[147px] relative mx-auto  sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center border-b border-white/30 pb-10">
            <div>
              <Link to={"/"}>
                <img src={FooterLogo} />
              </Link>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <h4
                onClick={() => navigate("/leagal")}
                className="text-base text-white cursor-pointer"
              >
                Leagal
              </h4>
              <img src={twitter} className="!w-6 !h-6" />
              <img src={facebook} className="!w-6 !h-6" />
              <img src={google} className="!w-6 !h-6" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between pt-10">
            <div className=" flex gap-8 text-base text-white">
              <Link to={"/"}>Home</Link>
              <Link to={"/history"}>History</Link>
              <Link to={"/calendar"}>Calendar</Link>
              <Link to={"/about-us"}>About Us</Link>
            </div>

            <div className="text-center lg:text-right  flex flex-col items-center lg:items-start lg:flex-row gap-4">
              <div className="relative">
                {/* Trigger Button (shows selected language) */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center px-4 py-2  border-white/30 bg-white hover:bg-gray-50 rounded-lg text-primaryColor text-base font-medium transition-colors"
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
                  <div className="absolute bottom-full left-0 mb-1 bg-[#fff] rounded-lg shadow-lg z-10 w-[250px]">
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
              <p className="text-base text-white">
                © {currentYear} Quick Doctor. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
