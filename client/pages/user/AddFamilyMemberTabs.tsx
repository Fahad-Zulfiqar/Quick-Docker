import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import vector from "@/assets/images/Texture.svg";
import AddFamilyMember from "./AddFamilyMember";
import AddFamilyMemberNoProfile from "./AddFamilyMemberNoProfile";

const userSVG = ({ active }: { active: boolean }) => (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40.9223 19.6892V22.0317C40.8029 22.5112 40.8195 23.0455 40.7549 23.5435C39.6052 32.3511 32.4278 39.552 23.6056 40.687C23.1075 40.7506 22.5722 40.736 22.0928 40.8544C21.3158 40.8231 20.5242 40.8974 19.7492 40.8544C2.64976 39.9042 -5.42197 18.8643 6.78887 6.69358C18.9821 -5.45953 39.9741 2.62102 40.9232 19.6892H40.9223ZM34.2038 32.3413C34.3574 32.3814 34.3545 32.2777 34.423 32.2102C35.3134 31.3325 36.3927 29.4567 36.926 28.3089C41.572 18.3212 35.9563 6.44993 25.3297 3.76294C12.8664 0.610176 1.45402 11.2084 3.52162 23.8449C4.03534 26.981 5.4894 29.9293 7.52373 32.3413C7.69105 32.3756 7.62745 32.2719 7.66072 32.1691C7.82511 31.6554 7.95232 31.128 8.149 30.625C9.51989 27.1219 12.5836 24.0935 16.1562 22.8909C16.256 22.7803 15.5211 22.291 15.4115 22.1903C11.5131 18.6079 11.473 12.5343 15.7295 9.22694C22.039 4.3246 30.9317 10.0861 29.1019 17.831C28.6292 19.8311 27.3376 21.5855 25.6888 22.7744C26.2289 23.0944 26.8258 23.2862 27.3806 23.5807C30.7184 25.3557 33.554 28.6386 34.2038 32.3413ZM20.2806 9.7935C16.2824 10.2035 13.7774 14.4316 15.3078 18.1559C17.209 22.7832 23.6799 23.2167 26.1702 18.8829C28.6478 14.5716 25.1937 9.28957 20.2816 9.7935H20.2806ZM32.2399 34.4363C31.2898 26.1914 22.0624 21.6217 14.9125 26.0603C11.9769 27.8823 10.0326 30.9665 9.58741 34.3982C15.4506 39.278 23.8639 39.8671 30.3377 35.7788C30.9972 35.363 31.5951 34.8698 32.2399 34.4353V34.4363Z"
      fill={active ? "#253E96" : "#253E96"}
    />
  </svg>
);

const notUserSVG = ({ active }: { active: boolean }) => (
  <svg
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_765_11505)">
      <path
        fill={active ? "#253E96" : "#253E96"}
        d="M27.4467 1.33824L29.3447 2.13629C43.3237 8.64862 44.9344 28.4122 31.8091 36.9338C17.5771 46.1754 -0.714438 34.7204 1.00766 18.0874L1.31145 16.0498C1.56835 15.2645 1.71584 14.4264 1.98446 13.6469C5.21279 4.25986 15.3491 -1.44564 25.0448 0.666204L27.4467 1.33824ZM24.6843 3.34264C20.9705 2.5192 17.0292 2.92261 13.5986 4.54899L30.4885 34.5807C36.7986 30.4157 39.6059 22.4772 37.4345 15.2352C35.6646 9.33434 30.7376 4.68476 24.6843 3.34264ZM11.2426 5.87451C8.71658 7.56926 6.54124 9.98586 5.24991 12.7629C0.163706 23.7021 7.15076 36.1251 19.1361 37.4545C22.1574 37.7895 25.2792 37.1849 28.0387 35.9629L11.2426 5.87451Z"
      />
      <path
        fill={active ? "#253E96" : "#253E96"}
        d="M40.8299 19.0523V21.3908C40.7107 21.8694 40.7273 22.4027 40.6628 22.8999C39.5151 31.6921 32.3503 38.8804 23.5434 40.0135C23.0462 40.077 22.5119 40.0623 22.0333 40.1805C21.2577 40.1492 20.4675 40.2235 19.6938 40.1805C2.62327 39.232 -5.43436 18.2288 6.75514 6.0794C18.9271 -6.05247 39.8824 2.01395 40.8299 19.0523ZM34.1222 31.6823C34.2755 31.7224 34.2726 31.6188 34.341 31.5514C35.2299 30.6752 36.3073 28.8027 36.8396 27.6569C41.4775 17.6867 35.8716 5.83617 25.2636 3.15388C12.8221 0.00760025 1.42962 10.5873 3.4936 23.2008C4.00642 26.3314 5.45795 29.2745 7.48872 31.6823C7.65575 31.7165 7.59226 31.613 7.62547 31.5104C7.78957 30.9976 7.91656 30.4711 8.11289 29.969C9.48139 26.4721 12.5398 23.4489 16.1061 22.2484C16.2057 22.138 15.4721 21.6496 15.3627 21.549C11.4711 17.9729 11.4311 11.9099 15.6802 8.60833C21.9786 3.71456 30.8557 9.46597 29.0291 17.1973C28.5573 19.1939 27.268 20.9453 25.6221 22.1321C26.1612 22.4516 26.7571 22.643 27.3109 22.937C30.6428 24.7089 33.2753 27.9861 34.1222 31.6823ZM20.2233 9.1739C16.2321 9.58318 13.7315 13.8039 15.2592 17.5216C17.1571 22.1409 23.6167 22.5737 26.1026 18.2474C28.5759 13.9436 25.1278 8.67085 20.2242 9.1739H20.2233ZM32.1617 33.7746C31.2133 25.5441 22.002 20.9825 14.8645 25.4132C11.9341 27.232 9.99323 30.3109 9.54879 33.7365C15.4018 38.6078 23.8003 39.1959 30.2628 35.1148C30.9212 34.6997 31.518 34.2074 32.1617 33.7737V33.7746Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_765_11505">
        <rect
          width="39.9355"
          height="40"
          fill="white"
          transform="translate(0.894531 0.227539)"
        />
      </clipPath>
    </defs>
  </svg>
);

