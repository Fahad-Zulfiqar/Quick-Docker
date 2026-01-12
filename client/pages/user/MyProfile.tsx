import React, { useState } from "react";
import { ChevronLeft, IdCard, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import vector from "@/assets/images/Texture.svg";
import { clearUser } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/hooks";
import userImage from "@/assets/images/dummy-user.png";
import SubHeader from "@/components/common/SubHeader";

const MyProfile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = (field: "old" | "new" | "confirm") => {
    if (field === "old") setShowOldPassword(!showOldPassword);
    if (field === "new") setShowNewPassword(!showNewPassword);
    if (field === "confirm") setShowConfirmPassword(!showConfirmPassword);
  };

  const handleLogout = () => {
    dispatch(clearUser(null));
    navigate("/login");
  };

  const handleSubmit = () => {
    console.log("Password change submitted");

    // Reset form
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Close dialog
    setOpen(false);
  };

  const handleCancel = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setOpen(false);
  };

  return (
    <div className=" lg:bg-[#F2F2F2]">
      {/* Sub header */}
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
        <p className="font-bold text-base text-primaryColor">My Profile</p>
      </div>

      <div className="max-w-7xl mx-auto py-8 space-y-6">
        {/* Top profile card */}
        <div className="bg-white lg:rounded-[20px] lg:shadow-sm lg:border border-[#DEDEDE] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 border place-items-center place-content-center border-primaryColor rounded-full">
              <img
                src={userImage}
                alt="Avatar"
                className="w-10 h-10 rounded-full "
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Dummy User</h1>
              <Link
                to={"/my-profile-edit"}
                className="text-primaryColor text-lg font-semibold hover:underline"
              >
                Edit
              </Link>
            </div>
          </div>

          <div className="flex gap-3 mt-4 sm:mt-0">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 w-[170px] h-[46px] rounded-[15px] border border-primaryColor text-primaryColor text-sm font-semibold  hover:bg-gray-50"
            >
              Change password
            </button>
            <button
              className="px-4 py-2 w-[170px] h-[46px] rounded-xl border border-[#ED5E5E] text-sm font-semibold text-[#ED5E5E] hover:bg-red-50"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Details card */}
        <div className="bg-white grid grid-cols-1  lg:grid-cols-3 gap-4  w-full lg:rounded-[20px] lg:shadow-sm lg:border border-[#DEDEDE] p-6">
          <div className="grid col-span-2 w-full grid-cols-1 md:grid-cols-2 gap-4">
            {/* Email */}
            <div className="bg-[#F0F4FC]  rounded-lg p-4">
              <div className="flex items-start justify-between">
                <span className=" text-[#6E7177]">Email</span>
                <span className=" text-[#28A265]">Verified</span>
              </div>
              <a
                href="mailto:info@Mahmoud.com"
                className="block mt-2 font-medium underline"
              >
                info@Mahmoud.com
              </a>
            </div>

            {/* Gender */}
            <div className="bg-[#F0F4FC]  rounded-lg p-4">
              <span className="text-[#6E7177]">Gender</span>
              <div className="mt-2 font-medium text-gray-900">male</div>
            </div>

            {/* Phone */}
            <div className="bg-[#F0F4FC]  rounded-lg p-4">
              <div className="flex items-start justify-between">
                <span className="text-[#6E7177]">Phone Number</span>
                <span className="text-[#28A265]">Verified</span>
              </div>
              <div className="mt-2 font-medium  flex items-center gap-2">
                <img
                  src="https://flagcdn.com/w20/il.png"
                  alt="israel flag"
                  className="w-5 h-4"
                />
                +972 79 999 9999
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#F0F4FC]  rounded-lg p-4">
              <span className="text-[#6E7177]">Address</span>
              <div className="mt-2 font-medium text-gray-900">
                Address details …
              </div>
            </div>

            {/* Birthdate */}
            <div className="bg-[#F0F4FC]  rounded-lg p-4">
              <span className="text-[#6E7177]">Birthdate</span>
              <div className="mt-2 font-medium text-gray-900">15-10-1990</div>
            </div>
          </div>
          {/* Identity */}
          <div className=" w-full border border-[#F0F4FC] h-[190px] rounded-lg p-4 ">
            <div className="flex items-center gap-2 mb-3">
              <IdCard className="w-6 h-5 text-primaryColor" />
              <span className="text-base font-medium">Identity</span>
            </div>
            <div className="bg-white  p-3 flex items-center justify-between gap-3">
              <img
                src="https://via.placeholder.com/160x110?text=Front"
                alt="ID front"
                className="h-24 w-auto rounded-md object-cover"
              />
              <img
                src="https://via.placeholder.com/160x110?text=Back"
                alt="ID back"
                className="h-24 w-auto rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Dialog */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 w-[400px] max-w-[90vw] max-h-[90vh] rounded-[16px] -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg focus:outline-none overflow-y-auto">
            <Dialog.Title className="text-2xl font-semibold text-[#333333] mb-6">
              Change password
            </Dialog.Title>

            <div className="space-y-6">
              {/* Old Password */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Old Password
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent bg-gray-50"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("old")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent bg-gray-50"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("new")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent bg-gray-50"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                className="flex-1 bg-primaryColor text-white py-3 px-4 rounded-lg font-medium hover:bg-primaryColor/80 transition-colors"
                onClick={handleSubmit}
              >
                Change
              </button>
              <button
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default MyProfile;
