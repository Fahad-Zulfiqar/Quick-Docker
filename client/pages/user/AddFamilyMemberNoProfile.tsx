import { Plus, Calendar, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import user from "@/assets/icons/user.svg";
import ThankYou from "@/components/models/Thank-you";

const AddFamilyMemberNoProfile: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:min-h-max ">
      {isMobile && (
        <div  
                         onClick={() => navigate(-1)}
                         className="flex items-center gap-4 bg-white lg:hidden p-4"
                       >
                         <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
                           <ChevronLeft size={20} />
                         </div>
                         <p className="font-bold text-base text-primaryColor">User Has a Profile</p>
                       </div>
      )}
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          className="bg-white lg:rounded-2xl lg:shadow-sm lg:border border-gray-200  lg:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center lg:items-start">
            <div className="lg:col-span-1 mx-auto lg:mx-0">
              <div className="relative w-36 h-36 rounded-full border border-primaryColor shadow-sm bg-white grid place-content-center">
                <img src={user} alt="User avatar" />
                <button
                  type="button"
                  className="absolute bottom-0 -right-1 w-10 h-10 rounded-full bg-primaryColor text-white grid place-content-center shadow"
                  aria-label="Change avatar"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-[#263A43] mb-1">
                  First Name
                </label>
                <input
                  defaultValue="Mahmoud"
                  className="w-full h-14 rounded-lg border-[0.6px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                  aria-label="First Name"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-[#263A43] mb-1">
                  Last Name
                </label>
                <input
                  defaultValue="Ahmad"
                  className="w-full h-14 rounded-lg border-[0.6px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                  aria-label="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="15-10-1990"
                  className="w-full h-14 text-primaryColor rounded-lg border-[0.6px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                  aria-label="Date of Birth"
                />
                <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Relationship to User
              </label>
              <select
                className="w-full min-h-14 rounded-lg border-[0.6px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                aria-label="Relationship to User"
              >
                <option>Brother</option>
                <option>Father</option>
                <option>Mother</option>
                <option>Sister</option>
                <option>Son</option>
                <option>Wife</option>
                <option>Daughter</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Gender
              </label>
              <select
                className="w-full h-14 text-primaryColor rounded-lg border-[0.6px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                aria-label="Gender"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="Same house"
                className="border-[1px] border-[#ccc] w-[106px] h-[33px] rounded-[10px] mr-[10px] text-center"
                aria-label="Location"
              />
              <button
                type="button"
                className="bg-transparent text-[#253E96] w-[60px] h-[33px] rounded-[10px] border-[1px] border-[#253E96]"
                aria-label="Other location"
              >
                Other
              </button>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Address
              </label>
              <input
                defaultValue="Amman - Jordan"
                className="w-full h-14 rounded-lg border-[0.6px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                aria-label="Address"
              />
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-4">
            <button
              type="submit"
              className="lg:min-w-[215px] w-full lg:w-auto h-[54px] rounded-2xl text-lg bg-primaryColor text-white font-medium hover:bg-primaryColor focus:ring-2 focus:ring-primaryColor"
              aria-label="Add family member"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => navigate("/add-family-member")}
              className="min-w-[215px] hidden lg:block h-[54px] rounded-2xl bg-[#B6B6B6] text-lg text-white font-medium hover:bg-gray-300"
              aria-label="Cancel"
            >
              Cancel
            </button>
          </div>
        </form>
        <ThankYou isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default AddFamilyMemberNoProfile;