import React, { useRef, useState } from "react";
import { ChevronLeft, Plus, Calendar } from "lucide-react";
import vector from "@/assets/images/Texture.svg";
import user from "@/assets/icons/user.svg";
import PhoneTest from "@/components/common/PhoneInput/PhoneTest.tsx";
import { useNavigate } from "react-router-dom";
import SubHeader from "@/components/common/SubHeader";

const MyProfileEdit = () => {
  const navigate = useNavigate();

  // simple previews for ID uploads
  const [idFront, setIdFront] = useState<string | null>(null);
  const [idBack, setIdBack] = useState<string | null>(null);
  const frontRef = useRef<HTMLInputElement | null>(null);
  const backRef = useRef<HTMLInputElement | null>(null);

  const onPick = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (v: string | null) => void,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setter(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden lg:block">
        <SubHeader title="My Profile" />
      </div>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-4 bg-white  lg:hidden p-3"
      >
        <div className="bg-[#EBEBEB99] text-primaryColor rounded-[15px] flex justify-center items-center w-[45px] h-[45px]">
          <ChevronLeft size={20} />
        </div>
        <p className="font-bold text-base text-primaryColor">Edit My Profile</p>
      </div>

      {/* Edit card */}
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8"
        >
          {/* Row 1: Avatar + First/Last Name */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Avatar block */}
            <div className="lg:col-span-3 mx-auto lg:mx-0 ">
              <div className="relative w-36 h-36 rounded-full border border-primaryColor shadow-sm bg-white grid place-content-center">
                <img src={user} />
                <button
                  type="button"
                  className="absolute bottom-0 -right-1 w-10 h-10 rounded-full bg-primaryColor text-white grid place-content-center shadow"
                  aria-label="Change avatar"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* First / Last name */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-[#263A43] mb-1">
                  First Name
                </label>
                <input
                  defaultValue="Mahmoud"
                  className="w-full h-12 rounded-lg border-[0.6px] border-[#B1B1B1] text-primaryColor placeholder:primaryColor font-bold text-[15px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-[#263A43] mb-1">
                  Last Name
                </label>
                <input
                  defaultValue="Ahmad"
                  className="w-full h-12 rounded-lg border-[0.6px] border-[#B1B1B1] text-primaryColor placeholder:primaryColor font-bold text-[15px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Form grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Phone Number
              </label>
              {/* <div className="flex h-11 rounded-lg border border-gray-300 overflow-hidden">
                <div className="px-3 flex items-center gap-2 border-r border-gray-200 bg-gray-50">
                  <img
                    src="https://flagcdn.com/w20/il.png"
                    alt="Jordan"
                    className="h-4 w-5 object-cover rounded"
                  />
                  <span className="text-gray-700 text-sm">+965</span>
                </div>
                <input
                  type="tel"
                  defaultValue="799999999"
                  className="flex-1 px-3 outline-none"
                />
              </div> */}
              <PhoneTest />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="info@Mahmoud.com"
                className="w-full h-12 rounded-lg border-[0.6px] border-[#B1B1B1] text-primaryColor placeholder:primaryColor font-bold text-[15px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Date Of Birthday
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="15-10-1990"
                  className="w-full h-11 rounded-lg border border-gray-300 focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 pr-10 outline-none"
                />
                <Calendar className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* National ID */}
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                National id
              </label>
              <input
                defaultValue="123123123"
                className="w-full h-12 rounded-lg border-[0.6px] border-[#B1B1B1] text-primaryColor placeholder:primaryColor font-bold text-[15px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Gender
              </label>
              <select className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 text-gray-900 focus:border-primaryColor focus:ring-2 focus:ring-primaryColor outline-none">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Sick Fund Number */}
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Sick Fund Number
              </label>
              <input
                defaultValue="123123123"
                className="w-full h-12 rounded-lg border-[0.6px] border-[#B1B1B1] text-primaryColor placeholder:primaryColor font-bold text-[15px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                City
              </label>
              <select className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 text-gray-900 focus:border-primaryColor focus:ring-2 focus:ring-primaryColor outline-none">
                <option>Amman</option>
                <option>Zarqa</option>
                <option>Irbid</option>
              </select>
            </div>

            {/* Address (span 2) */}
            <div className="lg:col-span-2">
              <label className="block text-lg font-medium text-[#263A43] mb-1">
                Address
              </label>
              <input
                defaultValue="Amman - Jordan"
                className="w-full h-12 rounded-lg border-[0.6px] border-[#B1B1B1] text-primaryColor placeholder:primaryColor font-bold text-[15px] focus:border-primaryColor focus:ring-2 focus:ring-primaryColor px-3 outline-none"
              />
            </div>

            {/* ID Front */}
            <div>
              <label className="block text-lg font-medium text-textColor mb-2">
                Identity Front Side
              </label>
              <button
                type="button"
                onClick={() => frontRef.current?.click()}
                className="w-full h-36 rounded-xl border-[0.6px]  border-dashed border-primaryColor  bg-white grid place-content-center overflow-hidden"
              >
                {idFront ? (
                  // preview
                  <img
                    src={idFront}
                    alt="ID front preview"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="text-xs text-gray-500">
                    Click to upload (PNG/JPG)
                  </div>
                )}
              </button>
              <input
                ref={frontRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onPick(e, setIdFront)}
              />
            </div>

            {/* ID Back */}
            <div>
              <label className="block text-lg font-medium text-textColor mb-2">
                Identity Back Side
              </label>
              <button
                type="button"
                onClick={() => backRef.current?.click()}
                className="w-full h-36 rounded-xl border-[0.6px] border-dashed border-primaryColor bg-white grid place-content-center overflow-hidden"
              >
                {idBack ? (
                  <img
                    src={idBack}
                    alt="ID back preview"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="text-xs text-gray-500">
                    Click to upload (PNG/JPG)
                  </div>
                )}
              </button>
              <input
                ref={backRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onPick(e, setIdBack)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="submit"
              className="min-w-[120px] w-full lg:w-auto h-11 rounded-xl bg-primaryColor text-white font-medium hover:bg-primaryColor focus:ring-2 focus:ring-primaryColor"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="min-w-[120px] h-11 hidden lg:block rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfileEdit;
