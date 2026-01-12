import React, { useState, useEffect } from "react";
import { Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX } from "lucide-react";
import vector from "@/assets/images/Texture.svg";
import callDr from "@/assets/images/callDr.svg";
import ReviewModal from "@/components/clinicVisit/ReviewModal";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";
const DoctorCall = () => {
  const [callDuration, setCallDuration] = useState(22 * 60 + 55); // 22:55 in seconds
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const serviceType = useAppSelector((state) => state.dr.serviceType);

  // Timer effect for call duration
  useEffect(() => {
    let interval;
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCallActive]);

  // Format duration to MM:SS
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")} min`;
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setIsModalOpen(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
  };

  const handleRatingSubmit = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] lg:pb-10">
      {/* Header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-5xl">Doctor Call</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>

      {/* Call Interface Content */}
      <div className="max-w-6xl  mx-auto lg:px-4 lg:py-8">
        <div className="bg-gradient-to-b h-screen flex flex-col items-center justify-around lg:h-[550px] from-[#000046]/70 to-[#043D7C] lg:rounded-3xl p-8 shadow-2xl">
          {/* Doctor Info */}
          <div className="text-center  lg:mb-12">
            <p className="text-white text-base font-bold mb-6 lg:hidden">
              {serviceType === "call" ? "Voice Call" : "Video Call"}
            </p>
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-white p-1 shadow-lg">
                <div className="w-full h-full rounded-full  flex items-center justify-center overflow-hidden">
                  {/* Doctor Avatar - Using emoji as placeholder */}
                  <img src={callDr} />
                </div>
              </div>
            </div>

            <h2 className="text-lg font-bold text-white mb-2">
              Dr. Sarah Ahmad
            </h2>

            <div className="text-[#C0D4FB] text-base font-semibold mb-2">
              {formatDuration(callDuration)}
            </div>

            {/* Call Status */}
            <div className="text-[#C0D4FB] text-base font-semibold">
              {/* {isCallActive ? "Call in progress..." : "Call ended"} */}{" "}
              Please Wait
            </div>
          </div>
          <div>
            {/* Call Controls */}
            <div className="flex justify-center items-center space-x-6">
              {/* Speaker Toggle */}
              <button
                onClick={toggleSpeaker}
                className={`w-20 h-16 p-2 rounded-[48px] flex items-center justify-center transition-all duration-200 shadow-lg ${
                  isSpeakerOn
                    ? "bg-white/50 text-white hover:bg-white/30"
                    : "bg-white/30 text-primaryColor hover:bg-white/20"
                }`}
              >
                {isSpeakerOn ? (
                  <Volume2 className="w-7 h-7" />
                ) : (
                  <VolumeX className="w-7 h-7" />
                )}
              </button>

              {/* Microphone Toggle */}
              <button
                onClick={toggleMute}
                className={`w-20 h-16 p-2 rounded-[48px] flex items-center justify-center transition-all duration-200 shadow-lg ${
                  isMuted
                    ? "bg-white/20 text-white hover:bg-red-600"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {isMuted ? (
                  <MicOff className="w-7 h-7" />
                ) : (
                  <Mic className="w-7 h-7" />
                )}
              </button>
            </div>
            <div className="flex justify-center items-center mt-3">
              {/* End Call Button */}
              <button
                onClick={handleEndCall}
                className="w-20 h-16 p-2 rounded-[48px] bg-[#ED5E5E] hover:bg-red-600 flex items-center justify-center transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                <PhoneOff className="w-7 h-7 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ReviewModal
          handleModalClose={() => setIsModalOpen(false)}
          handleSubmit={handleRatingSubmit}
        />
      )}
    </div>
  );
};

export default DoctorCall;