const servicesTab = [
  {
    tabName: "User Has A Profile On The App",
    routePath: "/add-family-member/profile",
    sidebarType: "add-family-member",
    renderIcon: (isActive: boolean) => userSVG({ active: isActive }),
  },
  {
    tabName: "User Not Have A Profile On The App",
    routePath: "/add-family-member/no-profile",
    sidebarType: "add-family-member",
    renderIcon: (isActive: boolean) => notUserSVG({ active: isActive }),
  },
];

const AddFamilyMemberTabs: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(servicesTab[0].routePath);

  // Sync active tab with route (for mobile navigation)
  useEffect(() => {
    const currentTab = servicesTab.find(tab => tab.routePath === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.routePath);
    }
  }, [location.pathname]);

  const handleTabClick = (tab: typeof servicesTab[0]) => {
    setActiveTab(tab.routePath);
    if (isMobile) {
      navigate(tab.routePath);
    }
  };

  return (
    <div className=" bg-white lg:bg-[#F2F2F2] mx-auto">
      {/* Desktop Header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-[1160px] mx-auto">
          <div
            className="inline-flex cursor-pointer hover:underline text-base items-center absolute top-[20%] lg:top-[50%] translate-y-[-50%]"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ChevronLeft size={20} />
            Back
          </div>
          <p className="text-center text-5xl">Add Family Member</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" alt="Background texture" />
        </div>
      </div>

      {/* Mobile Header */}
      {isMobile && (
        <div  
          onClick={() => navigate(-1)}
          className="flex items-center gap-4 bg-white lg:hidden p-4"
        >
          <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
            <ChevronLeft size={20} />
          </div>
          <p className="font-bold text-base text-primaryColor">User type</p>
        </div>
      )}

      {/* Tabs */}
      <div className={`${isMobile ? 'px-4 pt-6' : 'max-w-7xl mx-auto pt-5 flex lg:flex-row lg:flex-wrap lg:gap-x-4 lg:pl-6 px-3'}`}>
        {servicesTab.map((tab, index) => {
          const isActive = activeTab === tab.routePath;
          return (
            <div
              key={index}
              onClick={() => handleTabClick(tab)}
              className={`
                ${isMobile 
                  ? ' p-4 mb-4 bg-[#F0F4FC] rounded-xl cursor-pointer'
                  : `flex  lg:flex-row lg:items-center gap-4 h-auto lg:h-[90px] mx-3 lg:mx-0 p-3 lg:p-0 lg:px-6 py-4 
                     rounded-xl bg-[#F0F4FC] mb-4 lg:mb-0 lg:bg-white cursor-pointer transition hover:border-b-4 hover:border-primaryColor
                     ${isActive ? "border-b-4 border-primaryColor text-primaryColor shadow-sm" : "text-[#7D7D7D]"}`
                }
              `}
              aria-label={`Select ${tab.tabName}`}
            >
              {isMobile ? (
                <>
                  <div className="flex flex-col lg:items-center gap-4">
                    <div className="flex-shrink-0">{tab.renderIcon(false)}</div>
                    <div className="flex relative justify-between items-center">
                    <p className="font-medium text-primaryColor">{tab.tabName}</p>

                  <ArrowRight  size={24} className="text-primaryColor " />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:flex-shrink-0">{tab.renderIcon(isActive)}</div>
                  <p className="font-medium">{tab.tabName}</p>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Form Content (Desktop Only) */}
      {!isMobile && (
        <main className="max-w-7xl mx-auto p-6">
          {activeTab === "/add-family-member/profile" && <AddFamilyMember />}
          {activeTab === "/add-family-member/no-profile" && <AddFamilyMemberNoProfile />}
        </main>
      )}
    </div>
  );
};

export default AddFamilyMemberTabs;