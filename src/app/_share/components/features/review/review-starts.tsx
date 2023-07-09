"use client";

import ReactStars from "react-stars";

type Props = {
  rating: number;
  setRating: (rating: number) => void;
};

export function ReviewStars({ rating, setRating }: Props) {
  return (
    <div>
      <ReactStars
        count={5}
        onChange={(val) => setRating(val)}
        size={48}
        value={rating}
        color2={"#ffd700"}
      />
    </div>
  );
}
