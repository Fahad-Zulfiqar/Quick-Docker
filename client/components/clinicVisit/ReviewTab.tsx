import { Star, Plus, X } from "lucide-react";
import { useState } from "react";

import ReviewModal from "./ReviewModal";

const ReviewsTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [note, setNote] = useState("");

  const reviews = [
    {
      id: 1,
      rating: 5,
      date: "20/10/2024 - 02:00PM",
      author: "Ahmad",
      comment: "Best doctor ever.",
    },
    {
      id: 2,
      rating: 5,
      date: "20/10/2024 - 02:00PM",
      author: "Ahmad",
      comment: "Best doctor ever.",
    },
    {
      id: 3,
      rating: 5,
      date: "20/10/2024 - 02:00PM",
      author: "Ahmad",
      comment: "Best doctor ever.",
    },
    {
      id: 4,
      rating: 5,
      date: "20/10/2024 - 02:00PM",
      author: "Ahmad",
      comment: "Best doctor ever.",
    },
    {
      id: 5,
      rating: 5,
      date: "20/10/2024 - 02:00PM",
      author: "Ahmad",
      comment: "Best doctor ever.",
    },
  ];

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRating(0);
    setSelectedEmoji(null);
    setNote("");
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Rating:", selectedRating);
    console.log("Emoji:", selectedEmoji);
    console.log("Note:", note);
    handleModalClose();
  };

  return (
    <>
      <div className="space-y-6 bg-white p-6    lg:rounded-[20px] shadow-sm">
        <div className="hidden  lg:flex items-center justify-between">
          <h3 className="text-base font-bold text-primaryColor">Reviews</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-10 py-2 bg-primaryColor/10 text-primaryColor rounded-lg text-base font-medium"
          >
            <Plus className="w-4 h-4" />
            <span>Add Rate</span>
          </button>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center p-0 m-0  text-primaryColor rounded-lg text-sm font-semibold"
        >
          <Plus className="w-4 h-4" />
          <span>Add Rate</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#EAEAEA] rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-1">
                  <Star className="w-4 h-4 text-[#F9E000] fill-current" />
                  <span className="font-semiBold text-[#33384B]">
                    {review.rating}
                  </span>
                </div>
                <div className="text-xs text-[#7D8A95]">{review.date}</div>
              </div>

              <div className="font-semiBold mb-2">{review.author}</div>

              <p className="text-[#7D8A95] text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          <ReviewModal
            handleModalClose={handleModalClose}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </>
  );
};

export default ReviewsTab;
