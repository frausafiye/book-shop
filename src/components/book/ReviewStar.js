import React from "react";

export const ReviewStar = ({ isFilled }) => {
  return (
    <span className={`star  ${isFilled ? "star-filled" : "star-unfilled"}`}>
      {isFilled ? "★" : "☆"}
    </span>
  );
};
