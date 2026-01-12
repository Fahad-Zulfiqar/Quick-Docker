import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  ChevronDown,
  Menu,
  Search,
  UserRoundPlus,
  X,
} from "lucide-react";
import { Drawer } from "@vladyoslav/drawer";
import Logo from "@/assets/quickDoctorLogo.svg";
import SOS from "@/assets/sos-icon.gif";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearUser } from "@/store/slices/userSlice";
import userImage from "../../assets/images/dummy-user.png";
import CallAmbulance from "@/assets/images/call-ambulance.svg";
import { CardContent } from "../ui/card";
import SOSHealth from "@/assets/images/sos-home-health-care.svg";
import * as Dialog from "@radix-ui/react-dialog";
import alert from "@/assets/images/alert.gif";

// import ambulance from "@/assets/sos/Call-an-amb.jpg";
import soshealth from "@/assets/sos/sos-health-care.jpg";

import manplus from "@/assets/icons/menu/man-plus.png";
import heart from "@/assets/icons/menu/favorite.svg";
import handstar from "@/assets/icons/menu/subscription.svg";
import settingicon from "@/assets/icons/menu/setting.svg";
import walleticon from "@/assets/icons/menu/payment.svg";
import arrowicon from "@/assets/icons/menu/arrow-left.png";
import angleright from "@/assets/icons/menu/angle-right.png";
import { translate } from "react-range/lib/utils";
import home from "@/assets/sos/home.svg";
import visit from "@/assets/sos/visit.svg";
import redamb from "@/assets/sos/redambulance.svg";
import ambulance from "@/assets/sos/ambulance.svg";

