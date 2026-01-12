import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuickDoctorLogo from "@/assets/Frame.png";
import { DoctorLogo } from "@/components/ui/doctor-logo";
import { DoctorButton } from "@/components/ui/doctor-button";
import { DoctorInput } from "@/components/ui/doctor-input";
import PhoneInput from "react-phone-input-2";
import "../../styles/phone-input-highres.css";
import "../../styles/phoneInput.css";
import { ChevronLeft, Eye, EyeOff, X } from "lucide-react";
import AuthRightSection from "@/components/common/AuthRightSection.tsx";
import googleLogin from "@/assets/icons/google-logo.png";
import appleLogo from "@/assets/icons/apple-logo.png";
import PhoneTest from "@/components/common/PhoneInput/PhoneTest.tsx";
import Calendar from "@/assets/icons/calender.svg";
import DatePicker from "react-datepicker";
import '@/styles/react-date-pickr.css'



export default function RegisterSimple() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegister = () => {
    // Registration logic here
    navigate("/register-verify-otp");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row relative">
      {/* Logo - Top Left */}
      <div className="flex flex-col w-full lg:w-1/2">
        <div className=" hidden md:block pt-4 pl-4 top-6 left-6 z-10">
          <DoctorLogo />
        </div>

        {/* Mobile Header */}
        <div
          onClick={() => window.history.back()}
          className="md:hidden flex  justify-start items-center p-4 bg-white  pt-10"
        >
          <button className="bg-[#EBEBEB99] w-[45px] h-[45px] place-content-center  rounded-[15px]">
            <ChevronLeft className="mx-auto text-primaryColor" />
          </button>
          <button className="px-4 py-2  text-base font-bold text-primaryColor ">
            Register
          </button>
        </div>

        {/* Left Side - Form */}
        <div className="md:flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 bg-white  lg:py-0 md:pt-24 lg:pt-8">
          <div className=" mx-auto w-full">
            {/* Title - Centered */}
            <div className="hidden md:block mb-8 text-center">
              <h2 className="text-4xl font-semibold text-black mb-2">
                Register
              </h2>
              <p className="text-black text-lg w-full ">
                Please enter the Name and Password to access your account
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4 max-w-sm mx-auto">
              {/* First Name */}
              <DoctorInput
                label="First Name"
                type="text"
                placeholder="First Name"
                className="rounded-[10px] h-[52px] w-full px-[8px]"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              {/* Last Name */}
              <DoctorInput
                label="Last Name"
                type="text"
                placeholder="Last Name"
                className="rounded-[10px] h-[52px] w-full px-[8px]"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
              {/* Phone Number */}
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
                  onChange={(value) => handleInputChange("phoneNumber", value)}
                  inputClass="!border-none !outline-none !ring-0 !shadow-none !text-lg font-medium text-[#1a1a3f] h-[52px] pl-[16px] w-full"
                  containerClass="!border !border-[#253E96] rounded-[10px] h-[52px] flex items-center px-[8px] w-full"
                  buttonClass="!bg-transparent !border pr-[8px] mr-[8px] custom-dropdown-button"
                  dropdownClass="custom-dropdown !z-[9999] !rounded-lg !shadow-md !bg-white !border-none !p-2 !max-h-64 !overflow-y-auto w-full"
                  searchClass="!text-sm !px-3 !py-2 !border-none !bg-white !rounded-md !shadow-sm !placeholder-gray-400 !w-full !mb-2 !pl-0"
                  searchPlaceholder="Search Country"
                  placeholder="Enter phone number"
                /> */}
                <PhoneTest />
              </div>

              {/* Date of Birth as 3 selects (Day / Month / Year) */}
              <div>
                <label className="block text-lg font-medium text-textColor mb-2">
                  Date Of Birth
                </label>

                {/* <div className="relative w-full">
                  <input
                    type="date"
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-doctor-blue
                   bg-white pr-10 
                   [&::-webkit-calendar-picker-indicator]:opacity-0 
                   [&::-webkit-calendar-picker-indicator]:absolute 
                   [&::-webkit-calendar-picker-indicator]:w-full 
                   [&::-webkit-calendar-picker-indicator]:h-full 
                   [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                  <img
                    src={Calendar}
                    className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  />
                </div> */}
               <div className="relative w-full">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        placeholderText="Select your date of birth"
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select" // makes year dropdown a select, not scroll
        className="py-3 !border-[0.6px] !border-[#B1B1B1] text-sm focus:outline-none focus:ring-2 focus:ring-doctor-blue focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed rounded-[10px] h-[52px] w-full px-[8px]"
      />
      {/* <Calendar className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" /> */}
    </div>

                {/* <div className="flex gap-3">
             
                <div className="relative flex-1">
                  <select
                    value={dobParts.day}
                    onChange={(e) => handleDobChange("day", e.target.value)}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-doctor-blue focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">DD</option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

              
                <div className="relative flex-1">
                  <select
                    value={dobParts.month}
                    onChange={(e) => handleDobChange("month", e.target.value)}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-doctor-blue focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">MM</option>
                    {months.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                
                <div className="relative flex-1">
                  <select
                    value={dobParts.year}
                    onChange={(e) => handleDobChange("year", e.target.value)}
                    className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-doctor-blue focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">YYYY</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div> */}
              </div>
              {/* Password */}
              <div className="relative">
                <label className="block text-lg font-medium text-textColor mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="••••••••"
                    className="!border-[0.6px] !border-[#B1B1B1] rounded-[10px] h-[52px] w-full px-[8px]"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              {/* Confirm Password */}
              <div className="relative">
                <label className="block text-lg font-medium text-textColor mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    placeholder="••••••••"
                    className="!border-[0.6px] !border-[#B1B1B1] rounded-[10px] h-[52px] w-full px-[8px]"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primaryColor focus:ring-primaryColor"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm space-x-1 text-gray-900"
                >
                  I have read and agree to the{" "}
                  <Link
                    to={"/terms"}
                    className="text-primaryColor text-nowrap mr-1 hover:underline"
                  >
                    Terms of Service
                  </Link>
                  &
                  <Link
                    to={"/privacy-policy"}
                    className="text-primaryColor hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {/* Register Button */}
              <DoctorButton
                className="mt-6 text-lg font-semibold w-full"
                onClick={handleRegister}
                disabled={!isAgreed}
              >
                Register
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
              {/* Login Link */}
              <div className="text-center py-6">
                <span className="text-sm font-medium text-[#7D8A95]">
                  Already have an account?{" "}
                </span>
                <Link
                  to="/login"
                  className="text-sm  text-primaryColor hover:underline font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side - Illustration */}
      <AuthRightSection />
    </div>
  );
}
