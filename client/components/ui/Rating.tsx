import React from "react";
import star from "@/assets/icons/Star.svg";

type Props = {
  rating: string;
  className?: string;
};

const Rating = ({ rating, className }: Props) => {
  return (
    <p
      className={`text-white font-medium flex items-center gap-2 ${className}`}
    >
      {rating}
      <span>
        <img src={star} className="w-4 h-4" />
      </span>
    </p>
  );
};

export default Rating;
