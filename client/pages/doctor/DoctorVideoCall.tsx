import React, { useState } from "react";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Settings,
  ChevronDown,
  Play,
} from "lucide-react";
import vector from "@/assets/images/Texture.svg";
import doctorVideo from "@/assets/doctorProfile/doctor-video.png";

const DoctorVideoCall = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState("FaceTime HD Camera");
  const [selectedMic, setSelectedMic] = useState("MacBook Pro Mic");

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const toggleMic = () => {
    setIsMicOn(!isMicOn);
  };

  const handleStartCall = () => {
    // Navigate to call interface or start call logic
    console.log("Starting video call...");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header */}
      <div className="bg-primaryColor py-10 text-white relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-5xl">Video Call</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Video Preview Container */}
        <div
          className="relative mb-8  bg-cover bg-center  rounded-[20px] mx-auto w-[766px] h-[436px]"
          style={{ backgroundImage: `url(${doctorVideo})` }}
        >
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Feed */}
            <div className="relative ">
              {isVideoOn ? (
                // Simulated video feed with doctor image
                <div className="w-full h-full bg-gradient-to-br from-primaryColor to-blue-50 flex items-center justify-center relative">
                  {/* Doctor in office setting */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
                    <div className="text-center">
                      {/* Doctor representation */}
                      {/* <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-primaryColor to-primaryColor flex items-center justify-center shadow-lg">
                        <div className="text-6xl">👩🏻‍⚕️</div>
                      </div> */}
                    </div>
                  </div>

                  {/* Office background elements */}
                  <div className="absolute top-4 left-4 w-16 h-12 bg-amber-100 rounded opacity-20"></div>
                  <div className="absolute top-8 right-8 w-8 h-16 bg-green-200 rounded opacity-30"></div>
                  <div className="absolute bottom-6 left-8 w-12 h-8 bg-gray-300 rounded opacity-25"></div>
                </div>
              ) : (
                // Video off state
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <VideoOff className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg">Camera is off</p>
                  </div>
                </div>
              )}
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {/* Video Toggle */}
              <button
                onClick={toggleVideo}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
                  isVideoOn
                    ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                {isVideoOn ? (
                  <Video className="w-5 h-5" />
                ) : (
                  <VideoOff className="w-5 h-5" />
                )}
              </button>

              {/* Mic Toggle */}
              <button
                onClick={toggleMic}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg ${
                  isMicOn
                    ? "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                {isMicOn ? (
                  <Mic className="w-5 h-5" />
                ) : (
                  <MicOff className="w-5 h-5" />
                )}
              </button>

              {/* Settings */}
              <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 flex items-center justify-center transition-all duration-200 shadow-lg">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Device Selection */}
        <div className="flex justify-end mr-10 items-end space-x-4 mb-8">
          {/* Camera Selection */}
          <div className="relative">
            <select
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
              className="appearance-none bg-white border border-[#7F7F7F] rounded-full px-6 py-3 pr-12 text-sm font-medium text-[#7F7F7F] shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor focus:text-primaryColor"
            >
              <option value="FaceTime HD Camera">📹 FaceTime HD Camera</option>
              <option value="External Camera">📹 External Camera</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

          {/* Microphone Selection */}
          <div className="relative ">
            <select
              value={selectedMic}
              onChange={(e) => setSelectedMic(e.target.value)}
              className=" appearance-none bg-white border border-[#7F7F7F] rounded-full px-6 py-3 pr-12 text-sm font-medium text-[#7F7F7F] shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-primaryColor focus:text-primaryColor"
            >
              <option value="External Microphone">
                🎤 External Microphone
              </option>
              <option value="MacBook Pro Mic">🎤 MacBook Pro Mic</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Start Call Button */}
        <div className="text-center">
          <button
            onClick={handleStartCall}
            className="w-[236px] h-[56px] inline-flex justify-center items-center px-8 py-4 bg-[#253E96] hover:bg-primaryColor text-white font-semibold rounded-[15px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Start Call
            <Video className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorVideoCall;
