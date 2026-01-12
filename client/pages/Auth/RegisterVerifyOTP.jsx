import { useState } from "react";
import { Link } from "react-router-dom";
import { DoctorLogo } from "@/components/ui/doctor-logo";
import QuickDoctorLogo from "@/assets/Frame.png";
import { DoctorButton } from "@/components/ui/doctor-button";
import { DoctorOTPInput } from "@/components/ui/doctor-input";
import { ChevronLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthRightSection from "@/components/common/AuthRightSection.tsx";

export default function RegisterVerifyOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleResendCode = () => {
    // Resend OTP logic here
    console.log("Resending OTP...");
  };

  const handleVerify = () => {
    // Verification logic here
    console.log("Verifying OTP:", otp);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row relative">
      {/* Logo - Top Left */}
      <div className="hidden md:block absolute top-6 left-6 z-10">
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
          Verify Account
        </button>
      </div>

      {/* Left Side - Form */}
      <div className="md:flex-1  flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-0 lg:py-0">
        <div className="  mx-auto w-full">
          {/* Title - Centered */}
          <div className="mb-8 text-center">
            <h2 className=" hidden lg:block text-4xl font-semibold text-black mb-2">
              Verify Account!
            </h2>
            <p className="lg:text-black text-start lg:text-center !w-full text-sm text-[#4F4F4F] lg:text-lg font-sm ">
              Enter 4-digit Code code we have sent to at +966 87 878 9890
            </p>
          </div>

          {/* OTP Input */}
          <div className="max-w-lg mx-auto mb-6">
            <DoctorOTPInput
              value={otp}
              onChange={setOtp}
              length={6}
              className="mb-6"
            />
          </div>

          {/* Resend Code Link */}
          <div className="text-center ">
            <span className="text-base text-[#6E7177]">
              Didn't receive the code?{" "}
            </span>
          </div>
          <button
            onClick={handleResendCode}
            className="text-center mb-6 w-full font-semibold text-base text-[#253E96] hover:underline "
          >
            Resend Code
          </button>

          {/* Verify Button */}
          <div className="flex justify-center w-full">
            <DoctorButton
              className="w-[400px] text-lg font-semibold rounded-[10px]"
              onClick={handleVerify}
              disabled={otp.length !== 6}
            >
              Verify
            </DoctorButton>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <AuthRightSection />
      
      
    </div>
  );
}
