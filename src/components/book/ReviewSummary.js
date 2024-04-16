import React from "react";
import { ReviewStar } from "./ReviewStar";

export const ReviewSummmary = ({ averageRating, ratingsCount }) => {
  let stars = ["unfilled", "unfilled", "unfilled", "unfilled", "unfilled"];
  const filledStarsCount = Math.ceil(averageRating);
  for (let i = 0; i < filledStarsCount; i++) stars[i] = "filled";
  for (let i = filledStarsCount; i < 5 - filledStarsCount; i++)
    stars[i] = "unfilled";

  return (
    <div className="review-summmary">
      <p className="rating">
        {stars.map((starInfo, i) => (
          <ReviewStar
            isFilled={starInfo === "filled" ? true : false}
            key={`${i}-${starInfo}`}
          />
        ))}

        <span className="rating-count">
          ({ratingsCount ? ratingsCount : 0})
        </span>
      </p>
    </div>
  );
};
