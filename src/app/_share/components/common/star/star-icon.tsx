"use client";

import ReactStars from "react-stars";

export function DisplayStarIcon({ count }: { count: number }) {
  return (
    <>
      <ReactStars count={5} value={count ?? 5} size={36} color2={"#ffd700"} />
    </>
  );
}
