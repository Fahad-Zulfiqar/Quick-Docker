import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Camera, X } from "lucide-react";
import doctor from "@/assets/doctorProfile/doctor-chat.jpg";
import vector from "@/assets/images/Texture.svg";
import * as Dialog from "@radix-ui/react-dialog";
import alert from "@/assets/images/alert.gif";
import { useNavigate } from "react-router-dom";

const DoctorChat = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "patient",
      text: "Hello! Doctor",
      time: "09:25 AM",
      type: "text",
    },
    {
      id: 2,
      sender: "doctor",
      text: "Hello ! Sarah How are you?",
      time: "09:25 AM",
      type: "text",
    },
    {
      id: 3,
      sender: "patient",
      text: "I feel nauseous",
      time: "09:25 AM",
      type: "text",
    },
    {
      id: 4,
      sender: "doctor",
      text: "Explain to me more",
      time: "09:25 AM",
      type: "text",
    },
    {
      id: 5,
      sender: "doctor",
      text: "So I can help",
      time: "09:25 AM",
      type: "text",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isChatActive, setIsChatActive] = useState(true);
  const [chatDuration, setChatDuration] = useState(2 * 60 + 23 + 32 / 60);
  const messagesEndRef = useRef(null);

  // Chat timer
  useEffect(() => {
    let interval;
    if (isChatActive) {
      interval = setInterval(() => {
        setChatDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isChatActive]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatChatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "patient",
        text: newMessage.trim(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "text",
      };
      setMessages([...messages, message]);
      setNewMessage("");

      // Simulate doctor response after 2 seconds
      setTimeout(() => {
        const doctorResponse = {
          id: messages.length + 2,
          sender: "doctor",
          text: "Thank you for sharing. Let me help you with that.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          type: "text",
        };
        setMessages((prev) => [...prev, doctorResponse]);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const endChat = () => {
    setIsChatActive(false);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="lg:min-h-full  min-h-screen  bg-[#F2F2F2] lg:pb-10 ">
      {/* Header */}
      <div className="bg-primaryColor hidden lg:block py-10 text-white relative">
        <div className="max-w-[1150px]  mx-auto">
          <p className="text-center text-5xl">Doctor Chat</p>
          <img src={vector} className="absolute right-0 top-0 h-32 w-auto" />
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto  lg:px-4 lg:py-8">
        <div className="bg-[#FFFFFF] lg:rounded-2xl lg:border border-[#CDCDCD] overflow-hidden">
          {/* Chat Header */}
          <div className="bg-white  border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Doctor Avatar */}
                <div className="relative">
                  <div>
                    <img
                      src={doctor}
                      alt="doctor-image"
                      className="w-[44px] h-[44px] object-cover rounded-[31px]"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Doctor Name</h3>
                  <p className="text-sm text-green-600">Active now</p>
                </div>
              </div>

              <div className="flex flex-col items-end space-x-4">
                <button
                  onClick={() => setOpen(true)}
                  className=" py-2 text-[#ED1C24] hover:bg-red-50 rounded-lg transition-colors font-semibold text-xs"
                >
                  End Chat
                </button>
                <div className="text-xs font-semibold text-primaryColor">
                  Package Time:{" "}
                  <span className="font-medium">
                    {formatChatTime(chatDuration)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Time Banner */}
          <div className="bg-green-50 px-6 py-3 border-b border-green-100">
            <div className="flex justify-between items-center text-sm">
              <span className="text-green-700 font-medium">Chat Time</span>
              <span className="text-green-700 font-medium">
                {formatChatTime(chatDuration)}
              </span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="lg:h-96 h-full overflow-y-auto px-6 py-4 bg-[#fff]">
            {/* Date Divider */}
            <div className="text-center mb-6">
              <span className="bg-white text-gray-600 text-xs px-3 py-1 rounded-full shadow-sm border">
                Today
              </span>
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {/* Patient: Hello! Doctor */}
              <div className="flex justify-end">
                <div className="flex flex-col items-end">
                  <div className="bg-[#253E96] text-white px-4 py-3 rounded-l-2xl rounded-bl-2xl rounded-br-2xl max-w-xs">
                    <p className="text-sm">Hello! Doctor</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">09:25 AM</p>
                </div>
              </div>

              {/* Doctor: Hello ! Sarah How are you? */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div>
                    <img
                      src={doctor}
                      alt="doctor-image"
                      className="w-[40px] h-[40px] object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-[12px] font-[14px]">Doctor name</p>
                    <div className="bg-[#F2F7FB] border border-gray-200 px-4 py-3 rounded-r-2xl rounded-bl-2xl rounded-br-2xl max-w-xs shadow-sm">
                      <p className="text-sm text-gray-800">
                        Hello ! Sarah How are you?
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2 text-end">
                      09:25 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient: I feel nauseous */}
              <div className="flex justify-end">
                <div className="flex flex-col items-end">
                  <div className="bg-[#253E96] text-white px-4 py-3 rounded-l-2xl rounded-bl-2xl rounded-br-2xl max-w-xs">
                    <p className="text-sm">I feel nauseous</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">09:25 AM</p>
                </div>
              </div>

              {/* Doctor: Explain to me more */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div>
                    <img
                      src={doctor}
                      alt="doctor-image"
                      className="w-[40px] h-[40px] object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-[12px] font-[14px]">Doctor name</p>
                    <div className="bg-[#F2F7FB]  border border-gray-200 px-4 py-3 rounded-r-2xl rounded-bl-2xl rounded-br-2xl max-w-xs shadow-sm">
                      <p className="text-sm text-gray-800">
                        Explain to me more
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2 text-end">
                      09:25 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Doctor: So I can help */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div>
                    <img
                      src={doctor}
                      alt="doctor-image"
                      className="w-[40px] h-[40px] object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="mb-[12px] font-[14px]">Doctor name</p>
                    <div className="bg-[#F2F7FB]  border border-gray-200 px-4 py-3 rounded-r-2xl rounded-bl-2xl rounded-br-2xl max-w-xs shadow-sm">
                      <p className="text-sm text-gray-800">So I can help</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 ml-2 text-end">
                      09:25 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 px-6 py-4 bg-white">
            <div className="flex items-center space-x-3">
              {/* Attachment Button */}
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>

              {/* Message Input */}
              <div className="flex-1 relative">
                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Write your message"
                  className="w-full h-10 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent text-sm"
                  disabled={!isChatActive}
                />
              </div>

              {/* Camera Button */}
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Camera className="w-5 h-5" />
              </button>

              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || !isChatActive}
                className="p-2 bg-primaryColor text-white rounded-full hover:bg-primaryColor disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Ended State */}
          {/* {!isChatActive && (
            <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
             
            </div>
          )} */}
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-[490px] w-[375px] max-w-xs rounded-xl -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-6 shadow-lg focus:outline-none z-[99]">
            <div className="flex flex-col items-center text-center">
              <img src={alert} alt="" className="w-[210px] h-[210px]" />
              <Dialog.Title className="text-[28px] font-bold text-[#333333]">
                Are you sure?
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-lg text-[#677294]">
                are you sure want end the chat
              </Dialog.Description>
              <div className="mt-4 flex flex-col w-full gap-4">
                <Dialog.Close asChild>
                  <button
                    onClick={handleClose}
                    className="bg-[#E5E5E5] w-[293px] h-[54px] text-primaryColor px-4 py-2 rounded-lg text-lg font-semibold hover:bg-[#ED5E5E] hover:text-white mr-[19px]"
                  >
                    Yes I'm Sure
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-primaryColor  w-[293px] h-[54px] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-primaryColor/90 mr-[19px]"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default DoctorChat;
