import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthRightSection from "@/components/common/AuthRightSection.tsx";
import { DoctorLogo } from "@/components/ui/doctor-logo";
import { DoctorButton } from "@/components/ui/doctor-button";
import { DoctorInput } from "@/components/ui/doctor-input";
import { SegmentedControl } from "@/components/ui/segmented-control";
import PhoneInput from "react-phone-input-2";
import "../../styles/phone-input-highres.css";
import "../../styles/phoneInput.css";
import PhoneNumberInput from "@/components/common/PhoneInput/PhoneNumberInput.tsx";
import CountriesFlags from "@/components/common/PhoneInput/CountriesFlags.tsx";
import PhoneTest from "@/components/common/PhoneInput/PhoneTest.tsx";

import { ChevronLeft, Eye, EyeOff, X } from "lucide-react";
import { useAppDispatch } from "@/store/hooks.ts";
import { setUser } from "@/store/slices/userSlice.ts";
import googleLogin from "@/assets/icons/google-logo.png";
import appleLogo from "@/assets/icons/apple-logo.png";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("phone"); // "phone" or "national"
  const [authType, setAuthType] = useState("password"); // "password" or "code"
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nationalId: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    const user = {
      name: "Dummy User",
      email: "user@mail.com",
      phone: "+923000000",
      profileImage: "",
    };
    dispatch(setUser(user));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row relative">
      <div className="flex flex-col w-full lg:w-1/2">
        {/* Logo - Top Left */}
        <div className=" hidden md:block pt-4 pl-4 top-6 left-6 z-10">
          <DoctorLogo />
        </div>

        {/* Mobile Header */}
        <div
          onClick={() => window.history.back()}
          className="md:hidden flex  justify-start items-center p-4 bg-white  pt-10"
        >
          <button className="bg-[#EBEBEB99]  w-[45px] h-[45px] place-content-center  rounded-[15px]">
            <ChevronLeft className="mx-auto text-primaryColor" />
          </button>
          <button className="px-4 py-2  text-base font-bold text-primaryColor ">
            Login
          </button>
        </div>

        {/* Left Side - Form */}
        <div className="relative lg:flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16  lg:py-0">
          <div className="max-w-sm mx-auto w-full mt-[60px]">
            {/* Title - Centered */}
            <div className="hidden md:block mb-6 text-center">
              <h2 className="text-4xl font-semibold text-black mb-2">
                Welcome Back
              </h2>
              <p className="text-black text-lg font-sm">
                Login into your account
              </p>
            </div>

            {/* Login Type Toggle */}
            <div className="flex justify-center">
              <div className="flex  border border-[#E4E4E4]  rounded-lg w-[260px] mb-6">
                <DoctorButton
                  variant={loginType === "phone" ? "toggleActive" : "toggle"}
                  className="flex-1 border border-[#E4E4E4] py-3 text-base focus:outline-none focus:ring-0"
                  onClick={() => setLoginType("phone")}
                >
                  Phone
                </DoctorButton>
                <DoctorButton
                  variant={loginType === "national" ? "toggleActive" : "toggle"}
                  className="flex-1 py-3  text-base focus:outline-none focus:ring-0 focus:border-none active:outline-none active:ring-0 active:border-none"
                  onClick={() => setLoginType("national")}
                >
                  Email
                </DoctorButton>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {loginType === "national" ? (
                <DoctorInput
                  label="Email"
                  type="email"
                  className="!border !border-[#253E96] rounded-[10px] h-[52px] flex items-center px-[8px]"
                  placeholder="example@email.com"
                  value={formData.nationalId}
                  onChange={(e) =>
                    handleInputChange("nationalId", e.target.value)
                  }
                />
              ) : (
                <div>
                  <label className="block text-lg font-medium text-textColor mb-2">
                    Phone Number
                  </label>
                  {/* <div className="flex">
                  <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                    <img 
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMyIgeT0iNiIgd2lkdGg9IjE4IiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDA5NzM5Ii8+CjxyZWN0IHg9IjMiIHk9IjYiIHdpZHRoPSIxOCIgaGVpZ2h0PSI0IiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjMiIHk9IjE0IiB3aWR0aD0iMTgiIGhlaWdodD0iNCIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4K" 
                      alt="UAE Flag" 
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm text-gray-700">+966</span>
                  </div>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-doctor-blue focus:border-transparent"
                  />
                </div> */}
                  {/* <PhoneInput
                    country={"il"} // Default country (change as needed)
                    enableSearch
                    value={formData.phoneNumber}
                    onChange={(value) =>
                      handleInputChange("phoneNumber", value)
                    }
                    inputClass="!border-none !outline-none !ring-0 !shadow-none !text-lg font-medium text-[#1a1a3f] h-[52px] pl-[16px] w-full"
                    containerClass="!border !border-[#253E96] rounded-[10px] h-[52px] flex items-center px-[8px] w-full"
                    buttonClass="!bg-transparent !border-none pr-[8px] mr-[8px] custom-dropdown-button"
                    dropdownClass="custom-dropdown !z-[9999] !rounded-lg !shadow-md !bg-white !border-none !p-2 !max-h-64 !overflow-y-auto w-full"
                    searchClass="!text-sm !px-3 !py-2 !border !bg-white !rounded-md !shadow-sm !placeholder-gray-400 !w-full !mb-2 !pl-0"
                    searchPlaceholder="Search Country"
                    placeholder="Enter phone number"
                  /> */}
                  {/* <PhoneNumberInput /> */}
                  <PhoneTest />
                </div>
              )}
              {/* Password Field */}
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-lg font-medium text-textColor ">
                    Password
                  </label>
                  <SegmentedControl
                    options={[
                      { value: "password", label: "Password" },
                      { value: "code", label: "Code" },
                    ]}
                    value={authType}
                    onChange={(value) => {
                      if (value === "code") {
                        setAuthType("code");
                        navigate("/login-code");
                      } else {
                        setAuthType("password");
                      }
                    }}
                    colors={{
                      password: "#28A265",
                      code: "#ED1C24",
                    }}
                  />
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="••••••••"
                    className="!border !border-[#B1B1B1] rounded-[10px] h-[52px] w-full px-[8px]"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#253E96] text-end w-full hover:underline mt-3 inline-block"
                >
                  Forgot password?
                </Link>
              </div>
              {/* Login Button */}
              <DoctorButton
                onClick={handleLogin}
                className="mt-6 bg-[#253E96] rounded-[10px] text-white text-lg font-semibold w-full"
              >
                Login
              </DoctorButton>
              <DoctorButton
                variant="outline"
                className="flex w-full items-center justify-center gap-2"
              >
                <img className="w-4 h-4" src={googleLogin} />
                Continue with Google
              </DoctorButton>
              <DoctorButton
                variant="outline"
                className="flex w-full items-center justify-center gap-2"
              >
                <img className="w-4 h-4" src={appleLogo} />
                Continue with Apple
              </DoctorButton>
            </div>
          </div>
          {/* Create Account Link */}
          <div className=" w-full py-[50px] text-center ">
            <span className="text-sm mr-1  font-medium text-[#7D8A95]">
              Don't have an account?
            </span>
            <Link
              to="/register-simple"
              className="text-sm text-[#253E96] hover:underline font-medium"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <AuthRightSection />
    </div>
  );
}
