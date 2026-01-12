import React, { useState } from "react";
import vector from "@/assets/images/Texture.svg";
import ratingStar from "@/assets/images/rating-star.svg";
import { X } from "lucide-react";

const emojis = [
  { id: 1, emoji: "😔", label: "Very Dissatisfied" },
  { id: 2, emoji: "😕", label: "Dissatisfied" },
  { id: 3, emoji: "😐", label: "Neutral" },
  { id: 4, emoji: "🙂", label: "Satisfied" },
  { id: 5, emoji: "😄", label: "Very Satisfied" },
];

type Props = {};

const ReviewModal = ({ handleModalClose, handleSubmit }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [note, setNote] = useState("");

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleEmojiClick = (emojiId) => {
    setSelectedEmoji(emojiId);
  };
  return (
    <div
      onClick={handleModalClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center lg:p-4 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-black lg:rounded-2xl h-screen lg:h-auto w-full lg:max-w-2xl  lg:mx-4 overflow-hidden relative"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3F56A6] to-[#13276B] flex justify-center items-center lg:h-[125px] h-[25vh] relative  text-center">
          <div>
            <img
              src={vector}
              className="absolute right-0 w-screen top-0 lg:h-32 h-full lg:w-auto"
            />
          </div>
          <h2 className="lg:text-2xl hidden lg:block font-medium text-white  ">
            How would you rate the
            <br />
            experience and service ?
          </h2>
          <div
            onClick={() => handleModalClose()}
            className="absolute right-4 top-8 text-white bg-[#EBEBEB4D] p-3 rounded-[15px]"
          >
            <X size={20} />
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-8">
          {/* Emoji Selection */}
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-6">
            {/* Star circle */}
            <div className=" lg:-mt-24 -mt-32 z-10 w-40 h-40 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center border-4 border-gray-100">
              <img src={ratingStar} className="lg:w-32 lg:h-32" />
            </div>
            <h2 className="text-base lg:hidden text-center px-4  font-medium text-[#161616]  ">
              How would you rate the experience and service ?
            </h2>
            <div>
              <div className="flex justify-center mb-2 space-x-6">
                {emojis.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleEmojiClick(item.id)}
                    className={`  shadow-sm h-10 w-10 rounded-full flex items-center justify-center text-[50px] transition-all duration-200 ${
                      selectedEmoji === item.id ? "scale-110" : "opacity-50"
                    }`}
                  >
                    {item.emoji}
                  </button>
                ))}
              </div>
              <p className=" font-semibold text-xl mb-6 italic text-[#DDDDDD]">
                Choose your experience
              </p>
            </div>
          </div>

          {/* Note Section */}
          <div className="mb-6">
            <label className="block text-[#263A43] text-lg font-medium mb-2">
              Note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="It was good experience ..."
              className="w-full lg:h-28 h-44 border border-[#B1B1B1]  p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primaryColor/30"
            />
          </div>

          {/* Done Button */}
          <div className="mx-auto lg:w-60">
            <button
              onClick={handleSubmit}
              className="w-full  bg-primaryColor hover:bg-[#1E3A99] text-white py-3 rounded-[15px] text-lg font-medium transition-colors duration-200"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
