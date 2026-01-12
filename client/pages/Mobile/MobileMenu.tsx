import React from "react";
import Texture from "@/assets/images/Texture.svg";
import userImage from "../../assets/images/dummy-user.png";
import { UseSelector } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import { ArrowRight, Info, ShieldAlert, UserRoundPlus } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import heart from "@/assets/icons/menu/favorite.svg";
import handstar from "@/assets/icons/menu/subscription.svg";
import settingicon from "@/assets/icons/menu/setting.svg";
import walleticon from "@/assets/icons/menu/payment.svg";

type MenuItem = {
  key: string;
  label: string;
  leftIcon: React.ReactNode;
};

type Props = {
  frameWidth?: number;
  userName?: string;
  quickAdds?: number;
  items?: MenuItem[];
};

const IconChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" aria-hidden {...props}>
    <path
      d="M12.5 16 7.5 10l5-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" aria-hidden {...props}>
    <path
      d="M10 4v12M4 10h12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M3 10h18M7 15h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconGear = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1 1 0 0 1-1.4 1.4l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V19a1 1 0 0 1-2 0v-.1a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1 1 0 1 1-1.4-1.4l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H5a1 1 0 0 1 0-2h.1a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1A1 1 0 1 1 7 5.4l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V5a1 1 0 0 1 2 0v.1a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1 1 0 1 1 1.4 1.4l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H19a1 1 0 0 1 0 2h-.1a1 1 0 0 0-.9.6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconDoc = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <path
      d="M6 3h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14 3v4h4M8 13h8M8 17h8M8 9h4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconInfo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden {...props}>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8h.01M11 12h2v5h-2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" aria-hidden {...props}>
    <path
      d="M7.5 16 12.5 10 7.5 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Avatar as vector “image” to keep sharpness on all DPRs */
const VectorAvatar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden>
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#E8ECFF" />
        <stop offset="1" stopColor="#C9D4FF" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="32" fill="url(#g)" />
    <circle cx="32" cy="24" r="12" fill="#fff" />
    <path d="M12 54c4-10 13-14 20-14s16 4 20 14" fill="#fff" />
  </svg>
);

/* ===================== DEFAULT DATA ===================== */
const DEFAULT_ITEMS: MenuItem[] = [
  {
    key: "payment",
    label: "Payment Methods",
    leftIcon: <IconCard className="w-6 h-6" />,
  },
  {
    key: "setting",
    label: "Setting",
    leftIcon: <IconGear className="w-6 h-6" />,
  },
  { key: "legal", label: "Legal", leftIcon: <IconDoc className="w-6 h-6" /> },
  {
    key: "about",
    label: "About App",
    leftIcon: <IconInfo className="w-6 h-6" />,
  },
];

/* ===================== COMPONENT ===================== */
export default function MobileMenu({
  frameWidth = 375,

  quickAdds = 3,
  items = DEFAULT_ITEMS,
}: Props) {
  const { user } = useAppSelector((state) => state.user);
  const userName = user?.name || "Mahmoud Alnatour";
  const navigate = useNavigate();
  return (
    <div className=" bg-white mx-auto ">
      {/* Gradient header */}
      <div className="relative h-[274px]  bg-gradient-to-b from-[#3F56A6] to-[#13276B]">
        <img
          src={Texture}
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
        />

        {/* Profile row */}
        <div
          className="p-6 flex items-center gap-4"
          onClick={() => navigate("/my-profile")}
        >
          <div className="w-[70px] h-[70px] rounded-full bg-white overflow-hidden">
            <img src={userImage} />
          </div>
          <div>
            <div className="text-white font-bold text-base leading-6">
              {userName}
            </div>
          </div>
        </div>

        {/* Family Care */}
        <div className="mt-4 px-6">
          <p className="text-white font-bold  mb-2">Family Care</p>
          <div className="flex space-x-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center cursor-pointer"
              >
                <NavLink to={"/add-family-member"}>
                  <div className="w-[60px] h-[60px] relative flex items-center justify-center rounded-full border bg-white border-[#EDEDED] text-primaryColor">
                    <UserRoundPlus size={23} />
                  </div>
                  <p className="text-xs text-white mt-1 font-semibold text-center">
                    Add
                  </p>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* List block */}
      {/* <div className="px-6 -mt-10 space-y-3">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            className="w-full h-14 bg-[#F0F4FC] rounded-lg flex items-center px-4"
          >
            <span className="text-[#253E96] mr-4">{item.leftIcon}</span>
            <span className="text-[#253E96] font-medium text-sm leading-8">{item.label}</span>
            <span className="ml-auto text-[#253E96]">
              <IconChevronRight className="w-5 h-5" />
            </span>
          </button>
        ))}
      </div> */}
      <div className="mt-6 mx-3 space-y-3">
        <NavLink
          to={"/my-subscription"}
          className="w-full h-[57px] flex font-medium items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] "
        >
          <span className="flex items-center space-x-2">
            <img src={handstar} alt="" />
            <span>My Subscription</span>
          </span>
          <ArrowRight size={24} />
        </NavLink>
        <NavLink
          to={"/my-favorite"}
          className="w-full h-[57px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] "
        >
          <span className="flex items-center space-x-2">
            <img src={heart} alt="heart" />
            <span>My Favorite</span>
          </span>
          <ArrowRight size={24} />
        </NavLink>
        <NavLink
          to={"/payment-methods"}
          className="w-full h-[57px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] "
        >
          <span className="flex items-center space-x-2">
            <img src={walleticon} />
            <span>Payment Methods</span>
          </span>
          <ArrowRight size={24} />
        </NavLink>
        <NavLink
          to={"/setting"}
          className="w-full h-[57px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] "
        >
          <span className="flex items-center space-x-2">
            <img src={settingicon} alt="setting-icon" />
            <span>Setting</span>
          </span>
          <ArrowRight size={24} />
        </NavLink>
        <NavLink
          to={"/leagal"}
          className="w-full h-[57px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] "
        >
          <span className="flex items-center space-x-2">
            <ShieldAlert />
            <span>Legal</span>
          </span>
          <ArrowRight size={24} />
        </NavLink>
        <NavLink
          to={"/about-us"}
          className="w-full h-[57px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] "
        >
          <span className="flex items-center space-x-2">
            <Info />
            <span>About App</span>
          </span>
          <ArrowRight size={24} />
        </NavLink>
      </div>
    </div>
  );
}
