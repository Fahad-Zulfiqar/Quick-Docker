import React, { useState, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import ThankYou from "@/components/models/Thank-you";

const AddFamilyMember: React.FC = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleAddClick = () => {
    setShowVerification(true);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = verificationCode.join("");
    if (code.length === 4) {
      console.log("Verifying code:", code);
      setOpen(true);
    }
  };

  const handleResendCode = () => {
    setVerificationCode(["", "", "", ""]);
    console.log("Resending verification code");
  };

  const goBack = () => {
    setShowVerification(false);
    setVerificationCode(["", "", "", ""]);
  };

  return (
    <div className=" lg:min-h-max ">
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
        {!showVerification ? (
          <div className="bg-white lg:rounded-2xl lg:border border-gray-200 shadow-sm lg:p-6">
            <p className="text-[#4F4F4F] mb-6">
              Enter the national number of the user you want to add
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block lg:text-sm font-medium text-lg text-textColor mb-1">
                  National ID
                </label>
                <input
                  placeholder="National ID"
                  className="w-full h-14 rounded-lg border-[0.6px] border-[#B1B1B1] px-3 text-primaryColor focus:border-primaryColor focus:ring-2 focus:ring-primaryColor outline-none"
                  aria-label="National ID"
                />
              </div>
              <div>
                <label className="block lg:text-sm font-medium text-lg text-textColor mb-1">
                  Relationship to User
                </label>
                <select
                  className="w-full h-14  border-[0.6px] border-[#B1B1B1] px-3 text-primaryColor focus:border-primaryColor focus:ring-2 focus:ring-primaryColor outline-none rounded-lg"
                  aria-label="Relationship to User"
                >
                  <option value="">Select relationship</option>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Spouse</option>
                  <option>Child</option>
                </select>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleAddClick}
                className="lg:min-w-[215px] w-full lg:w-auto h-[54px] rounded-2xl text-lg font-semibold bg-primaryColor text-white  focus:ring-2 focus:ring-primaryColor"
                aria-label="Add family member"
              >
                {isMobile?'Complete':'Add'}
              </button>
              <button
                type="button"
                onClick={() => navigate("/add-family-member")}
                className="min-w-[215px] hidden lg:block h-[54px] rounded-2xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300"
                aria-label="Cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white lg:rounded-2xl lg:border border-gray-200 shadow-sm p-8">
            <button
              onClick={goBack}
              className="mb-6 hidden lg:block text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Verify Account
              </h2>
              <p className="text-gray-600">
                Enter 4-digit code sent to +966 87 878 9890
              </p>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-16 h-16 text-center text-xl font-semibold border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor transition-colors ${
                    digit ? "border-primaryColor" : "border-gray-300"
                  }`}
                  aria-label={`Verification code digit ${index + 1}`}
                />
              ))}
            </div>
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">Didn't receive the code?</p>
              <button
                onClick={handleResendCode}
                className="text-primaryColor hover:text-primaryColor font-medium transition-colors"
                aria-label="Resend verification code"
              >
                Resend Code
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleVerify}
                disabled={verificationCode.join("").length !== 4}
                className="min-w-[215px] h-[54px] py-3 px-8 bg-primaryColor text-white font-semibold rounded-2xl disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                aria-label="Verify code"
              >
                Verify
              </button>
            </div>
          </div>
        )}
        <ThankYou isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default AddFamilyMember;