const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  // New: header-attached toggles for SOS + Notifications
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [showAmbulanceConfirm, setShowAmbulanceConfirm] = useState(false);

  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Refs for outside click handling
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const sosRef = useRef<HTMLDivElement | null>(null);
  const notifRef = useRef<HTMLDivElement | null>(null);

  // Sample notification data
  const notifications = [
    {
      id: 1,
      title: "Notifications ..",
      timestamp: "12:34 - 20/10/2024",
      isRead: false,
    },
    {
      id: 2,
      title: "Notifications ..",
      timestamp: "12:34 - 20/10/2024",
      isRead: false,
    },
    {
      id: 3,
      title: "Notifications ..",
      timestamp: "12:34 - 20/10/2024",
      isRead: true,
    },
    {
      id: 4,
      title: "Notifications ..",
      timestamp: "12:34 - 20/10/2024",
      isRead: true,
    },
  ];
  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideUser = dropdownRef.current?.contains(target);
      const clickedInsideSos = sosRef.current?.contains(target);
      const clickedInsideNotif = notifRef.current?.contains(target);

      if (!clickedInsideUser) setUserDropdown(false);
      if (!clickedInsideSos) {
        setIsSosOpen(false);
        setShowAmbulanceConfirm(false);
      }
      if (!clickedInsideNotif) setIsNotifOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(clearUser(null));
  };

  // Only render CommonButtons when user is logged in
  const CommonButtons = user ? (
    <>
      {/* SOS Icon + Attached Panel */}

      {/* Search icon */}
      <div className="bg-[#253E961A] border border-primaryColor/10 rounded-lg p-2">
        <Search className="text-primaryColor" />
      </div>

      {/* Notification Bell + Attached Panel */}
      <div className="relative" ref={notifRef}>
        <div
          className="bg-[#253E961A] border border-primaryColor/10 rounded-lg p-2 cursor-pointer relative"
          onClick={() => {
            setIsNotifOpen((v) => !v);
            setIsSosOpen(false);
            setShowAmbulanceConfirm(false);
          }}
          aria-label="Open notifications"
        >
          <Bell className="text-primaryColor " />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </div>

        {isNotifOpen && (
          <div
            className="absolute left-1/2 -translate-x-1/2 mt-2 w-[400px] max-h-[500px] rounded-[16px] bg-white shadow-xl border border-gray-100 z-[99] overflow-hidden"
            role="dialog"
            aria-label="Notifications"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Notifications
                </h4>
                <p className="text-sm text-gray-500">
                  {unreadCount} new notifications
                </p>
              </div>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                onClick={() => setIsNotifOpen(false)}
                aria-label="Close notifications"
              >
                <X size={20} />
              </button>
            </div>

            {/* List */}
            <div className="max-h-[400px] overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start p-4 hover:bg-gray-50 border-b border-gray-50 last:border-b-0 cursor-pointer"
                  >
                    {!notification.isRead ? (
                      <div className="w-2 h-2 bg-primaryColor rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    ) : (
                      <div className="w-2 h-2 mr-3 mt-2 flex-shrink-0"></div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {notification.timestamp}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No notifications</p>
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-4 border-t border-gray-100">
                <button className="w-full text-center text-sm text-primaryColor hover:text-primaryColor font-medium">
                  View All Notifications
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  ) : null;

  const LogoDiv = (
    <>
      <img
        src={Logo}
        onClick={() => navigate("/")}
        className="w-[188px] cursor-pointer"
        alt="Quick Doctor Logo"
      />
    </>
  );

  return (
    <header className="!bg-white shadow-sm h-[96px] px-[110px]">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="mr-6">{LogoDiv}</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primaryColor"
                : "text-[#0A0A0A] font-normal hover:text-primaryColor"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primaryColor"
                : "text-[#0A0A0A] font-normal hover:text-primaryColor"
            }
          >
            History
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primaryColor"
                : "text-[#0A0A0A] font-normal hover:text-primaryColor"
            }
          >
            Calendar
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-primaryColor"
                : "text-[#0A0A0A] font-normal hover:text-primaryColor"
            }
          >
            AboutUs
          </NavLink>
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center space-x-3">
          {/* sos icon ..*/}
          <div className="relative" ref={sosRef}>
            <img
              onClick={() => {
                setIsSosOpen((v) => !v);
                setIsNotifOpen(false);
              }}
              src={SOS}
              alt="SOS"
              className="w-16 cursor-pointer"
            />

            {isSosOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-[335px] rounded-[16px] bg-white  shadow-xl border border-gray-100 z-[99]"
                role="dialog"
                aria-label="SOS options"
              >
                <div className="flex items-center justify-between mb-4 p-4 border-b ">
                  <h3 className="text-sm font-semibold text-sos-text">SOS</h3>
                  <button
                    className="text-gray-800 hover:text-gray-600 transition-colors  border-2 border-gray-400 rounded-full p-1"
                    onClick={() => {
                      setIsSosOpen(false);
                      setShowAmbulanceConfirm(false);
                    }}
                    aria-label="Close SOS panel"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="flex flex-col ">
                  <CardContent
                    onClick={() => navigate("/sos")}
                    className="p-4 w-full border-b pb-4 cursor-pointer"
                  >
                    {/* <img
                      onClick={() => navigate("/sos")}
                      src={sosVisit}
                      className="w-full h-full cursor-pointer"
                      alt="SOS Home Health Care"
                    /> */}
                    <div className="flex items-center justify-between">
                      <div>
                        <img src={home} className="" />
                      </div>
                      <img src={visit} />
                    </div>
                    <p>SOS Home Health Care</p>
                  </CardContent>

                  <CardContent
                    className="p-4 mb-4 w-full cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    {/* <img
                      src={ambulance}
                      alt="Call an Ambulance"
                      className="w-full h-full cursor-pointer"
                      onClick={() => setOpen(true)}
                    /> */}
                    <div className="flex items-center justify-between">
                      <div>
                        <img src={redamb} className="" />
                      </div>
                      <img src={ambulance} />
                    </div>
                    <p>Call an Ambulance</p>
                  </CardContent>
                </div>
              </div>
            )}
          </div>

          {user ? (
            <div
              className="flex relative items-center space-x-3"
              ref={dropdownRef}
            >
              {CommonButtons}

              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setUserDropdown(!userDropdown);
                  // setIsSosOpen(false);
                  // setIsNotifOpen(false);
                  // setShowAmbulanceConfirm(false);
                }}
              >
                <img
                  src={userImage}
                  className="w-12 h-12 border rounded-full"
                  alt="User Profile"
                />
                <p className="text-black font-bold text-lg max-w-40 leading-tight overflow-hidden">
                  {user?.name || "User"}
                </p>
                <ChevronDown
                  className={`text-[#8C8B8B] transition-all ${userDropdown && "rotate-180"}`}
                />
              </div>

              {userDropdown && (
                <div
                  className="absolute -right-10 top-20 z-50 bg-white rounded-2xl shadow-xl p-4"
                  style={{
                    width: "291px",
                    height: "455px",
                    border: "1px solid #EDEDED",
                  }}
                >
                  {/* Profile Header */}
                  <div className="flex items-center justify-between border-none   cursor-pointer hover:bg-gray-50">
                    <NavLink
                      onClick={() => setUserDropdown(false)}
                      to={"/my-profile"}
                      className="flex items-center space-x-3"
                    >
                      <img
                        src={userImage}
                        alt="avatar"
                        className="w-14 h-14 rounded-full p-1  border border-[#253E96]"
                      />
                      <div>
                        <p className="font-bold  text-black text-base ">
                          {user?.name || "Mahmoud Alnatour"}
                        </p>
                        <p className="text-base font-semibold text-[#253E96]">
                          My Profile
                        </p>
                      </div>
                    </NavLink>
                    <img src={angleright} alt="angle-right" />
                  </div>

                  {/* Family Care */}
                  <div className="mt-4">
                    <p className="text-black font-bold  mb-2">Family Care</p>
                    <div className="flex space-x-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center cursor-pointer"
                        >
                          <NavLink
                            onClick={() => setUserDropdown(false)}
                            to={"/add-family-member"}
                          >
                            <div className="w-[60px] h-[60px] relative flex items-center justify-center rounded-full border border-[#EDEDED] text-primaryColor">
                              <UserRoundPlus size={23} />
                            </div>
                            <p className="text-xs text-[#253E96] mt-1 font-semibold text-center">
                              Add
                            </p>
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Menu Options */}
                  <div className="mt-6 space-y-3">
                    <NavLink
                      onClick={() => setUserDropdown(false)}
                      to={"my-subscription"}
                      className="w-full h-[44px] flex font-medium items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] hover:bg-primaryColor/20"
                    >
                      <span className="flex items-center space-x-2">
                        <img src={handstar} alt="" />
                        <span>My Subscription</span>
                      </span>
                      <ArrowRight size={24} />
                    </NavLink>
                    <NavLink
                      onClick={() => setUserDropdown(false)}
                      to={"/my-favorite"}
                      className="w-full h-[44px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] hover:bg-primaryColor/20"
                    >
                      <span className="flex items-center space-x-2">
                        <img src={heart} alt="heart" />
                        <span>My Favorite</span>
                      </span>
                      <ArrowRight size={24} />
                    </NavLink>
                    <NavLink
                      onClick={() => setUserDropdown(false)}
                      to={"/payment-methods"}
                      className="w-full h-[44px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] hover:bg-primaryColor/20"
                    >
                      <span className="flex items-center space-x-2">
                        <img src={walleticon} />
                        <span>Payment Methods</span>
                      </span>
                      <ArrowRight size={24} />
                    </NavLink>
                    <NavLink
                      to={"/setting"}
                      onClick={() => setUserDropdown(false)}
                      className="w-full h-[44px] flex font-[500] items-center justify-between px-4 py-3 rounded-xl bg-[#F0F4FC] text-[#253E96] hover:bg-primaryColor/20"
                    >
                      <span className="flex items-center space-x-2">
                        <img src={settingicon} alt="setting-icon" />
                        <span>Setting</span>
                      </span>
                      <ArrowRight size={24} />
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-[10px]">
              <Button
                onClick={() => navigate("/login")}
                className="w-[130px] h-[40px] bg-[#253E96] text-white text-sm font-semibold rounded-[10px] hover:bg-[#1f337c]"
              >
                Login
              </Button>

              <Button
                onClick={() => navigate("/register-simple")}
                variant="outline"
                className="w-[130px] h-[40px] border border-[#253E96] text-[#253E96] text-sm font-semibold rounded-[10px] hover:bg-[#253E96] hover:text-white"
              >
                Signup
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Menu"
            className="p-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50 z-40" />
          <Drawer.Content className="fixed top-0 right-0 h-full w-72 bg-white p-6 z-50 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              {LogoDiv}
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close Menu"
                className="p-2"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className="text-gray-800 font-medium hover:text-primaryColor"
                onClick={() => setDrawerOpen(false)}
              >
                Home
              </NavLink>
              <a
                href="#"
                className="text-gray-800 font-medium hover:text-primaryColor"
                onClick={() => setDrawerOpen(false)}
              >
                History
              </a>
              <a
                href="#"
                className="text-gray-800 font-medium hover:text-primaryColor"
                onClick={() => setDrawerOpen(false)}
              >
                Calendar
              </a>
              <a
                href="#"
                className="text-gray-800 font-medium hover:text-primaryColor"
                onClick={() => setDrawerOpen(false)}
              >
                About Us
              </a>
            </nav>

            {user ? (
              <>
                {/* Show icons only for logged-in users on mobile */}
                {CommonButtons && (
                  <div className="mt-6 flex items-center gap-3">
                    {CommonButtons}
                  </div>
                )}
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="mt-6 w-full"
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="mt-8 flex flex-col space-y-3">
                <Button
                  onClick={() => {
                    navigate("/login");
                    setDrawerOpen(false);
                  }}
                  className="bg-primaryColor text-white"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate("/register-simple");
                    setDrawerOpen(false);
                  }}
                  variant="outline"
                  className="border-primaryColor text-primaryColor"
                >
                  Signup
                </Button>
              </div>
            )}
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-[490px] w-[375px] max-w-xs rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-6  shadow-lg focus:outline-none z-[99]">
            <div className="flex flex-col items-center text-center">
              <img src={alert} alt="" className="w-[210px] h-[210px]" />
              <Dialog.Title className="text-[28px] font-bold text-[#333333]">
                Are you sure?
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-lg text-[#677294]">
                are you sure you choose this service modal for sos buttons?
              </Dialog.Description>
              <div className="mt-4 flex flex-col w-full gap-4">
                <Dialog.Close asChild>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-[#E5E5E5] w-[293px] h-[54px] text-[#ED5E5E] px-4 py-2 rounded-lg text-semibold hover:bg-[#ED5E5E] hover:text-white mr-[19px]"
                  >
                    Yes I'm Sure
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-primaryColor  w-[293px] h-[54px] text-white px-4 py-2 rounded-lg text-semibold hover:bg-primaryColor/90 mr-[19px]"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
};

export default HomeHeader;
